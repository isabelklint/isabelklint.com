// Function to toggle expand/collapse for individual data types
function toggleExpand(typeId) {
    const typeDetails = document.getElementById(typeId);
    const arrow = typeDetails.querySelector('.expand');
    const subDetails = typeDetails.querySelector('.sub-details');
  
    if (subDetails.style.display === 'none') {
      subDetails.style.display = 'block';
      arrow.textContent = '▲'; // Change arrow to up
    } else {
      subDetails.style.display = 'none';
      arrow.textContent = '▼'; // Change arrow to down
    }
  }
  
  // Function to toggle expand/collapse for all data types
  function toggleExpandAll() {
    const allDetails = document.querySelectorAll('.details');
    const allArrows = document.querySelectorAll('.expand');
    const expandAllArrow = document.querySelector('.expand-all');
  
    allDetails.forEach((details) => {
      if (details.style.display === 'none') {
        details.style.display = 'block';
      } else {
        details.style.display = 'none';
      }
    });
  
    // Update expand all arrow text based on visibility
    const isVisible = allDetails[0].style.display !== 'none';
    expandAllArrow.textContent = isVisible ? '▼' : '▲';
  
    // Update individual arrows based on visibility
    allArrows.forEach((arrow) => {
      arrow.textContent = isVisible ? '▲' : '▼';
    });
  }
  