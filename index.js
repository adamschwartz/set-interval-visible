export const setIntervalVisible = (callback, ms) => {
  let stop = false

  const next = () => {
    if (stop) return

    setTimeout(() => {
      requestAnimationFrame(() => {
        callback()
        next()
      })
    }, ms - 10)
  }

  next()

  return {
    clear: () => stop = true
  }
}

export default setIntervalVisible
