# 📱 Android Studio Build Guide - Step-by-Step with Screenshots

## Complete Visual Guide to Building Your AAB File

**Time Required:** 15-20 minutes (first time), 5 minutes (subsequent builds)

---

## 🎯 Overview

You will:
1. Install Android Studio (if needed)
2. Clone your repository
3. Open the project in Android Studio
4. Wait for Gradle sync
5. Generate the signed AAB file
6. Locate the output file

---

## Part 1: Install Android Studio (Skip if Already Installed)

### Step 1.1: Download Android Studio

1. **Go to:** https://developer.android.com/studio
2. **You'll see:** A large green button saying "Download Android Studio"
3. **Click it**
4. **What happens:** A terms of service popup appears
5. **Check the box:** "I have read and agree with the above terms and conditions"
6. **Click:** "Download Android Studio for [Your OS]"
7. **Wait:** Download is ~1GB, takes 2-10 minutes depending on your internet

### Step 1.2: Install Android Studio

**On Windows:**
1. **Double-click:** The downloaded `.exe` file
2. **Click:** "Next" through the installer
3. **Choose:** Standard installation (recommended)
4. **Click:** "Finish"
5. **Wait:** First launch takes 2-3 minutes

**On Mac:**
1. **Open:** The downloaded `.dmg` file
2. **Drag:** Android Studio icon to Applications folder
3. **Open:** Applications folder and double-click Android Studio
4. **Click:** "Open" if you see a security warning
5. **Wait:** First launch takes 2-3 minutes

**On Linux:**
1. **Extract:** The downloaded `.tar.gz` file
2. **Navigate:** To `android-studio/bin/` directory
3. **Run:** `./studio.sh`
4. **Wait:** First launch takes 2-3 minutes

### Step 1.3: Android Studio Setup Wizard

**What you'll see:** A welcome screen saying "Welcome to Android Studio"

1. **Click:** "Next"
2. **Select:** "Standard" installation type
3. **Click:** "Next"
4. **Choose:** Your preferred UI theme (Light or Dark - doesn't matter)
5. **Click:** "Next"
6. **Review:** Settings summary
7. **Click:** "Finish"
8. **Wait:** SDK components download (this takes 5-15 minutes)
   - You'll see a progress bar
   - Shows "Downloading Android SDK..."
   - Shows percentage completed
9. **When done:** You'll see "Welcome to Android Studio" screen with options

---

## Part 2: Clone Your Repository

### Step 2.1: Open Terminal/Command Prompt

**On Windows:**
- Press `Win + R`
- Type `cmd`
- Press Enter

**On Mac:**
- Press `Cmd + Space`
- Type `terminal`
- Press Enter

**On Linux:**
- Press `Ctrl + Alt + T`

### Step 2.2: Navigate to Where You Want the Project

```bash
cd Desktop
```
(Or any folder you prefer - this will create a `MemeFusion-AI` folder there)

### Step 2.3: Clone the Repository

**Type this command:**
```bash
git clone https://github.com/Wealthcoop/MemeFusion-AI.git
```

**What you'll see:**
```
Cloning into 'MemeFusion-AI'...
remote: Enumerating objects: 214, done.
remote: Counting objects: 100% (214/214), done.
remote: Compressing objects: 100% (150/150), done.
remote: Total 214 (delta 5), reused 208 (delta 2), pack-reused 0
Receiving objects: 100% (214/214), 30.12 MiB | 15.23 MiB/s, done.
Resolving deltas: 100% (5/5), done.
```

**Time:** 30 seconds to 2 minutes depending on internet speed

### Step 2.4: Verify the Clone

**Type:**
```bash
cd MemeFusion-AI
ls
```

**What you should see:** A list of files including `android`, `backend`, `index.html`, etc.

---

## Part 3: Open Project in Android Studio

### Step 3.1: Launch Android Studio

**If it's not already open:**
- **Windows:** Start Menu → Android Studio
- **Mac:** Applications → Android Studio
- **Linux:** Run `studio.sh` from installation directory

**What you'll see:** The "Welcome to Android Studio" screen with these options:
- New Project
- Open
- Get from VCS
- Recent projects (if any)

### Step 3.2: Open the Android Folder

1. **Click:** "Open" button
   - **Location:** Center of the welcome screen, big button
   - **What it looks like:** Folder icon with "Open" text

2. **What happens:** A file browser window opens

3. **Navigate to:** The location where you cloned the repository
   - Example: `Desktop/MemeFusion-AI/android`
   - **IMPORTANT:** You must open the `android` folder, NOT the root `MemeFusion-AI` folder

4. **Select:** The `android` folder
   - **How to know it's right:** You should see files like `build.gradle`, `settings.gradle` inside

5. **Click:** "OK" or "Open" button
   - **Location:** Bottom right of the file browser

### Step 3.3: Wait for Gradle Sync (IMPORTANT - DON'T SKIP)

**What happens immediately:**
- Android Studio opens the project
- You'll see the project structure on the left side
- **Bottom of screen:** A status bar appears saying "Gradle Sync"

**What you'll see in the bottom panel:**
```
Gradle sync started
> Configure project :app
> Configure project :capacitor-android
> Task :prepareKotlinBuildScriptModel
```

**Progress indicators:**
- Bottom right corner: Spinning icon with "Gradle Build Running"
- Bottom panel: Log messages scrolling
- Top right: Progress bar (sometimes)

**Time:** 2-5 minutes (first time), 30 seconds (subsequent times)

**What's happening:**
- Downloading Gradle wrapper
- Downloading Android build tools
- Downloading dependencies
- Configuring project

**How to know it's done:**
- Bottom panel shows: "BUILD SUCCESSFUL in Xs"
- Status bar says: "Gradle sync finished in Xs"
- Spinning icon disappears
- You can see the project files clearly in the left panel

**⚠️ WAIT FOR THIS TO COMPLETE BEFORE PROCEEDING!**

### Step 3.4: Verify Project is Ready

**Check these things:**

1. **Left panel (Project view):**
   - You should see folders: `app`, `capacitor-android`, `capacitor-cordova-android-plugins`
   - Expand `app` → you should see `src`, `build.gradle`

2. **Bottom panel:**
   - Should show "BUILD SUCCESSFUL"
   - No red error messages

3. **Top toolbar:**
   - Should show a green play button (▶️) and a hammer icon
   - These should NOT be grayed out

**If you see errors:**
- Red text in bottom panel
- "Sync failed" message
- Missing SDK error

**Solution:**
- Click "File" → "Sync Project with Gradle Files"
- Wait for sync to complete again
- If still errors, see Troubleshooting section at the end

---

## Part 4: Generate Signed Bundle

### Step 4.1: Open Build Menu

1. **Look at the top menu bar**
   - **Location:** Very top of the Android Studio window
   - **You'll see:** File, Edit, View, Navigate, Code, Analyze, Refactor, **Build**, Run, Tools, VCS, Window, Help

2. **Click:** "Build"
   - **What happens:** A dropdown menu appears

### Step 4.2: Select Generate Signed Bundle

**In the dropdown menu, you'll see these options:**
- Make Project
- Make Module 'MemeFusion-AI.app.main'
- Clean Project
- Rebuild Project
- Build Bundle(s) / APK(s) → (has an arrow indicating submenu)
- **Generate Signed Bundle / APK...** ← **CLICK THIS ONE**
- Analyze APK...
- Deploy Module to App Engine...

3. **Click:** "Generate Signed Bundle / APK..."
   - **Location:** About 5th option down in the Build menu
   - **What it looks like:** Has three dots (...) at the end

### Step 4.3: Choose Bundle Type

**What appears:** A dialog box titled "Generate Signed Bundle or APK"

**You'll see two options:**
- ⚪ Android App Bundle
- ⚪ APK

**What to do:**
1. **Click the radio button:** Next to "Android App Bundle"
   - The circle should fill in: ⚫ Android App Bundle
2. **Click:** "Next" button
   - **Location:** Bottom right of the dialog

**What happens:** Dialog changes to "Generate Signed Bundle"

---

### Step 4.4: Select Keystore

**What you'll see:** A form with several fields:

```
Key store path: [empty field] [Choose existing... button]
Key store password: [empty field]
Key alias: [empty field]
Key password: [empty field]
☐ Remember passwords
```

**What to do:**

1. **Click:** "Choose existing..." button
   - **Location:** Right side of "Key store path" field

2. **What happens:** File browser opens

3. **Navigate to:** `MemeFusion-AI/android/memefusion-release.keystore`
   - **Path:** Same location where you opened the project
   - **Go up one level** from the `android` folder you're in
   - **You should see:** `memefusion-release.keystore` file

4. **Select:** `memefusion-release.keystore`

5. **Click:** "OK" or "Open"

**Now the form looks like:**
```
Key store path: /path/to/MemeFusion-AI/android/memefusion-release.keystore
Key store password: [empty field]
Key alias: [empty field]
Key password: [empty field]
```

6. **Fill in the fields:**

**Key store password:**
- **Type:** `MemeFusion2026!`
- **What happens:** You'll see dots (••••••••••••••••)

**Key alias:**
- **Type:** `memefusion`
- **What happens:** Text appears normally

**Key password:**
- **Type:** `MemeFusion2026!`
- **What happens:** You'll see dots (••••••••••••••••)

7. **Optional:** Check "Remember passwords"
   - **Why:** So you don't have to type them again next time
   - **Safe?:** Yes, if this is your personal computer

**Now the form looks like:**
```
Key store path: /path/to/MemeFusion-AI/android/memefusion-release.keystore
Key store password: •••••••••••••••
Key alias: memefusion
Key password: •••••••••••••••
☑ Remember passwords
```

8. **Click:** "Next" button
   - **Location:** Bottom right of the dialog

---

### Step 4.5: Choose Destination and Build Type

**What you'll see:** Another dialog titled "Generate Signed Bundle"

**Fields shown:**
```
Destination Folder: [shows a path] [... button]
Build Variants:
  ☐ debug
  ☑ release
Signature Versions:
  ☑ V1 (Jar Signature)
  ☑ V2 (Full APK Signature)
  ☑ V3 (APK Signature Scheme v3)
```

**What to do:**

1. **Destination Folder:**
   - **Leave as is** (default is fine)
   - **Default location:** `MemeFusion-AI/android/app/release/`
   - **Or click [...]** if you want to change it

2. **Build Variants:**
   - **Make sure "release" is checked:** ☑ release
   - **"debug" should be unchecked:** ☐ debug
   - **If debug is checked:** Uncheck it (we only need release)

3. **Signature Versions:**
   - **Leave all checked** (default is correct)
   - ☑ V1, V2, V3 should all be checked

4. **Export encrypted key:**
   - **Leave unchecked** (not needed for Play Store)

**Click:** "Create" button
- **Location:** Bottom right of the dialog
- **What it says:** Might say "Create" or "Finish"

---

### Step 4.6: Wait for Build

**What happens immediately:**
- Dialog closes
- **Bottom panel** opens automatically
- **Tab name:** "Build"

**What you'll see in the build panel:**
```
Executing tasks: [:app:bundleRelease] in project /path/to/MemeFusion-AI/android

> Task :app:preBuild
> Task :app:preReleaseBuild
> Task :capacitor-android:preBuild
> Task :capacitor-android:preReleaseBuild
> Task :capacitor-android:compileReleaseAidl
> Task :app:compileReleaseAidl
...
(many more lines)
...
> Task :app:packageReleaseBundle
> Task :app:bundleRelease

BUILD SUCCESSFUL in 1m 23s
127 tasks executed
```

**Progress indicators:**
- **Bottom right:** Spinning icon with "Gradle Build Running"
- **Bottom panel:** Task names scrolling
- **Progress bar:** Sometimes shows percentage

**Time:** 1-3 minutes (first time), 30 seconds to 1 minute (subsequent builds)

**How to know it's done:**
- Bottom panel shows: **"BUILD SUCCESSFUL in Xm Xs"**
- Spinning icon disappears
- A notification popup appears in the bottom right

---

### Step 4.7: Success Notification

**What appears:** A small popup notification in the bottom right corner

**It says:**
```
Generate Signed Bundle
APK(s) generated successfully for 1 module:
Module 'MemeFusion-AI.app.main': locate or analyze the APK.
```

**You'll see two links:**
- **locate** ← Click this to find your file
- **analyze**

**Click:** "locate"

**What happens:** File explorer/Finder opens showing the output folder

---

## Part 5: Locate Your AAB File

### Step 5.1: Find the File

**The file explorer opens to:**
```
/path/to/MemeFusion-AI/android/app/build/outputs/bundle/release/
```

**You'll see:**
- **File name:** `app-release.aab`
- **File size:** ~15-25 MB
- **File type:** AAB (Android App Bundle)

### Step 5.2: Verify the File

**Right-click the file** (or Get Info on Mac) and check:
- **Size:** Should be 15-25 MB (if much smaller, something went wrong)
- **Date modified:** Should be just now (the time you built it)
- **Type:** AAB or Android App Bundle

### Step 5.3: Copy to Safe Location

**Recommended:**
1. **Create a folder** on your Desktop called "MemeFusion-Release"
2. **Copy** `app-release.aab` to this folder
3. **Rename it** (optional): `memefusion-v1.0.aab`

**Why:** So you can easily find it when uploading to Play Console

---

## Part 6: What to Do Next

### ✅ You Now Have Your AAB File!

**File location:** `app-release.aab` (or wherever you copied it)

**Next steps:**
1. **Backup your keystore** (very important!)
2. **Go to Google Play Console**
3. **Follow PLAY_CONSOLE_CHECKLIST.md** to submit your app

---

## 🔧 Troubleshooting

### Problem: "SDK location not found"

**What you see:**
```
SDK location not found. Define a valid SDK location...
```

**Solution:**
1. **Click:** File → Project Structure
2. **Click:** SDK Location (left sidebar)
3. **Check:** "Android SDK location" field
4. **If empty:** Click "..." and browse to:
   - **Windows:** `C:\Users\YourName\AppData\Local\Android\Sdk`
   - **Mac:** `/Users/YourName/Library/Android/sdk`
   - **Linux:** `/home/yourname/Android/Sdk`
5. **Click:** "OK"
6. **Click:** File → Sync Project with Gradle Files

---

### Problem: "Gradle sync failed"

**What you see:**
- Red text in build panel
- "Sync failed" message

**Solution 1: Check Internet Connection**
- Gradle needs to download dependencies
- Make sure you're connected to the internet

**Solution 2: Invalidate Caches**
1. **Click:** File → Invalidate Caches
2. **Check:** "Clear file system cache and Local History"
3. **Click:** "Invalidate and Restart"
4. **Wait:** Android Studio restarts and re-syncs

**Solution 3: Update Gradle**
1. **Click:** File → Project Structure
2. **Click:** Project (left sidebar)
3. **Check:** Gradle version
4. **If outdated:** Click "Upgrade" button

---

### Problem: "Keystore not found"

**What you see:**
```
Keystore file '/path/to/keystore' not found
```

**Solution:**
1. **Verify the file exists:**
   - Open file explorer
   - Navigate to `MemeFusion-AI/android/`
   - Look for `memefusion-release.keystore`
2. **If missing:** The keystore file wasn't committed to git
   - You'll need to generate a new one
   - See "Generate New Keystore" section below

---

### Problem: "Wrong password"

**What you see:**
```
Keystore was tampered with, or password was incorrect
```

**Solution:**
- **Double-check password:** `MemeFusion2026!`
- **Make sure:** You're using the exclamation mark at the end
- **Try copying:** Copy the password from this document to avoid typos

---

### Problem: Build takes forever

**What you see:**
- Build running for more than 10 minutes
- Stuck on a particular task

**Solution:**
1. **Cancel the build:**
   - **Click:** Red stop button in bottom panel
2. **Clean the project:**
   - **Click:** Build → Clean Project
   - **Wait:** 30 seconds
3. **Rebuild:**
   - **Click:** Build → Rebuild Project
   - **Wait:** 2-3 minutes
4. **Try again:**
   - **Click:** Build → Generate Signed Bundle / APK

---

### Problem: "Module not specified"

**What you see:**
```
Please select a module to build
```

**Solution:**
1. **Close the dialog**
2. **In the left panel:** Right-click on `app` folder
3. **Select:** "Make Module 'app'"
4. **Wait:** For build to complete
5. **Try again:** Build → Generate Signed Bundle / APK

---

## 📝 Quick Reference

**Keystore Details:**
```
File: memefusion-release.keystore
Location: MemeFusion-AI/android/
Store Password: MemeFusion2026!
Key Alias: memefusion
Key Password: MemeFusion2026!
```

**Output File:**
```
Name: app-release.aab
Location: android/app/build/outputs/bundle/release/
Size: ~15-25 MB
```

**Menu Path:**
```
Build → Generate Signed Bundle / APK... → Android App Bundle → Next → [Fill keystore info] → Next → Create
```

---

## 🎉 Success Checklist

After building, verify:
- [ ] File `app-release.aab` exists
- [ ] File size is 15-25 MB
- [ ] Build panel shows "BUILD SUCCESSFUL"
- [ ] No error messages in build log
- [ ] File was created just now (check timestamp)
- [ ] You can open/copy the file

**If all checked:** You're ready to submit to Google Play! 🚀

---

**Need more help?** Let me know which step you're stuck on and I'll provide even more detailed guidance!
