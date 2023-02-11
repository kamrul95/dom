const button = document.querySelector('button');
const popupWrapper = document.querySelector('.popup-wrapper');
const popupClose = document.querySelector('.popup-close');

button.addEventListener('click', (e)=> {
    popupWrapper.style.display = 'block';
})

popupClose.addEventListener('click', (e)=> {
    popupWrapper.style.display = 'none';
})

popupWrapper.addEventListener('click', (e)=> {
    if(e.target.className == 'popup-wrapper') {
        popupWrapper.style.display = 'none';
    }
})

