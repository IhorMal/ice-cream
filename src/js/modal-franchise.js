(() => {
  const refs = {
    franchiseBtn: document.querySelector('[data-franchise-button]'),
    franchiseItm1: document.querySelector('[data-franchise-item1]'),
    franchiseItm2: document.querySelector('[data-franchise-item2]'),
  };

  refs.franchiseBtn.addEventListener('click', () => {
    refs.franchiseItm1.classList.toggle('franchise-is-visible');
    refs.franchiseItm2.classList.toggle('franchise-is-visible');
  });
})();
