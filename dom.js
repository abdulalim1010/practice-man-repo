<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple To-Do List</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      padding: 20px;
      max-width: 400px;
      margin: 0 auto;
    }
    #todo-list {
      list-style-type: none;
      padding: 0;
    }
    .task {
      display: flex;
      justify-content: space-between;
      background: #f1f1f1;
      padding: 10px;
      margin: 5px 0;
    }
    button {
      background-color: red;
      color: white;
      border: none;
      cursor: pointer;
    }
    button:hover {
      background-color: darkred;
    }
  </style>
</head>
<body>

  <h1>Simple To-Do List</h1>
  
  <input type="text" id="taskInput" placeholder="Enter a new task">
  <button id="addTaskBtn">Add Task</button>

  <ul id="todo-list"></ul>

  <script src="script.js"></script>
</body>
</html>
