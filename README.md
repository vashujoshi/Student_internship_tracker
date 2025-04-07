# 🎓 Student Internship Tracker

A full-stack web application designed to help colleges efficiently track internship and placement data for students. Built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js), it supports dynamic data entry, dashboard visualization, and public stats view.
![image](https://github.com/user-attachments/assets/b5d51fa9-aab6-45d9-9b9a-bbbd2c7f53f2)
![image](https://github.com/user-attachments/assets/adc4a088-f9b3-436b-b478-2a13d8969667)
![image](https://github.com/user-attachments/assets/4017784b-58df-4325-bd54-78e89e089415)



---

## 🚀 Features

- ✅ **CCPD Login Panel**: Secure login for the placement cell (CCPD) to manage data.
- 📝 **Data Entry Form**: Submit student internship and placement records.
- 📊 **Dashboard**: Live animated stats for internships, placements, and more.
- 📂 **Table View**: View and filter all records in one place.
- 🔍 **Public Stats View**: Anyone can view statistics without login.

---

## 🧑‍💻 Tech Stack

| Frontend      | Backend         | Database  | Others              |
| ------------- | --------------- | --------- | ------------------- |
| React.js      | Express.js      | MongoDB   | React Router, Axios |

---

## 📷 Screenshots

> _(Add screenshots here by uploading to GitHub or using image URLs)_

- **Dashboard Page**
- **Data Entry Form**
- **Table View**
- **Login Page**

---

## 🏗️ Project Structure

```
📦 student-internship-tracker
├── client/             # React frontend
│   ├── components/
│   ├── pages/
│   └── ...
├── server/             # Node.js + Express backend
│   ├── models/
│   ├── routes/
│   └── ...
└── README.md
```

---

## 🛠️ Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/vashujoshi/student-internship-tracker.git
   cd student-internship-tracker
   ```

2. **Install frontend & backend dependencies**
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. **Setup MongoDB**
   - Add your MongoDB URI in `server/.env` as:
     ```
     MONGO_URI=your_mongo_connection_string
     ```

4. **Run the app**
   ```bash
   cd client
   npm run dev      # starts backend on localhost:5000
   cd server
   nodemon server.js        # starts frontend on localhost:3000
   ```

---

## 🧪 Future Improvements

- Admin panel with authentication
- Export data to Excel/PDF
- Email notifications for submissions
- Analytics filters by department/year

---

## 🙌 Contributing

Contributions are welcome! Open a pull request or raise an issue to suggest improvements.

---

## 📬 Contact

**Vaibhav Joshi**  
**utkarsh tyagi**
