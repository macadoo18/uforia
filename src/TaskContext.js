import React from "react";

const TaskContext = React.createContext({
  tasks: [
    {
      id: 1,
      name: "Drink one gallon of water",
      description:
        "Drink 1/2 gallon by lunch and finish the gallon by end of day.",
      start: "6:00",
      duration: "All day",
    },
    {
      id: 2,
      name: "Workout",
      description:
        "Follow workout regiment Monday - Saturday with Sunday being a rest/stretch day.",
      start: "7:00",
      duration: 1,
    },
    {
      id: 3,
      name: "Meditate",
      description:
        "Immediately following the workout, spend up to 20 minutes dedicated to silent meditation.",
      start: "8:00",
      duration: 20,
    },
    {
      id: 4,
      name: "Eat your veggies!!",
      description:
        "Make sure to get 3 full servings of vegetables in every day!",
      start: "6:00",
      duration: "All day",
    },
    {
      id: 5,
      name: "Go through mail/bills",
      description: "Go through all mail and bills when you get home from work.",
      start: "7:00",
      duration: 1,
    },
  ],
});

export default TaskContext;
