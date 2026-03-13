'use client'

import { useEffect } from 'react'

export default function SoundEffects() {
  useEffect(() => {
    // Create click sound effect
    const playClickSound = () => {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.value = 800
      oscillator.type = 'sine'

      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.1)

      // Create ripple effect
      const ripple = document.createElement('div')
      ripple.className = 'click-ripple'
      ripple.style.left = `${(window as any).lastClickX}px`
      ripple.style.top = `${(window as any).lastClickY}px`
      document.body.appendChild(ripple)

      setTimeout(() => {
        ripple.remove()
      }, 600)
    }

    const handleClick = (e: MouseEvent) => {
      (window as any).lastClickX = e.clientX;
      (window as any).lastClickY = e.clientY
      playClickSound()
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return null
}
