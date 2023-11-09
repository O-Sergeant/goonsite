function navigateTo(targetPage) {
    const currentPage = document.querySelector('.page');
    const nextPage = document.querySelector(`#${targetPage.replace('.html', '')}`);

    if (currentPage && nextPage) {
        // Add class to current page for sliding out
        currentPage.classList.add('slide-out');

        // Add class to next page for sliding in
        nextPage.classList.add('slide-in');

        // Remove classes after the transition duration
        setTimeout(() => {
            currentPage.classList.remove('slide-out');
            nextPage.classList.remove('slide-in');
        }, 500); // Adjust the timeout to match your transition duration
    }
}
