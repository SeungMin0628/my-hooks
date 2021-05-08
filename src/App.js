import React, { useState, useRef, useEffect } from 'react'

const useFullscreen = (callback = null) => {
  const [isFull, setFull] = useState(document.fullscreenElement !== null)
  const [element] = useState(useRef())

  const runCallback = (isFull) => {
    if (typeof callback === 'function') {
      callback(isFull)
    }
  }

  const enterFull = () => {
    if (element.current) {
      element.current.requestFullscreen()
    }
  }

  const exitFull = () => {
    document.exitFullscreen()
  }

  const onFullscreenChange = () => {
    const isFull = document.fullscreenElement !== null
    setFull(isFull)
    runCallback(isFull)
  }

  useEffect(() => {
    document.addEventListener('fullscreenchange', onFullscreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange)
    }
  }, [])

  return { element, isFull, enterFull, exitFull }
}

const App = () => {
  const callback = (isFull) => {
    if (isFull) {
      console.log('The image is now fullscreen...!')
    } else {
      console.log('The image is now small...!')
    }
  }

  const { element, isFull, enterFull, exitFull } = useFullscreen(callback)

  return (
    <div>
      <h1>Hello Hooks!!!</h1>
      <div ref={element}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Example_image.png"
          alt="exmaple"
        />
        <button style={{display: isFull ? 'block' : 'none'}} onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={enterFull}>Enter fullscreen</button>
    </div>
  )
}

// class LegacyApp extends React.Component {
//   state = {
//     item: 0
//   }

//   incrementItem = () => {
//     this.setState(prev => ({item: prev.item + 1}))
//   }

//   decrementItem = () => {
//     this.setState(prev => ({item: prev.item - 1}))
//   }

//   render() {
//     const { item } = this.state

//     return (
//       <>
//         <h1>Hello Hooks!!!</h1>

//         <div>
//           {item}
//           <button onClick={this.incrementItem}>+ 1</button>
//           <button onClick={this.decrementItem}>- 1</button>
//         </div>
//       </>
//     )
//   }
// }

export default App
