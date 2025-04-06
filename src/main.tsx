import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const root = createRoot(document.getElementById('root'));

// Function to animate elements on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  const scrollPosition = window.scrollY + window.innerHeight;

  elements.forEach((element) => {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;

    if (scrollPosition > elementPosition) {
      element.classList.add('show');
    }
  });
};

// Event listener for scroll
window.addEventListener('scroll', animateOnScroll);

// Initial call to animate elements on page load
animateOnScroll();

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);