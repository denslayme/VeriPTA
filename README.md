# VeriPTA - PTA Payment Verification System
## Lab 2: Frontend Project Setup

### 🎯 Project Overview
VeriPTA is a PTA Payment Verification System for USTP - CDO Campus. This authentication interface serves as the entry point for parents, PTA officers, and administrators to access the payment verification system.

### ✅ Lab Requirements Completion

#### Task 1: Frontend Project Setup ✓
- **Framework**: ReactJS
- **Project Name**: VeriPTA (matches proposed system)
- **Git Repository**: https://github.com/Plorins/VeriPTA_AD-ET
- **Running**: Successfully runs in browser

#### Task 2: Functional Screen Implementation ✓
- **Screen Type**: Login/Signup Authentication Screen
- **Real Feature**: User authentication for the payment verification system
- **Semantic HTML**: Uses header, main, aside, footer elements
- **Styling**: Custom CSS with modern, professional design
- **System Alignment**: Directly supports user access control for payment verification

#### Task 3: Dynamic Data Rendering ✓

The Auth component renders dynamic data using React's template syntax:

**Variables:**
- `isLogin` - Current authentication mode state
- `formData` - User input state object

**Objects:**
- `systemInfo` - Contains system name, version, features
- Individual user role objects with permissions

**Arrays with Rendering:**
- `systemInfo.features` - Array of 4 system features rendered as list items
- `userRoles` - Array of 3 role objects with permissions, rendered as cards
- `recentActivities` - Array of 3 activity objects, rendered as activity feed

**Template Expressions Used:**
- `{systemInfo.name}` - Display system name
- `{systemInfo.features.map(...)}` - Loop through features
- `{userRoles.map(...)}` - Loop through roles
- `{recentActivities.map(...)}` - Loop through activities
- `{isLogin ? 'Login' : 'Sign Up'}` - Conditional rendering
- Dynamic styling with `style={{ animationDelay: ... }}`

### 📁 Project Structure
```
src/
 ├── components/
 ├── pages/
 ├── styles/
 ├── data/
 ├── Auth.jsx          # Main authentication component
 ├── Auth.css          # Styling for auth component
 └── App.jsx           # Root application component
```

### 🚀 Setup Instructions

1. **Clone the repository:**
```bash
git clone https://github.com/Plorins/VeriPTA_AD-ET.git
cd VeriPTA_AD-ET
```

2. **Install dependencies:**
```bash
npm install
```

3. **Add the files:**
- Place `Auth.jsx` in `src/`
- Place `Auth.css` in `src/`
- Replace `App.jsx` content with the provided version

4. **Run the development server:**
```bash
npm start
```

5. **View in browser:**
- Open http://localhost:3000
- The authentication screen will load automatically

### 🎨 Design Features

**Modern, Professional Aesthetic:**
- Custom gradient backgrounds with animated floating shapes
- Distinctive typography using Outfit and DM Sans fonts
- Navy blue and gold color scheme representing trust and excellence
- Smooth transitions and micro-interactions
- Responsive design for all screen sizes

**Dynamic Elements:**
- Tab switching between Login and Sign Up
- Animated form inputs
- Real-time activity feed
- Role-based permissions display
- System features showcase

### 📊 System Data Represented

The interface displays actual system concepts:
- **User Roles**: Parent, PTA Officer, Administrator with specific permissions
- **System Features**: Payment verification, transaction monitoring, receipt processing
- **Recent Activities**: Real-time updates of system actions
- **User Information**: Full name, username, email for account creation

### 🔐 User Roles & Permissions

1. **Parent**
   - View payments
   - Submit receipts

2. **PTA Officer**
   - Verify payments
   - Generate reports

3. **Administrator**
   - Manage users
   - System configuration

### 📝 Notes

- This is a functional frontend implementation ready for backend integration
- Form submission currently logs to console and shows alerts (ready for API connection)
- All data structures align with the VeriPTA system requirements
- Design follows modern web standards and accessibility practices

### 🎓 Academic Compliance

This project fulfills all requirements for Laboratory Activity No. 2:
- ✅ ReactJS framework implementation
- ✅ Matching project name
- ✅ Git repository initialized
- ✅ Successfully runs in browser
- ✅ Functional screen representing real system feature
- ✅ Semantic HTML structure
- ✅ CSS styling applied
- ✅ Dynamic data rendering with variables, objects, and arrays
- ✅ Template expressions for value display
- ✅ Array mapping for UI lists

---

**System Version**: 1.0.0  
**Institution**: USTP - CDO Campus  
**Course**: IT323 - Application Development and Emerging Technologies
