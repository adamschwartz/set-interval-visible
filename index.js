export const setIntervalVisible = (callback, ms) => {
  let timeout

  const next = () => {
    timeout = setTimeout(() => {
      requestAnimationFrame(() => {
        callback()
        next()
      })
    }, ms)
  }

  next()

  return {
    clear: () => {
      clearTimeout(timeout)
    }
  }
}

export default setIntervalVisible
