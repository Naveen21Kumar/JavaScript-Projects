const closedFace = document.querySelector('.closed');
const openedFace = document.querySelector('.open');

// Add event listener
closedFace.addEventListener('click', () => {
  if (openedFace.classList.contains('open')) {
    openedFace.classList.add('active');
    closedFace.classList.remove('active');
  }
});

openedFace.addEventListener('click', () => {
  if (closedFace.classList.contains('closed')) {
    closedFace.classList.add('active');
    openedFace.classList.remove('active');
  }
});
