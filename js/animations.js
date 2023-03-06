
const INCREASE_NUMBER_ANIMATION_SPEED = 50;
function increaseNumberAnimationStep(i, elementCount, endNumber) {
  if (i <= endNumber) {
    if (i === endNumber) {
      elementCount.innerText = i + "+";
    } else {
      elementCount.innerText = i;

    }
    i = i + 100;

    setTimeout(
      increaseNumberAnimationStep,
      INCREASE_NUMBER_ANIMATION_SPEED,i, elementCount, endNumber
      
    );
  }
}
//Анимация числа 5000+
function initIncreaseNumberAnimation() {
  const begin = 0;
  const end = 5000;
  const elementC = document.querySelector(".features__clients-count");
  increaseNumberAnimationStep(begin, elementC, end);
}

 //Анимация для Бюджет
document.querySelector('#budget').addEventListener('change', function handleSelectChange(event) {
  if (event.target.value === 'other') { 

  const formContainer = document.createElement('div');
  formContainer.classList.add('form__group');
  formContainer.classList.add('form__other-input');
  const input = document.createElement('input');
  input.placeholder = "Введите ваш вариант";
  input.type = "text";
  formContainer.appendChild(input);
  document.querySelector('.form form').insertBefore(formContainer, document.querySelector('.form__submit')); 
  }
 
 
  const otherInput = document.querySelector('.form__other-input');
  if (event.target.value !== 'other' && otherInput) {

    document.querySelector('.form form').removeChild(otherInput);
   
    // Удаляем ранее добавленное текстовое поле, если оно есть в DOM
  }
});
//Меняем анимацию шапки 
let animationInited = false;
function updateScroll() {
  if(window.scroll>0){
    document.querySelector("header").classList.add("header__scrolled")
  }else{
    document.querySelector("header").classList.remove("header__scrolled")
  }
  //Запуск анимации числа
  let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
//Свойство offsetTop возвращает расстояние от верхней части страницы до элемента
let windowBottomPosition = window.scrollY + window.innerHeight;
if (windowBottomPosition >= countElementPosition && !animationInited) {
  animationInited = true;
  initIncreaseNumberAnimation();
}
}
window.addEventListener('scroll', updateScroll);

function addSmoothScroll(link) {
  link.addEventListener('click', onLinkClick);
}

function onLinkClick(event) {
  event.preventDefault();
  document.querySelector(event.target.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
  });
}
document.querySelectorAll('a[href^="#"]').forEach(link => {
  addSmoothScroll(link);
});