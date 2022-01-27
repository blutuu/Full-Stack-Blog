export const handleOuterClicks = (ref, func) => {
  const hoc = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      func();
    }
  }

  document.addEventListener('mousedown', hoc);

    return () => {
      document.removeEventListener('mousedown', hoc);
    }
}

export const handleSelectedItem = (selector, func) => {
  const elements = document.querySelectorAll(selector);

  for (const element of elements) {
    element.addEventListener('click', () => {
      func();
    });
  }
  

  return () => {
    document.removeEventListener('click');
  }
}
