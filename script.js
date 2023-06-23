// Get the dropdown list element
const colorSelect = document.getElementById('colorSelect');

// Get the button element
const removeButton = document.getElementById('removeButton');

// Add event listener to the button
removeButton.addEventListener('click', function() {
  // Get the selected index of the dropdown list
  const selectedIndex = colorSelect.selectedIndex;

  // Remove the selected option from the dropdown list
  colorSelect.options[selectedIndex].remove();
});

