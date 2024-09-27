const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");
const app = express();
const port = 80;

// Placeholder for the data
const users = [
  {
    firstName: "first1",
    lastName: "last1",
    email: "abc@gmail.com"
  },
  {
    firstName: "first2",
    lastName: "last2",
    email: "abc@gmail.com"
  },
  {
    firstName: "first3",
    lastName: "last3",
    email: "abc@gmail.com"
  }
];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

// Router để lấy danh sách người dùng
app.get('/api/users', (req, res) => {
  console.log('api/users called!');
  res.json(users);
});

// Router để thêm người dùng mới
app.post('/api/user', (req, res) => {
  const user = req.body;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json({ message: "User added", user });
});

// Router cho trang chính
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

// Khởi động server
app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});
