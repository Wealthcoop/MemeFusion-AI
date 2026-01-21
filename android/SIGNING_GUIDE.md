# App Signing Configuration Guide

## Generate Release Keystore

Run this command to create your release keystore:

```bash
keytool -genkey -v -keystore memefusion-release.keystore \
  -alias memefusion -keyalg RSA -keysize 2048 -validity 10000
```

**IMPORTANT:** 
- Store the keystore file securely (NOT in git repository)
- Remember your passwords - you cannot recover them
- Back up the keystore in multiple secure locations

## Configure Signing in build.gradle

Add this to `android/app/build.gradle` BEFORE the `android {` block:

```gradle
def keystorePropertiesFile = rootProject.file("keystore.properties")
def keystoreProperties = new Properties()
if (keystorePropertiesFile.exists()) {
    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
}
```

Then add this INSIDE the `android {` block, BEFORE `buildTypes`:

```gradle
    signingConfigs {
        release {
            if (keystorePropertiesFile.exists()) {
                keyAlias keystoreProperties['keyAlias']
                keyPassword keystoreProperties['keyPassword']
                storeFile file(keystoreProperties['storeFile'])
                storePassword keystoreProperties['storePassword']
            }
        }
    }
```

Update the `release` buildType:

```gradle
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled true
            shrinkResources true
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
```

## Create keystore.properties

Create `android/keystore.properties` with this content:

```properties
storeFile=../memefusion-release.keystore
storePassword=YOUR_KEYSTORE_PASSWORD
keyAlias=memefusion
keyPassword=YOUR_KEY_PASSWORD
```

**Add to .gitignore:**
```
keystore.properties
*.keystore
*.jks
```

## Build Signed Release

```bash
cd android
./gradlew assembleRelease  # For APK
./gradlew bundleRelease    # For AAB (Google Play)
```

Output location:
- APK: `android/app/build/outputs/apk/release/app-release.apk`
- AAB: `android/app/build/outputs/bundle/release/app-release.aab`
