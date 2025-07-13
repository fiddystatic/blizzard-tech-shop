// JavaScript can be added here for future interactivity,
// such as handling "Add to Cart" functionality,
// dynamic product loading, or interactive elements.

document.addEventListener('DOMContentLoaded', () => {

    const header = document.querySelector('header');
    const SCROLL_THRESHOLD = 10; // Pixels to scroll before triggering
    const SMALL_SCREEN_BREAKPOINT = 768; // Needs to match CSS @media
    
    function handleScroll() {
        const isSmallScreen = window.innerWidth <= SMALL_SCREEN_BREAKPOINT;
        
        if (window.scrollY > SCROLL_THRESHOLD) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }

    // Initial check in case the page is loaded scrolled down
    handleScroll();

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Also re-check on resize in case the user changes window size across the breakpoint
    window.addEventListener('resize', handleScroll);

    // --- Login Simulation ---
    // This is a simple simulation. In a real application, you would
    // check a user's login status from a server.
    const loggedIn = false; // Change to true to see the profile icon
    const loginBtn = document.querySelector('.login-btn');
    const userProfile = document.querySelector('.user-profile');

    if (loggedIn) {
        loginBtn.style.display = 'none';
        userProfile.style.display = 'block';
    } else {
        loginBtn.style.display = 'block';
        userProfile.style.display = 'none';
    }

    // --- Add to Cart button functionality ---
    const buttons = document.querySelectorAll('.add-to-cart-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Placeholder for future cart logic
            console.log('Added to cart!');
            // Optional: Provide visual feedback
            button.textContent = 'Added!';
            button.classList.add('added');
            setTimeout(() => {
                button.textContent = 'Add to Cart';
                button.classList.remove('added');
            }, 1500);
        });
    });

    // --- Page Navigation ---
    const pageLinks = document.querySelectorAll('.nav-page-link');
    const pageSections = document.querySelectorAll('.page-section');
    const navLinksDesktop = document.querySelectorAll('.bottom-bar .nav-page-link');

    function showPage(sectionId) {
        pageSections.forEach(section => {
            section.style.display = section.id === sectionId ? 'block' : 'none';
        });
        window.scrollTo(0, 0);

        // Update active link style
        navLinksDesktop.forEach(link => {
            if (link.dataset.section === sectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }

    pageLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.dataset.section;
            showPage(sectionId);
        });
    });
    
    // Set initial active link
    showPage('shop');
});