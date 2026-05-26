import { useRef } from 'react'

export function useMagnetic(strength = 0.35) {
  const ref = useRef(null)

  const onMouseMove = (event) => {
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2
    node.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`
  }

  const onMouseLeave = () => {
    const node = ref.current
    if (!node) return
    node.style.transform = 'translate3d(0, 0, 0)'
  }

  return { ref, onMouseMove, onMouseLeave }
}
