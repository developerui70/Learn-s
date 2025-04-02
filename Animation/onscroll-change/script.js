document.addEventListener('DOMContentLoaded', () => {
    const willChangeSection = document.querySelector('.will-change-section');
    const additionalSectionsContainer = document.querySelector('.additional-sections');
  
    // Add 10 additional sections
    for (let i = 1; i <= 10; i++) {
      const section = document.createElement('div');
      section.className = 'additional-section';
      section.textContent = `Section ${i}`;
      additionalSectionsContainer.appendChild(section);
    }
  
    window.addEventListener('scroll', () => {
      const sectionPosition = willChangeSection.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      if (sectionPosition < viewportHeight) {
        willChangeSection.classList.add('scrolled');
      } else {
        willChangeSection.classList.remove('scrolled');
      }
    });
  });
  