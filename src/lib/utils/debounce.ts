export function debounce<T extends Function>(cb: T, wait = 20) {
  let frame: number
  let callable = (...args: any) => {
    // If the frame variable has been defined, clear it now, and queue for next frame
    if (frame) {
      cancelAnimationFrame(frame)
    }

    // Queue our function call for the next frame
    frame = requestAnimationFrame(() => {
      // Call our function and pass any params we received
      cb(...args)
    })
  }
  return <T>(<any>callable)
}
