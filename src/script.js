document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.brandsSwiper', {
        slidesPerView: 'auto', // Автоматическое количество слайдов

        spaceBetween: 10,      // Отступ между слайдами


        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: false,
        }


    },
    );
});


document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.servicesSwiper', {
        slidesPerView: 'auto', // Автоматическое количество слайдов

        spaceBetween: 10,      // Отступ между слайдами


        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: false,
        }


    },
    );
});



document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.pricesSwiper', {
        slidesPerView: 'auto', // Автоматическое количество слайдов

        spaceBetween: 50,      // Отступ между слайдами


        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: false,
        }


    },
    );
});


function mainReadmore() {
    const showAllButton = document.getElementById('main__readmore');
    const hideAllButton = document.getElementById('main__readmore-off');
    const container = document.querySelector('.main__text--secondary');





    showAllButton.addEventListener('click', () => {
        hideAllButton.classList.remove('hidden')
        showAllButton.classList.add('hidden')
        container.classList.add('no__hidden')
        container.classList.add('main__text--secondary-show')


    });

    hideAllButton.addEventListener('click', () => {
        hideAllButton.classList.add('hidden')
        showAllButton.classList.remove('hidden')
        container.classList.remove('no__hidden')
        container.classList.remove('main__text--secondary-show')
    });
}


document.addEventListener('DOMContentLoaded', mainReadmore);

function setupBrandsToggle() {
    const showAllButton = document.getElementById('showAllButton');
    const hideAllButton = document.getElementById('hideAllButton');
    const bottomContainer = document.querySelector('.brands__container--bottom');

    // Добавляем CSS классы для управления видимостью
    bottomContainer.classList.add('hidden');
    hideAllButton.classList.add('hidden');

    showAllButton.addEventListener('click', () => {
        bottomContainer.classList.remove('hidden');
        showAllButton.classList.add('hidden');
        hideAllButton.classList.remove('hidden');
    });

    hideAllButton.addEventListener('click', () => {
        bottomContainer.classList.add('hidden');
        showAllButton.classList.remove('hidden');
        hideAllButton.classList.add('hidden');
    });
}



document.addEventListener('DOMContentLoaded', setupBrandsToggle);



function setupBrandsToggleMax() {
    const showAllButton = document.getElementById('showAllButtonMax');
    const hideAllButton = document.getElementById('hideAllButtonMax');
    const bottomContainer = document.querySelector('.brands__container--bottom--max');

    // Добавляем CSS классы для управления видимостью
    bottomContainer.classList.add('hidden');
    hideAllButton.classList.add('hidden');

    showAllButton.addEventListener('click', () => {
        bottomContainer.classList.remove('hidden');
        showAllButton.classList.add('hidden');
        hideAllButton.classList.remove('hidden');
    });

    hideAllButton.addEventListener('click', () => {
        bottomContainer.classList.add('hidden');
        showAllButton.classList.remove('hidden');
        hideAllButton.classList.add('hidden');
    });
}



document.addEventListener('DOMContentLoaded', setupBrandsToggleMax);


function servicesShow() {
    const showServisBTN = document.getElementById('showServisBTN-midl')
    const hideServisBTN = document.getElementById('hideServisBTN-midl')
    const servicesHidden = document.getElementById('services--midl-hidden')


    showServisBTN.addEventListener('click', () => {
        servicesHidden.classList.remove('hidden');
        hideServisBTN.classList.remove('hidden');
        showServisBTN.classList.add('hidden')
    });

    hideServisBTN.addEventListener('click', () => {
        servicesHidden.classList.add('hidden');
        hideServisBTN.classList.add('hidden');
        showServisBTN.classList.remove('hidden')
    });
}

document.addEventListener('DOMContentLoaded', servicesShow);


function servicesShowMax() {
    const showServisBTN = document.getElementById('showServisBTN-max')
    const hideServisBTN = document.getElementById('hideServisBTN-max')
    // const servicesHidden = document.getElementById('services--midl-hidden')


    showServisBTN.addEventListener('click', () => {
        // servicesHidden.classList.remove('hidden');
        hideServisBTN.classList.remove('hidden');
        showServisBTN.classList.add('hidden')
    });

    hideServisBTN.addEventListener('click', () => {
        // servicesHidden.classList.add('hidden');
        hideServisBTN.classList.add('hidden');
        showServisBTN.classList.remove('hidden')
    });
}

document.addEventListener('DOMContentLoaded', servicesShowMax);




function burgerShow() {
    const showBurgerBTN = document.getElementById('burgerOn')
    const burger = document.getElementById('aside__burger-menu')
    const burgerOff = document.getElementById('burgerOff')
    const conteiner__q = document.getElementById('conteiner__q')
    const body = document.body;


    showBurgerBTN.addEventListener('click', () => {

        burger.classList.add('aside__burger-menu-on');
        conteiner__q.classList.remove('hidden')
        conteiner__q.classList.add('conteiner__q')
        body.classList.add('no-scroll');

    });
    burgerOff.addEventListener('click', () => {

        burger.classList.remove('aside__burger-menu-on');
        conteiner__q.classList.remove('conteiner__q')
        body.classList.remove('no-scroll');


    });

    conteiner__q.addEventListener('click', () => {

        burger.classList.remove('aside__burger-menu-on');
        conteiner__q.classList.remove('conteiner__q')
        body.classList.remove('no-scroll');


    });

}

document.addEventListener('DOMContentLoaded', burgerShow);



function formShow() {
    const formBTN = document.getElementById('formBTN')
    const form = document.getElementById('form')
    const closeBTN = document.getElementById('closeBTN')
    const conteiner__w = document.getElementById('conteiner__w')
    const body = document.body;


    formBTN.addEventListener('click', () => {

        form.classList.add('form--on');
        conteiner__w.classList.remove('hidden')
        conteiner__w.classList.add('conteiner__w')
        body.classList.add('no-scroll');

    });
    closeBTN.addEventListener('click', () => {

        form.classList.remove('form--on');

        conteiner__w.classList.remove('conteiner__w')
        body.classList.remove('no-scroll');
    });

    conteiner__w.addEventListener('click', () => {

        form.classList.remove('form--on');
        conteiner__w.classList.remove('conteiner__w')
        body.classList.remove('no-scroll');
    });
}

document.addEventListener('DOMContentLoaded', formShow);



function formShowMax() {
    const formBTNmax = document.getElementById('formBTNmax')
    const form = document.getElementById('form')
    const closeBTN = document.getElementById('closeBTN')
    const conteiner__w = document.getElementById('conteiner__w')
    const body = document.body;


    formBTNmax.addEventListener('click', () => {

        form.classList.add('form--on');
        conteiner__w.classList.remove('hidden')
        conteiner__w.classList.add('conteiner__w')
        body.classList.add('no-scroll');

    });
    closeBTN.addEventListener('click', () => {

        form.classList.remove('form--on');

        conteiner__w.classList.remove('conteiner__w')
        body.classList.remove('no-scroll');
    });

    conteiner__w.addEventListener('click', () => {

        form.classList.remove('form--on');
        conteiner__w.classList.remove('conteiner__w')
        body.classList.remove('no-scroll');
    });
}

document.addEventListener('DOMContentLoaded', formShowMax);



function callShow() {
    const statusBTN = document.getElementById('statusBTN')
    const call = document.getElementById('call')
    const closeBTNcall = document.getElementById('closeBTNcall')
    const conteiner__e = document.getElementById('conteiner__e')
    const body = document.body;


    statusBTN.addEventListener('click', () => {

        call.classList.add('call--on');
        conteiner__e.classList.remove('hidden')
        conteiner__e.classList.add('conteiner__e')
        body.classList.add('no-scroll');

    });
    closeBTNcall.addEventListener('click', () => {

        call.classList.remove('call--on');
        body.classList.remove('no-scroll');
        conteiner__e.classList.remove('conteiner__e')
    });

    conteiner__e.addEventListener('click', () => {

        call.classList.remove('call--on');
        conteiner__e.classList.remove('conteiner__e')
        body.classList.remove('no-scroll');
    });
}

document.addEventListener('DOMContentLoaded', callShow);




function callShowMax() {
    const callBTNmax = document.getElementById('callBTNmax')
    const call = document.getElementById('call')
    const closeBTNcall = document.getElementById('closeBTNcall')
    const conteiner__e = document.getElementById('conteiner__e')
    const body = document.body;


    callBTNmax.addEventListener('click', () => {

        call.classList.add('call--on');
        conteiner__e.classList.remove('hidden')
        conteiner__e.classList.add('conteiner__e')
        body.classList.add('no-scroll');

    });
    closeBTNcall.addEventListener('click', () => {

        call.classList.remove('call--on');
        body.classList.remove('no-scroll');
        conteiner__e.classList.remove('conteiner__e')
    });

    conteiner__e.addEventListener('click', () => {

        call.classList.remove('call--on');
        conteiner__e.classList.remove('conteiner__e')
        body.classList.remove('no-scroll');

    });
}

document.addEventListener('DOMContentLoaded', callShowMax);