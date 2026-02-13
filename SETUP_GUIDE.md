# VeriPTA - Complete Setup Guide

## 📋 Quick Start

### Step 1: Create New Project Folder
```bash
# Create a new folder for your project
mkdir veripta
cd veripta
```

### Step 2: Setup Project Structure

Create the following folder structure:
```
veripta/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx
│   ├── Auth.jsx
│   ├── Auth.css
│   ├── index.js
│   └── index.css
├── package.json
├── .gitignore
└── README.md
```

### Step 3: Add All Files

1. **Copy `package.json`** to root folder
2. **Copy `index.html`** to `public/` folder
3. **Copy to `src/` folder:**
   - `App.jsx`
   - `Auth.jsx`
   - `Auth.css`
   - `index.js`
   - `index.css`
4. **Copy `.gitignore`** to root folder
5. **Copy `README.md`** to root folder

### Step 4: Install Dependencies

Open terminal in VSCode and run:
```bash
npm install
```

This will install:
- React
- React-DOM
- React-Scripts
- Web-vitals

### Step 5: Run the Project

```bash
npm start
```

The app will automatically open in your browser at `http://localhost:3000`

## 🎯 What You'll See

- **Login/Sign Up Interface** with tab switching
- **Dynamic System Information** on the left panel:
  - System features list (4 items)
  - User roles cards (3 roles)
  - Recent activity feed (3 activities)
- **Interactive Form** that responds to user input
- **Smooth animations** and modern design

## 📁 File Descriptions

### `package.json`
- Project configuration
- Dependencies list
- Scripts for running the app

### `public/index.html`
- Main HTML template
- Contains the root div where React renders

### `src/index.js`
- Entry point of the React app
- Renders App component

### `src/App.jsx`
- Root React component
- Imports and displays Auth component

### `src/Auth.jsx`
- Main authentication component
- Contains all dynamic data (features, roles, activities)
- Handles login/signup switching
- Form state management

### `src/Auth.css`
- All styling for the auth page
- Animations and responsive design
- Custom color scheme

### `src/index.css`
- Global CSS reset
- Base styles

## ✅ Lab Requirements Checklist

- [x] ReactJS framework ✓
- [x] Project name matches system (VeriPTA) ✓
- [x] Git repository ready ✓
- [x] Runs successfully in browser ✓
- [x] Functional screen (Login/Signup) ✓
- [x] Semantic HTML elements ✓
- [x] CSS styling ✓
- [x] Dynamic data with variables ✓
- [x] Dynamic data with objects ✓
- [x] Dynamic data with arrays ✓
- [x] Template expressions ✓
- [x] Array rendering with .map() ✓

## 🔧 Troubleshooting

### Port Already in Use
If port 3000 is busy:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill
```

### Dependencies Not Installing
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Module Not Found Errors
Make sure all files are in correct folders:
- `index.html` must be in `public/`
- All `.jsx`, `.js`, `.css` files must be in `src/`

## 🚀 Next Steps

1. **Initialize Git Repository:**
```bash
git init
git add .
git commit -m "Initial commit - Lab 2 authentication page"
git branch -M main
git remote add origin https://github.com/Plorins/VeriPTA_AD-ET.git
git push -u origin main
```

2. **Test the Features:**
   - Switch between Login and Sign Up tabs
   - Fill in the form fields
   - Click Login/Sign Up button (check console for logs)

3. **Customize (Optional):**
   - Modify colors in `Auth.css` (search for CSS variables)
   - Add more features to the arrays
   - Update system information

## 📝 Notes

- The form currently logs to console (ready for backend integration later)
- All data is hardcoded in the component (will connect to API later)
- Fully responsive design works on all screen sizes
- Uses modern React hooks (useState)

## 🎓 Submission Checklist

For your lab submission, make sure you have:
- [ ] Running project (npm start works)
- [ ] Screenshot of the interface
- [ ] Git repository with commits
- [ ] README explaining the project
- [ ] All dynamic data rendering correctly

---

**Need Help?** Check the console (F12) for any error messages!
