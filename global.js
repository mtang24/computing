function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

let pages = [
  { url: '', title: 'Demos Home' },
  { url: 'snap_tutorial/', title: 'Sequencing in Snap' },
  { url: 'snap_repeats_tutorial/', title: 'Repeats in Snap' },
  { url: 'scratch_repeats_tutorial/', title: 'Repeats in Scratch' },

  // add the rest of your pages here

];

let nav = document.createElement('nav');
document.body.prepend(nav);

for (let p of pages) {
  let url = p.url;
  let title = p.title;

  const ARE_WE_HOME = document.documentElement.classList.contains('home');
  if (!ARE_WE_HOME && !url.startsWith('http')) {
    url = '../' + url;
  }

  // Create link and add it to nav
  let a = document.createElement('a');
  a.href = url;
  a.textContent = title;
  nav.append(a);

  if (a.host === location.host && a.pathname === location.pathname) {
    a.classList.add('current');
  }

  if (a.host != location.host) {
    a.target = "_blank";
  }
}

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