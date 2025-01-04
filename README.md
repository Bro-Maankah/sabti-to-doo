# To-Do List Application with Pomodoro Clock

This is a simple to-do list application called sabti-to-doo, built with HTML, CSS, and JavaScript. It allows users to add, edit, delete, and mark tasks as completed. The tasks are stored in the browser's local storage, so they persist even after the page is refreshed. Additionally, it includes a Pomodoro Clock to help users manage their time effectively.

## Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Mark tasks as completed
- Persist tasks using local storage
- Pomodoro Clock for time management

## Getting Started

To get started with this project, simply clone the repository and open the `index.html` file in your browser.

```bash
git clone https://github.com/Bro-Maankah/sabti-to-doo.git
cd sabti-to-doo
open index.html
```


##Code Overview
###HTML
The HTML file contains the structure of the to-do list application, including the form for adding new tasks, the list where tasks are displayed, and the Pomodoro Clock.

###CSS
The CSS file contains styles for the to-do list application and the Pomodoro Clock, making them visually appealing and user-friendly.

###JavaScript
The JavaScript file contains the logic for the to-do list application and the Pomodoro Clock. Below is a brief overview of the main functions:

- `loadTasks()`: Loads tasks from local storage and adds them to the DOM.
- `addTask(e)`: Handles the form submission to add a new task.
- `addTaskToDOM(task)`: Adds a task to the DOM.
- `attachEventListeners(li, task)`: Attaches event listeners to the task's delete, edit, and checkbox elements.
- `handleDelete(id, li)`: Deletes a task from the DOM and local storage.
- `handleEdit(id, li)`: Edits a task in the DOM and updates local storage.
- `updateTask(id, newTaskText)`: Updates a task's text in local storage.
- `toggleTaskCompletion(id, li, isCompleted)`: Toggles a task's completion status in the DOM and local storage.
- `saveTaskToLocalStorage(task)`: Saves a new task to local storage.
- `getTasksFromLocalSrorage()`: Retrieves tasks from local storage.
- `startPomodoro()`: Starts the Pomodoro timer.
- `pausePomodoro()`: Pauses the Pomodoro timer.
- `resetPomodoro()`: Resets the Pomodoro timer.
## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. We welcome all contributions!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
