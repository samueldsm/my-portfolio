'use client'

import { useEffect, useCallback } from 'react'

const LuminousPointerEffect = () => {
  const handlePointerMove = useCallback((e: MouseEvent | TouchEvent) => {
    let x, y
    if (e instanceof MouseEvent) {
      x = e.clientX
      y = e.clientY
    } else if (e instanceof TouchEvent) {
      x = e.touches[0].clientX
      y = e.touches[0].clientY
    }

    if (x !== undefined && y !== undefined) {
      document.documentElement.style.setProperty('--x', `${x}px`)
      document.documentElement.style.setProperty('--y', `${y}px`)
    }
  }, [])

  const handlePointerEnter = useCallback(() => {
    document.querySelector('.luminous-pointer')?.classList.add('active')
  }, [])

  const handlePointerLeave = useCallback(() => {
    document.querySelector('.luminous-pointer')?.classList.remove('active')
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', handlePointerMove)
    document.addEventListener('touchmove', handlePointerMove)
    document.addEventListener('touchstart', handlePointerMove)
    document.addEventListener('mouseenter', handlePointerEnter)
    document.addEventListener('touchstart', handlePointerEnter)
    document.addEventListener('mouseleave', handlePointerLeave)
    document.addEventListener('touchend', handlePointerLeave)

    return () => {
      document.removeEventListener('mousemove', handlePointerMove)
      document.removeEventListener('touchmove', handlePointerMove)
      document.removeEventListener('touchstart', handlePointerMove)
      document.removeEventListener('mouseenter', handlePointerEnter)
      document.removeEventListener('touchstart', handlePointerEnter)
      document.removeEventListener('mouseleave', handlePointerLeave)
      document.removeEventListener('touchend', handlePointerLeave)
    }
  }, [handlePointerMove, handlePointerEnter, handlePointerLeave])

  return null
}

export default LuminousPointerEffect
