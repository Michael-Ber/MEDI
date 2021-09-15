'use strict';

window.addEventListener('DOMContentLoaded', () => {
    // INTRO TABS

    function tabs(linkSelector, contentSelector, linkActiveClass, contentActiveClass) {
        const tabLinks = document.querySelectorAll(linkSelector),
        tabContent = document.querySelectorAll(contentSelector);

        tabLinks.forEach((link, num, arr) => {
            link.addEventListener('click', () => {
                removeActive(arr, linkActiveClass);
                removeActive(tabContent, contentActiveClass);
                addActive(link);
                chooseContent(num, tabContent);
            })
        })

        const removeActive = (elems, activeClass) => {
            elems.forEach(item => {
                item.classList.remove(activeClass);
            })
        }

        const addActive = (elem) => {
            elem.classList.add(linkActiveClass);
        }

        const chooseContent = (num, tabContentElems) => {
            tabContentElems[num].classList.add(contentActiveClass);
        }
    }
    tabs('.intro__tablink','.intro__tab-content > div', 'intro__tablink_active', 'intro__tab-content_active');

    // INTRO TABS END

    // INTRO CAROUSEL

    const swiper = new Swiper('.intro__swiper', {
        loop: true,
        speed: 400,
        spaceBetween: 100,
        navigation: {
            nextEl: '.intro__swiper-button_next',
            prevEl: '.intro__swiper-button_prev'
        }
    })


    // INTRO CAROUSEL END

    // NEWS TABS

    tabs('.news__tab-item', '.news__tab-content', 'news__tab-item_active', 'news__tab-content_active');

    // NEWS TABS END
})
