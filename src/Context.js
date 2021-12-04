import React from "react";

const Context = React.createContext({
  tasks: [],
  currentUser: "",
  addTask: () => {},
  deleteTask: () => {},
  getUserTasks: () => {},
  login: () => {},
});

export default Context;
