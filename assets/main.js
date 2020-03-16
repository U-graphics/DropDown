var ddBtn = document.getElementById('dropdown-btn');
var ddBody = document.getElementById('dropdown-body');
var ddWrapper = document.getElementById('dropdown-wrapper');


var check = true;

ddBtn.addEventListener('click', () => {
    if (check == true) {
        ddWrapper.classList.add('w-80');
        setTimeout(() => {
            ddBody.classList.add('drop');
        }, 350);
        check = false;
    } else if (check == false) {
        ddBody.classList.remove('drop');
        setTimeout(() => {
            ddWrapper.classList.remove('w-80');
        }, 350);
        check = true;
    }
})