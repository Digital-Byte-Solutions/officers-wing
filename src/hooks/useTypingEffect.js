// ============================================================
// useTypingEffect — animated typewriter hook
// ============================================================

import { useState, useEffect } from 'react'

const TYPING_SPEED_MS    = 80
const DELETING_SPEED_MS  = 45
const PAUSE_AFTER_WORD_MS = 2000

export function useTypingEffect(words) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayed, setDisplayed]       = useState('')
  const [isDeleting, setIsDeleting]     = useState(false)

  useEffect(() => {
    const currentWord = words[currentIndex]
    let timeout

    if (!isDeleting && displayed.length < currentWord.length) {
      // Still typing forward
      timeout = setTimeout(
        () => setDisplayed(currentWord.slice(0, displayed.length + 1)),
        TYPING_SPEED_MS,
      )
    } else if (!isDeleting && displayed.length === currentWord.length) {
      // Pause at full word, then start deleting
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_WORD_MS)
    } else if (isDeleting && displayed.length > 0) {
      // Deleting backwards
      timeout = setTimeout(
        () => setDisplayed(displayed.slice(0, -1)),
        DELETING_SPEED_MS,
      )
    } else if (isDeleting && displayed.length === 0) {
      // Move to next word
      setIsDeleting(false)
      setCurrentIndex((currentIndex + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, currentIndex, words])

  return displayed
}
