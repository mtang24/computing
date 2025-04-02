document.body.insertAdjacentHTML(
    'afterbegin',
    `
      <label class="color-scheme">
      <i class="fas fa-lightbulb"></i> <!-- Icon for the color scheme -->
          <select>
              <!-- TODO add <option> elements here -->
        <option value="light dark">Automatic</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
          </select>
      </label>`
  );
  
  const select = document.querySelector('select');
  
  if (localStorage.colorScheme) {
    document.documentElement.style.setProperty('color-scheme', localStorage.colorScheme);
    select.value = localStorage.colorScheme; // Sync the dropdown value
  }
  
  select.addEventListener('input', function (event) {
    console.log('color scheme changed to', event.target.value);
    document.documentElement.style.setProperty('color-scheme', event.target.value);
    localStorage.colorScheme = event.target.value;
  });