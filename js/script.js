const nav = document.querySelector('nav');
const btn = document.querySelector('.btn');
const arrowBtn = document.querySelector('.btn div');

const mainNav = document.querySelectorAll('.navbar li');
const mainSection = document.querySelectorAll('.sections');

const iconList = document.querySelectorAll('.icon-list li');
const descriptionList = document.querySelectorAll('.description-list li');
const videoList = document.querySelectorAll('.video-description li');
const videos = document.querySelectorAll('video');

function showMenu() {
  function activeShowMenu() {
    nav.classList.toggle('active-menu');
    arrowBtn.classList.toggle('rotate');
  }

  btn.addEventListener('click', activeShowMenu);
}

showMenu();

function navigateSection() {
  mainNav[0].classList.add('active');
  mainSection[0].classList.add('active');

  function activeSection(i) {
    mainNav.forEach((item) => {
      item.classList.remove('active');
      nav.classList.remove('active-menu');
    });

    mainSection.forEach((item) => {
      item.classList.remove('active');
    });

    mainNav[i].classList.add('active');
    mainSection[i].classList.add('active');
  }

  mainNav.forEach((li, i) => {
    li.addEventListener('click', () => {
      activeSection(i);
    });
  });
}

navigateSection();

function abilitiesTab() {
  iconList[0].classList.add('active');

  descriptionList[0].classList.add('active');
  videoList[0].classList.add('active');

  videos[0].setAttribute('autoplay', true);
  videos[0].setAttribute('loop', true);

  function activeAbilitiesTab(i) {
    iconList.forEach((item) => {
      item.classList.remove('active');
    });

    descriptionList.forEach((item) => {
      item.classList.remove('active');
    });

    videoList.forEach((item) => {
      item.classList.remove('active');
    });

    videos.forEach((video) => {
      video.setAttribute('autoplay', false);
      video.setAttribute('loop', false);
    });

    iconList[i].classList.add('active');
    descriptionList[i].classList.add('active');

    videoList[i].classList.add('active');

    videos[i].setAttribute('autoplay', true);
    videos[i].setAttribute('loop', true);
  }

  iconList.forEach((item, i) => {
    item.addEventListener('click', () => {
      activeAbilitiesTab(i);
    });
  });
}

abilitiesTab();

const thumbSkin = document.querySelectorAll('.thumb-skins li');
const listSkins = document.querySelectorAll('.list-skins li');

function skinsTab() {
  thumbSkin[0].classList.add('active');
  listSkins[0].classList.add('active');

  function activeSkinsTab(i) {
    thumbSkin.forEach((item) => {
      item.classList.remove('active');
    });

    listSkins.forEach((item) => {
      item.classList.remove('active');
    });

    thumbSkin[i].classList.add('active');
    listSkins[i].classList.add('active');
  }

  thumbSkin.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      activeSkinsTab(i);
    });
  });
}

skinsTab();
