function navigateTo(targetPage) {
    const currentPage = document.querySelector('.page');
    const nextPage = document.querySelector(`#${targetPage.replace('.html', '')}`);

    if (currentPage && nextPage) {
        // Apply slide-out class to current page
        currentPage.classList.add('slide-out');
        
        // Apply slide-in class to next page
        nextPage.classList.add('slide-in');

        // Remove classes after the transition duration
        setTimeout(() => {
            currentPage.classList.remove('slide-out');
            nextPage.classList.remove('slide-in');
        }, 500); // Adjust the timeout to match your transition duration
    }
}
