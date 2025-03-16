# 🔐 User Authentication Form

A **login and registration system** built with Firebase Authentication and Firestore. This project includes **client-side validation**, user registration, and login functionality.

## 🌐 Live Demo
🔗 [View the Website](https://priyaadevi.github.io/User-Authentication-Form-/)

---

## 📂 Project Structure
```
/Auth-Project
│── index.html       # Login Form UI
│── styles.css       # CSS for styling the form
│── auth.js          # JavaScript for Firebase Authentication
│── README.md        # Documentation
```

---

## 🚀 Features
✅ **User Registration (Email & Password)**
✅ **Client-side Validation (Email Format & Password Length)**
✅ **Firebase Firestore Integration** (Stores User Data)
✅ **Login Authentication**
✅ **Redirect to Home Page on Success**

---

## 🛠️ Setup & Installation
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/priyaadevi/Auth-Project.git
cd Auth-Project
```

### 2️⃣ Deploy on GitHub Pages
1. Go to **Settings → Pages** in your repository.
2. Under **Branch**, select `main` and click **Save**.
3. Your site will be live at:
   ```
   https://priyaadevi.github.io/Responsive-WebSite/
   ```

---

## 🔥 Firebase Setup
### 1️⃣ Configure Firebase Authentication
1. **Go to Firebase Console** → [Click Here](https://console.firebase.google.com/)
2. Click **"Build" → "Authentication"**
3. Click **"Get Started"**
4. Enable **Email/Password Authentication**

### 2️⃣ Configure Firestore Database
1. Click **"Build" → "Firestore Database"**
2. Click **"Create Database"** → Choose **Start in test mode**
3. Set Firestore Rules:
   ```json
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{userId} {
         allow read, write: if true;
       }
     }
   }
   ```
4. Click **Publish**.

---

## 🖥️ How to Use
1️⃣ **Open the website** and enter your email & password.
2️⃣ Click **"Register"** → The user will be saved in Firebase Firestore.
3️⃣ Click **"Login"** → Redirects to the homepage after successful authentication.
4️⃣ If credentials are incorrect, an error message appears.

---


## 📝 License
This project is open-source and available under the **MIT License**.

---

### 📩 Need Help?
If you have any issues, feel free to open an **issue** in this repository.
