/**
 * Smoothly scrolls to a specific element on the page
 * @param elementId - The ID of the element to scroll to
 * @param offset - Optional offset from the top of the element (default: 0)
 * @param duration - Optional duration of the scroll animation in ms (default: 800)
 */
export const scrollToElement = (elementId: string, offset = 0, duration = 800): void => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
};

/**
 * Smoothly scrolls to a specific position on the page
 * @param position - The position to scroll to (in pixels)
 * @param duration - Optional duration of the scroll animation in ms (default: 800)
 */
export const scrollToPosition = (position: number, duration = 800): void => {
  window.scrollTo({
    top: position,
    behavior: 'smooth'
  });
};

/**
 * Smoothly scrolls to the top of the page
 * @param duration - Optional duration of the scroll animation in ms (default: 800)
 */
export const scrollToTop = (duration = 800): void => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

/**
 * Smoothly scrolls to the bottom of the page
 * @param duration - Optional duration of the scroll animation in ms (default: 800)
 */
export const scrollToBottom = (duration = 800): void => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
};
