let links = document.querySelectorAll('.more-info-link');

links.forEach(link => {
  link.addEventListener('click', () => {
    let member = link.getAttribute('data-member');
    document.getElementById(`modal-${member}`).style.display = 'block';
  });
});

let closeLinks = document.querySelectorAll('.close');

closeLinks.forEach(closeLinks => {
  closeLinks.addEventListener('click', () => {
    closeLinks.parentElement.parentElement.style.display = 'none';
  });
});

window.onclick = function(event) {
  let modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
}
