// ============================================================
// useScrollTo — smooth scroll helper hook
// ============================================================

export function useScrollTo() {
  const scrollTo = (selector) => {
    const element = document.querySelector(selector)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return scrollTo
}
