
export const scrollToElement = (id) => {
  const element = document.getElementById(id);
  if (element) {
    // Close mobile menu if open
    const bodySection = document.body;
    bodySection.classList.remove("nav-expanded");
    
    // Scroll with offset for header
    const offset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

export const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const id = anchor.getAttribute('href').slice(1);
      scrollToElement(id);
    });
  });
};
