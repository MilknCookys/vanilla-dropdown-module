import './styles.css';

export default function dropdownComponent(targetElement, container) {
  const dropdownTarget = document.querySelectorAll(targetElement);

  dropdownTarget.forEach((target) => {
    target.addEventListener('click', () => {
      const dropdownContainer = target.querySelector(container);
      dropdownContainer.classList.toggle('hidden');
    });
  });
}

dropdownComponent();
