export function setupFilterBehavior(): void {
  document.querySelector('.portfolio_all')?.addEventListener('click', () => {
    document.querySelector('#filter-all')?.classList.add('is-active');
  });
  document.querySelectorAll('.portfolio_filter-check-label').forEach((element) => {
    element.addEventListener('click', () => {
      document.querySelector('#filter-all')?.classList.remove('is-active');
    });
  });
}
