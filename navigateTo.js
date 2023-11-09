function navigateTo(targetPage) {
    const currentPage = document.querySelector('.page');
    const nextPage = document.querySelector(`#${targetPage.replace('.html', '')}`);

    if (currentPage && nextPage) {
        // Slide out the current page to the left
        currentPage.style.transform = 'translateX(-100%)';

        // Slide in the next page from the right
        nextPage.style.transform = 'translateX(0)';
    }
}