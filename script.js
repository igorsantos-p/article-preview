const btnShare = document.getElementById('btn-share');
const shareBox = document.getElementById('share');

btnShare.onclick = () => {
  shareBox.classList.toggle('visible');
  btnShare.classList.toggle('clicked')
};
