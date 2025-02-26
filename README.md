# to-do-list
Key Features:

Load Saved Tasks: On page load, tasks are retrieved from localStorage and displayed.
Add New Tasks: Users can enter a task in the input field and click "Add Task" to save it.
Delete Tasks: Clicking the "Delete" button removes the task from the list and localStorage.
Persistent Storage: Tasks remain saved in localStorage, even after the page is refreshed.

Functions Used:

renderTask(task): Displays tasks in the UI.
savetasks(): Saves tasks to localStorage.
addEventListener('DOMContentLoaded', callback): Ensures the script runs after the page loads.
