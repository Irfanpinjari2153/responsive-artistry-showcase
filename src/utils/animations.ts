
/**
 * TRIAIDDEV Animation Utilities
 * 
 * These utilities help create smooth animations and transitions
 * throughout the website for a premium user experience.
 */

export const fadeInUp = (delay: number = 0): React.CSSProperties => ({
  opacity: 0,
  transform: 'translateY(20px)',
  animation: 'fade-in 0.5s ease-out forwards',
  animationDelay: `${delay}ms`,
});

export const staggerChildren = (selector: string, baseDelay: number = 100): void => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el, index) => {
    (el as HTMLElement).style.animationDelay = `${index * baseDelay}ms`;
  });
};

export const parallaxEffect = (element: HTMLElement, speed: number = 0.1): void => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const yPos = scrollY * speed;
    element.style.transform = `translateY(${yPos}px)`;
  };

  window.addEventListener('scroll', handleScroll);
  
  // Return a cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};

export const animateCounter = (
  element: HTMLElement, 
  target: number, 
  duration: number = 2000
): void => {
  let startTime: number | null = null;
  const startValue = 0;
  
  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const currentValue = Math.floor(progress * (target - startValue) + startValue);
    
    element.textContent = currentValue.toString();
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      element.textContent = target.toString();
    }
  };
  
  window.requestAnimationFrame(step);
};
