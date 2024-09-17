import { detectBrowserAndShowArrow } from './detectArrow.js';

export function downloadListeners() {
  document.querySelectorAll('.download-btn').forEach(button => {
    const downloadHandler = event => {
      const link = event.target.getAttribute('data-link');
      const a = document.createElement('a');
      a.href = link;
      a.download = '';
      a.click();

      detectBrowserAndShowArrow(document.getElementById('arrow'));

      button.removeEventListener('click', downloadHandler);
    };

    button.addEventListener('click', downloadHandler);
  });
}
