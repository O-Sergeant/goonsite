function navigateTo(targetPage) {
    const currentPage = document.querySelector('.page');
    const nextPage = document.querySelector(`#${targetPage.replace('.html', '')}`);

    if (currentPage && nextPage) {
        currentPage.style.transform = 'translateX(-100%)';
        nextPage.style.transform = 'translateX(0)';
    }
}
