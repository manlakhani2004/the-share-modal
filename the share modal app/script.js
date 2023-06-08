const modal = document.querySelector('.modalwrapper');
const overlay = document.querySelector('.overlay');

const openmodal = () =>
{
  console.log('modal is open');
  modal.classList.add('modalactivate');
  overlay.classList.add('overlayactivate');
}

const closemodal = () =>
{
    modal.classList.remove('modalactivate');
    overlay.classList.remove('overlayactivate');
}