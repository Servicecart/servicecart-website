import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import wolfImage from '../assets/images/fly_wolf.png'

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      setIsVisible(true)

      // Detect interactive elements
      const target = e.target as HTMLElement
      const isInteractive =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        target.closest('[role="button"]') !== null ||
        target.style.cursor === 'pointer' ||
        window.getComputedStyle(target).cursor === 'pointer'

      setIsHovering(isInteractive)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    // Initialize cursor position
    cursorX.set(window.innerWidth / 2)
    cursorY.set(window.innerHeight / 2)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [cursorX, cursorY])

  if (!isVisible) return null

  return (
    <>
      {/* Wolf Cursor Image - Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          zIndex: 9999,
          pointerEvents: 'none',
          touchAction: 'none',
          willChange: 'transform',
        }}
        animate={{
          scale: isClicking ? 0.8 : isHovering ? 1.3 : 1,
          opacity: isVisible ? 1 : 0,
          rotate: isHovering ? 10 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
          mass: 0.5,
        }}
      >
        <img
          src={wolfImage}
          alt="Wolf Cursor"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain drop-shadow-lg pointer-events-none"
          style={{
            filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))',
            pointerEvents: 'none',
            userSelect: 'none',
            WebkitUserSelect: 'none',
          }}
          loading="eager"
          draggable={false}
        />
      </motion.div>

      {/* Hover Effect Ring - Appears on interactive elements */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 w-24 h-24 rounded-full border-2 border-purple-400/50 pointer-events-none"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            zIndex: 9998,
            pointerEvents: 'none',
            touchAction: 'none',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: [0, 0.6, 0.4],
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            duration: 0.4,
            opacity: {
              times: [0, 0.5, 1],
              repeat: Infinity,
              duration: 2,
            },
          }}
        />
      )}

      {/* Click Ripple Effect */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 w-20 h-20 rounded-full border-2 border-purple-500/60 pointer-events-none"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            zIndex: 9998,
            pointerEvents: 'none',
            touchAction: 'none',
          }}
          initial={{ scale: 0.8, opacity: 1 }}
          animate={{ scale: 1.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Smooth Trail Effect */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full bg-purple-500/20 pointer-events-none blur-md"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          zIndex: 9997,
          pointerEvents: 'none',
          touchAction: 'none',
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.4 : 0.15,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
        }}
      />
    </>
  )
}

export default CustomCursor
