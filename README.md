# To-Do Application

## Overview

This project is a to-do application built using JavaScript and React. The application is designed to manage tasks efficiently, allowing users to add and delete tasks with ease. The user interface is enhanced using Bootstrap to ensure a responsive and visually appealing design.

## Features

- **Component-Based Architecture**: The application is structured with multiple React components, making it modular and easy to maintain.
- **Bootstrap Integration**: Bootstrap is used to create a clean and responsive UI, ensuring the application looks good on all devices.
- **Task Management**: Users can add new tasks, view a list of tasks, and delete tasks as needed, making the application robust and functional.


## Components

### 1. `App`
The main component that serves as the entry point of the application. It holds the state and manages the list of tasks.

### 2. `TaskList`
This component displays the list of tasks. It receives the list of tasks as props and maps over them to render each task.

### 3. `Task`
A presentational component that renders individual tasks. It includes buttons for deleting the task.

### 4. `AddTask`
A form component that allows users to input and submit new tasks. It handles the logic for updating the state with new tasks.

## UI Design

The UI is designed with Bootstrap to ensure a sleek and responsive layout. Key Bootstrap components and classes are used to style buttons, forms, and task items, providing a consistent look and feel.

## Functionality

### Adding Tasks
Users can add new tasks using the `AddTask` component. When a task is submitted, it updates the state in the `App` component, which in turn updates the `TaskList` component to display the new task.

### Deleting Tasks
Each task rendered by the `Task` component includes a delete button. Clicking this button will trigger a function that removes the task from the state, and the `TaskList` component is updated accordingly to reflect the change.


## Conclusion 

This to-do application showcases the power of React for building component-based applications and the ease of using Bootstrap for creating a responsive UI. The ability to add and delete tasks makes it a functional and practical tool for daily task management.