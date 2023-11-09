function navigateTo(targetPage) {
    console.log(`Navigating to ${targetPage}`);
    const currentPage = document.querySelector('.page.active');
    const nextPage = document.querySelector(`#${targetPage.replace('.html', '')}`);

    if (currentPage && nextPage) {
        currentPage.classList.remove('active');
        nextPage.classList.add('active');
    }
}
