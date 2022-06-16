(() => {
  const refs = {
    openMobileMenu: document.querySelector('[mobile-menu--open]'),
    closeMobilemenu: document.querySelector('[mobile-menu--close]'),
    mobileMenu: document.querySelector('[mobile-menu]'),
  };

  refs.openMobileMenu.addEventListener('click', toggleModal);
  refs.closeMobilemenu.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.mobileMenu.classList.toggle('mobile-menu--is-hidden');
  }
})();