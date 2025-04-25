// hooks/useChangedEffect.js
import { useEffect, useState } from 'react'

const useChangedEffect = (dep, delay = 500) => {
  const [isChanged, setIsChanged] = useState(false)

  useEffect(() => {
    setIsChanged(true)
    const timer = setTimeout(() => setIsChanged(false), delay)
    return () => clearTimeout(timer)
  }, [dep, delay])

  return isChanged
}

export default useChangedEffect
