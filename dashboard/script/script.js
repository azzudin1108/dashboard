const sidebar = document.getElementById('sidebar');
const iconSb = document.querySelectorAll('.icon-sb');

sidebar.addEventListener('click', function (e) {
    if (e.target.classList.item('icon-sb')) {
        e.preventDefault();
        if (e.target.classList.contains('bi')) {
            for (let i = 0; i < iconSb.length; i++) {
                iconSb[i].style.color = 'white';
            }
            if (e.target.classList.contains('bi-house')) {
                e.target.parentElement.style.color = 'rgb(37, 7, 94)';
                e.target.parentElement.parentElement.firstElementChild.style.height = '50px';
                e.target.parentElement.parentElement.lastElementChild.style.top = '107.5px';
                e.target.parentElement.parentElement.lastElementChild.previousElementSibling.style.top = '50px';
                e.target.parentElement.parentElement.lastElementChild.previousElementSibling.previousElementSibling.style.top = '50px';
            } else if (e.target.classList.contains('bi-person-gear')) {
                e.target.parentElement.style.color = 'rgb(37, 7, 94)';
                e.target.parentElement.parentElement.firstElementChild.style.height = '107.5px';
                e.target.parentElement.parentElement.lastElementChild.style.top = '165px';
                e.target.parentElement.parentElement.lastElementChild.previousElementSibling.style.top = '107.5px';
                e.target.parentElement.parentElement.lastElementChild.previousElementSibling.previousElementSibling.style.top = '107.5px';
            } else if (e.target.classList.contains('bi-bell')) {
                e.target.parentElement.style.color = 'rgb(37, 7, 94)';
                e.target.parentElement.parentElement.firstElementChild.style.height = '165px';
                e.target.parentElement.parentElement.lastElementChild.style.top = '222.5px';
                e.target.parentElement.parentElement.lastElementChild.previousElementSibling.style.top = '165px';
                e.target.parentElement.parentElement.lastElementChild.previousElementSibling.previousElementSibling.style.top = '165px';
            } else if (e.target.classList.contains('bi-chat')) {
                e.target.parentElement.style.color = 'rgb(37, 7, 94)';
                e.target.parentElement.parentElement.firstElementChild.style.height = '222.5px';
                e.target.parentElement.parentElement.lastElementChild.style.top = '280px';
                e.target.parentElement.parentElement.lastElementChild.previousElementSibling.style.top = '222.5px';
                e.target.parentElement.parentElement.lastElementChild.previousElementSibling.previousElementSibling.style.top = '222.5px';
            } else if (e.target.classList.contains('bi-gear')) {
                e.target.parentElement.style.color = 'rgb(37, 7, 94)';
                e.target.parentElement.parentElement.firstElementChild.style.height = '280px';
                e.target.parentElement.parentElement.lastElementChild.style.top = '337.5px';
                e.target.parentElement.parentElement.lastElementChild.previousElementSibling.style.top = '280px';
                e.target.parentElement.parentElement.lastElementChild.previousElementSibling.previousElementSibling.style.top = '280px';
            }
        }
    }
});