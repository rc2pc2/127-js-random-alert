const buttonElement = document.querySelector('button');

buttonElement.addEventListener('click', function(){
    const randomNumber = Math.round(Math.random() * 10);
    alert(randomNumber);
});