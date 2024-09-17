export function detectBrowserAndShowArrow(arrow) {
  const isFirefox = typeof InstallTrigger !== 'undefined';
  const isChrome =
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

  arrow.classList.remove('hidden');

  if (isChrome) {
    arrow.classList.add('arrow-chrome');
  } else if (isFirefox) {
    arrow.classList.add('arrow-firefox');
  }

  setTimeout(() => {
    arrow.classList.add('hidden');
  }, 7000);
}
