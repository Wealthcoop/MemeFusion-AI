// Test script to verify Gemini API key is working
require('dotenv').config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent';

console.log('🔑 Testing Gemini API Key...\n');
console.log('API Key:', GEMINI_API_KEY ? `${GEMINI_API_KEY.substring(0, 20)}...` : 'NOT FOUND');
console.log('API URL:', GEMINI_API_URL);
console.log('\n📡 Sending test request...\n');

// Test with a simple text prompt
const testPayload = {
  contents: [{
    parts: [{
      text: "Say 'Hello from MemeFusion AI!' in a fun and energetic way."
    }]
  }]
};

fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(testPayload)
})
.then(response => {
  console.log('✅ Response Status:', response.status, response.statusText);
  return response.json();
})
.then(data => {
  if (data.error) {
    console.error('\n❌ API Error:', data.error.message);
    console.error('Details:', data.error);
    process.exit(1);
  }
  
  if (data.candidates && data.candidates[0]) {
    const text = data.candidates[0].content.parts[0].text;
    console.log('\n✅ API Test Successful!');
    console.log('\n📝 Response from Gemini:');
    console.log('─'.repeat(50));
    console.log(text);
    console.log('─'.repeat(50));
    console.log('\n🎉 Your API key is working correctly!');
    console.log('\n✨ Next steps:');
    console.log('1. Deploy this backend to Railway/Heroku/Google Cloud');
    console.log('2. Update index.html with your backend URL');
    console.log('3. Test the full MemeFusion AI app');
  } else {
    console.error('\n❌ Unexpected response format:', JSON.stringify(data, null, 2));
    process.exit(1);
  }
})
.catch(error => {
  console.error('\n❌ Request Failed:', error.message);
  console.error('\nPossible issues:');
  console.error('- API key is invalid or revoked');
  console.error('- Generative Language API is not enabled');
  console.error('- Network connection issues');
  console.error('- API key restrictions are too strict');
  process.exit(1);
});
