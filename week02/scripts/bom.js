const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
  if (input.value.trim() !== "") {
    // Create a li element
    const li = document.createElement('li');
    // Populate the li with the input value
    li.textContent = input.value;

    // Create a delete button
    const deleteButton = document.createElement('button');
    // Populate the button with a ❌
    deleteButton.textContent = '❌';

    // Append the delete button to the li
    li.append(deleteButton);
    // Append the li to the unordered list
    list.append(li);

    // Clear and focus the input
    input.value = "";
    input.focus();

    // Add delete functionality
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
    });
  }
});

// Allow Enter key to add item
input.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    button.click();
  }
});

