const nav = document.getElementsByTagName('a');
const primary = 'rgb(13,110,253)';
const tertiary = 'rgb(248,249,250)';
const menu = document.getElementById('menu');
const dropdown = document.querySelector('#navbar ul');

// navigation menu
const manage = document.getElementById('manage');
const list = document.getElementById('list');
const pengumuman = document.getElementById('pengumuman');
const help = document.getElementById('help');
manage.classList.add('showing');

for (let i = 0; i < 4; i++) {
    nav[0].style.backgroundColor = tertiary;
    nav[0].style.color = primary;
    nav[i].addEventListener('mouseenter', function () {
        nav[i].classList.add('hover');
    });
    nav[i].addEventListener('mouseleave', function () {
        nav[i].classList.remove('hover');
    });
    nav[i].addEventListener('click', function (e) {
        e.target.style.backgroundColor = tertiary;
        e.target.style.color = primary;
        e.preventDefault();
        if (i == 0) {
            nav[1].removeAttribute('style');
            nav[2].removeAttribute('style');
            nav[3].removeAttribute('style');
            manage.classList.add('showing');
            list.classList.remove('showing');
            pengumuman.classList.remove('showing');
            help.classList.remove('showing');
        } else if (i == 1) {
            nav[0].removeAttribute('style');
            nav[2].removeAttribute('style');
            nav[3].removeAttribute('style');
            manage.classList.remove('showing');
            list.classList.add('showing');
            pengumuman.classList.remove('showing');
            help.classList.remove('showing');
        } else if (i == 2) {
            nav[1].removeAttribute('style');
            nav[0].removeAttribute('style');
            nav[3].removeAttribute('style');
            manage.classList.remove('showing');
            list.classList.remove('showing');
            pengumuman.classList.add('showing');
            help.classList.remove('showing');
        } else if (i == 3) {
            nav[1].removeAttribute('style');
            nav[2].removeAttribute('style');
            nav[0].removeAttribute('style');
            manage.classList.remove('showing');
            list.classList.remove('showing');
            pengumuman.classList.remove('showing');
            help.classList.add('showing');
        }
    });
}

menu.addEventListener('click', function () {
    dropdown.classList.toggle('show');
});