function toggleExpand(typeId) {
  // Existing toggleExpand function remains unchanged
}

function toggleExpandAll() {
  // Existing toggleExpandAll function remains unchanged
}

function toggleAllDataTypeGroups(groupId) {
  const group = document.getElementById(groupId);
  const details = group.querySelectorAll('.details');
  const arrows = group.querySelectorAll('.expand');
  const expandAllArrow = group.querySelector('.expand-all');

  details.forEach((detail) => {
    const subDetails = detail.querySelectorAll('.sub-details');
    subDetails.forEach((sub) => {
      sub.style.display = sub.style.display === 'none' ? 'block' : 'none';
    });
    detail.style.display = detail.style.display === 'none' ? 'block' : 'none';
  });

  const isVisible = details[0].style.display !== 'none';
  expandAllArrow.textContent = isVisible ? '▼' : '▲';
  arrows.forEach((arrow) => {
    arrow.textContent = isVisible ? '▲' : '▼';
  });

  function toggleBoldCheckMark(element) {
    element.classList.toggle('bold');
  }
}
