
const colorSelect = document.getElementById('colorSelect');
const removeButton = document.getElementById('removeButton');
removeButton.addEventListener('click', function() {
  const selectedIndex = colorSelect.Index;
  colorSelect.remove(Index);
});
