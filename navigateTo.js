function navigateTo(targetPage) {
    console.log(`Navigating to ${targetPage}`);
    const currentPage = document.querySelector('.page');
    const nextPage = document.querySelector(`#${targetPage.replace('.html', '')}`);
    console.log('Current Page:', currentPage);
    console.log('Next Page:', nextPage);

    if (currentPage && nextPage) {
        currentPage.style.display = 'none';
        nextPage.style.display = 'block';
    }
}
