const label = document.getElementsByTagName('label');
const input = document.getElementsByTagName('input');
const notif = document.getElementById('notif');
const form = document.getElementById('form');
const submit = document.getElementById('submit');

for (let i = 0; i < label.length; i++) {
    label[i].style.top = '25px';
    if (input[i].value != '') {
        label[i].style.top = '0';
    }
    input[i].addEventListener('focusin', function () {
        label[i].style.top = '0';
    });
    input[i].addEventListener('focusout', function () {
        label[i].style.top = '25px';
        if (input[i].value != '') {
            if (input[0].value == 'admin' && input[1].value == 'admin') {
                submit.setAttribute('href', 'dashboard/index.html');
            }
            label[i].style.top = '0';
        } else if (input[i].value == '' || input[0].value == 'admin' && input[1].value == '1234') {
            if (i == 0) {
                label[i].innerHTML = 'Username';
            } else if (i == 1) {
                submit.removeAttribute('href');
            }
            submit.setAttribute('href');
        }
    });
}

form.addEventListener('click', function (e) {
    if (e.target.getAttribute('type') == 'submit') {
        for (let i = 0; i < input.length; i++) {
            if (input[0].value == 'admin' && input[1].value == 'admin') {
                notif.style.display = 'none';
            } else {
                e.preventDefault();
                notif.style.display = 'block';
            }
        }
    }
});