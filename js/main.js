const mobileNav = document.getElementById('menu_mobile')
        nav = document.querySelector('nav')
        mobileExit = document.getElementById('close_mobile')

        mobileNav.addEventListener('click', () => {
            nav.classList.add('menu');
        })
        mobileExit.addEventListener('click', () => {
            nav.classList.remove('menu');
        })