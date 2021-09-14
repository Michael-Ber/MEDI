'use strict';

// INTRO TABS

const tabLinks = document.querySelectorAll('.intro__tablink'),
      tabContent = document.querySelectorAll('.intro__tab-content > div');
tabLinks.forEach((link, num, arr) => {
    link.addEventListener('click', () => {
        removeActive(arr, 'intro__tablink_active');
        removeActive(tabContent, 'intro__tab-content_active');
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
    elem.classList.add('intro__tablink_active');
}

const chooseContent = (num, tabContentElems) => {
    tabContentElems[num].classList.add('intro__tab-content_active');
}

// INTRO TABS END