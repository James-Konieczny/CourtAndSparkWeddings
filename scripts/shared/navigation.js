function initNavigation() {
    if (!Utils.elementExists('top')) return;
    
    const navConfig = {
        logo: {
            src: "images/logo.jpeg",
            alt: "Court & Spark Weddings logo",
            link: "index.html",
            id: "logo"
        },
        links: [
            { text: "Home", href: "index.html", ariaLabel: "Home page" },
            { text: "Packages", href: "packagesandpricing.html" },
            { text: "Portfolio", href: "portfolio.html" },
            { text: "Contact", href: "contact.html" }
        ],
        instagram: {
            href: "https://www.instagram.com/courtandsparkweddings",
            text: "@courtandsparkweddings"
        },
        rabbit: {
            src: "images/rabbit.jpeg",
            alt: "Decorative Rabbit Logo",
            id: "nav-rabbit"
        }
    };

    // Create navbar wrapper
    const navWrapper = Utils.createElement('nav', {
        'aria-label': 'Main navigation',
        'className': 'navbar'
    });
    
    // Create logo
    const logoLink = Utils.createElement('a', {
        href: navConfig.logo.link,
        className: 'logo'
    }, [
        Utils.createElement('img', {
            src: navConfig.logo.src,
            alt: navConfig.logo.alt,
            id: navConfig.logo.id
        })
    ]);
    
    navWrapper.appendChild(logoLink);
    
    // Create toggle button for mobile
    const toggleBtn = Utils.createElement('button', {
        className: 'nav-toggle',
        'aria-label': 'Toggle navigation',
        'aria-expanded': 'false',
        'aria-controls': 'nav-links'
    }, '☰');
    
    navWrapper.appendChild(toggleBtn);
    
    // Create navigation list
    const navList = Utils.createElement('ul', {
        className: 'nav-links',
        id: 'nav-links'
    });
    
    // Add main links
    navConfig.links.forEach(link => {
        const listItem = Utils.createElement('li');
        const linkElement = Utils.createElement('a', {
            href: link.href,
            'aria-label': link.ariaLabel || null
        }, link.text);
        
        listItem.appendChild(linkElement);
        navList.appendChild(listItem);
    });
    
    // Add rabbit image (decorative)
    const rabbitItem = Utils.createElement('li', {
        'aria-hidden': 'true'
    }, [
        Utils.createElement('img', {
            src: navConfig.rabbit.src,
            alt: navConfig.rabbit.alt,
            id: navConfig.rabbit.id
        })
    ]);
    
    navList.appendChild(rabbitItem);
    
    // Add Instagram link
    const instaItem = Utils.createElement('li', {
        className: 'nav-instagram'
    }, [
        Utils.createElement('a', {
            href: navConfig.instagram.href,
            'aria-label': 'Visit our Instagram page (opens in new tab)',
            target: '_blank',
            rel: 'noopener noreferrer'
        }, navConfig.instagram.text)
    ]);
    
    navList.appendChild(instaItem);
    navWrapper.appendChild(navList);
    
    // Add to header
    document.getElementById('top').appendChild(navWrapper);
    
    // Toggle dropdown behavior
    toggleBtn.addEventListener('click', () => {
        const isExpanded = navList.classList.toggle('active');
        toggleBtn.setAttribute('aria-expanded', isExpanded.toString());
        
        // Focus management for accessibility
        if (isExpanded) {
            const firstLink = navList.querySelector('a');
            if (firstLink) firstLink.focus();
        }
    });
    
    // Close menu when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navList.classList.contains('active')) {
            navList.classList.remove('active');
            toggleBtn.setAttribute('aria-expanded', 'false');
            toggleBtn.focus();
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navList.classList.contains('active') && 
            !navWrapper.contains(e.target) && 
            e.target !== toggleBtn) {
            navList.classList.remove('active');
            toggleBtn.setAttribute('aria-expanded', 'false');
        }
    });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
} else {
    initNavigation();
}