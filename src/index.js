const body = document.querySelector('body');
const tog = document.querySelector('.theme-switch__toggle');
import './styles.css';
import templateMenu from './template/menu.hbs';
const menuArr = require('./menu.json');
// вызывается шаблон в виде функции, а в функйциб передается объект и берутся значения в menu.hbs
const menu = templateMenu({
  title: 'hello home',
  menuArr: menuArr,
});
// console.log(menu);
document.querySelector('.menu.js-menu').innerHTML = menu;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = Theme;

const toggleClassTheme = (p1, p2) => {
  body.classList.add(p1);
  body.classList.remove(p2);
};

if (localStorage.getItem('theme') === null) {
  localStorage.setItem('theme', false);
} else {
  const stateTheme = JSON.parse(localStorage.getItem('theme'));
  tog.checked = stateTheme;
  if (stateTheme) {
    toggleClassTheme(DARK, LIGHT);
  } else {
    toggleClassTheme(LIGHT, DARK);
  }
}
tog.onchange = function (ev) {
  if (ev.target.checked) {
    toggleClassTheme(DARK, LIGHT);
    localStorage.setItem('theme', true);
  } else {
    toggleClassTheme(LIGHT, DARK);
    localStorage.setItem('theme', false);
  }

  //   (ev.target.checked)
};
// setInterval(() => {
//   console.log(tog.value);
// }, 1000);
// console.log(tog.value);
// if (localStorage.getItem('theme') === null) {
//   localStorage.setItem('theme', false);
// } else {
//   const stateTheme = JSON.parse(localStorage.getItem('theme'));
//   tog.checked = stateTheme;
//   if (stateTheme) {
//     document.querySelector('body').classList.add(DARK);
//     document.querySelector('body').classList.remove(LIGHT);
//   } else {
//     document.querySelector('body').classList.add(LIGHT);
//     document.querySelector('body').classList.remove(DARK);
//   }
// }
// tog.onchange = function (ev) {
//   if (ev.target.checked) {
//     document.querySelector('body').classList.add(DARK);
//     document.querySelector('body').classList.remove(LIGHT);
//     localStorage.setItem('theme', true);
//   } else {
//     document.querySelector('body').classList.add(LIGHT);
//     document.querySelector('body').classList.remove(DARK);
//     localStorage.setItem('theme', false);
//   }
