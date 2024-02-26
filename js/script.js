const body = document.querySelector('body');

document.addEventListener('DOMContentLoaded', () =>
{
    if(window.location.href !== 'http://127.0.0.1:5500/pages/login.html')
    {
        body.style.backgroundImage = 'none';
        return;
    }
});