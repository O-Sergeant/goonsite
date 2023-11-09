function navigateTo(targetPage) {
    const currentPage = document.querySelector('.page');
    const nextPage = document.querySelector(`#${targetPage.replace('.html', '')}`);

    if (currentPage && nextPage) {
        currentPage.classList.remove('active');
        nextPage.classList.add('active');
    }
}
