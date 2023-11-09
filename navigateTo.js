function navigateTo(targetPage) {
    console.log(`Navigating to ${targetPage}`);
    const currentPage = document.querySelector('.page');
    const nextPage = document.querySelector(`#${targetPage.replace('.html', '')}`);

    if (currentPage && nextPage) {
        console.log('Containers found, applying transition...');
        currentPage.classList.add('slide-out');
        nextPage.classList.add('slide-in');

        setTimeout(() => {
            currentPage.classList.remove('slide-out');
            nextPage.classList.remove('slide-in');
        }, 500); // Adjust the timeout to match your transition duration
    }
}
