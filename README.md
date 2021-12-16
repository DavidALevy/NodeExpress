﻿# NodeExpress
Instructions for use

This app needs to be run with insomnia using JSON.
To add data, use POST and route: http://localhost:5000/user/

Example of adding data:
{ 
    "username": "example11",
  "email": "example11@gmail.com",
  "password": "password10"
}

To delete, use: DELETE http://localhost:5000/user/
Example of delete:{"username": "Example30"}
You can also delete by email: {"email": "example10@gmail.com"}

To list entire table use: DELETE    http://localhost:5000/listuser/
No need to type anything into JSON

To find by name/email use: GET http://localhost:5000/user
eg {"username": "Example"}
eg {"email": "example10@gmail.com"}

To update, use this format:
{"filter":{"username": "example10"},"newdata":{
"email":"example30@gmail.com"}}
Use PUT http://localhost:5000/user

To login by name use:
 GET http://localhost:5000/login/
 and type in name and password eg.
 {"username":"example10","password":"password10"}

To login by email use:
GET  http://localhost:5000/loginEmail
and type in email and password eg
{"email": "example11@gmail.com","password":"password10"}



