// Function to toggle visibility of the data type groups
function toggleExpandTitle() {
  const numericTypes = document.getElementsByClassName('data-type-group');

  // Loop through each numeric type group and toggle its display style
  for (let i = 0; i < numericTypes.length; i++) {
    const group = numericTypes[i];
    group.style.display = group.style.display === 'block' ? 'none' : 'block';
    
    // Save state to localStorage
    localStorage.setItem(group.id + '_state', group.style.display);
  }
}

// Function to toggle visibility of individual data types within a group
function toggleExpand(groupId) {
  const group = document.getElementById(groupId);
  const details = group.querySelector('.details');

  // Toggle the display style of the details within the group
  details.style.display = details.style.display === 'block' ? 'none' : 'block';
  
  // Save state to localStorage
  localStorage.setItem(groupId + '_details_state', details.style.display);
}

// Function to toggle bold style for checkmark
function toggleBoldCheckMark(element) {
  element.classList.toggle('bold');
  
  // Save state to localStorage
  localStorage.setItem(element.parentNode.id + '_check_state', element.classList.contains('bold'));
}

// Function to toggle visibility of h3 details within an h2 group
function toggleExpandH3(groupId) {
  const group = document.getElementById(groupId);
  const h3Details = group.querySelectorAll('.sub-details');

  // Toggle the display style of each h3 detail within the group
  h3Details.forEach(detail => {
    detail.style.display = detail.style.display === 'block' ? 'none' : 'block';
  });
}
