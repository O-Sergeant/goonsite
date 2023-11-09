function navigateTo(targetPage) {
    const currentPage = document.querySelector('.page');
    const nextPage = document.querySelector(`#${targetPage.replace('.html', '')}`);

    if (currentPage && nextPage) {
        currentPage.style.display = 'none';
        nextPage.style.display = 'block';
    }
}
