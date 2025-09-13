function initFooter() {
    if (!Utils.elementExists('site-footer')) return;
    
    const footer = document.getElementById('site-footer');
    
    const copyright = Utils.createElement('p', {}, [
        document.createTextNode('\u00A9 2025 Court & Spark Weddings')
    ]);
    
    const instaText = document.createTextNode('Visit Our Instagram Page ');
    const instaLink = Utils.createElement('a', {
        href: 'https://www.instagram.com/courtandsparkweddings',
        'aria-label': 'Visit our Instagram page',
        target: '_blank',
        rel: 'noopener noreferrer'
    }, '@courtandsparkweddings');
    
    const insta = Utils.createElement('p', {}, [instaText, instaLink]);
    
    const backToTop = Utils.createElement('a', {
        href: '#top',
        'aria-label': 'Back to top',
        className: 'back-to-top'
    }, '◤');
    
    footer.appendChild(copyright);
    footer.appendChild(insta);
    footer.appendChild(backToTop);
    
    // Smooth scroll for back to top
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        document.getElementById('top').focus();
    });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooter);
} else {
    initFooter();
}