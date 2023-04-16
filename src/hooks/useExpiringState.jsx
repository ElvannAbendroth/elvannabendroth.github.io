import { useState, useEffect } from 'react'

export const useExpiringState = (
  initialValue,
  expiryDuration
) => {
  const [curVal, setVal] = useState(initialValue)
  const [activeTimeoutId, setActiveTimeoutId] =
    useState(null)

  useEffect(() => {
    const handle = setTimeout(() => {
      setVal(null)
    }, expiryDuration || 5000)
    setActiveTimeoutId(handle)
  }, [])

  const expiringSetter = newVal => {
    setVal(newVal)
    clearTimeout(activeTimeoutId)
    const handle = setTimeout(() => {
      setVal(null)
    }, expiryDuration || 5000)
    setActiveTimeoutId(handle)
  }

  return [curVal, expiringSetter]
}
