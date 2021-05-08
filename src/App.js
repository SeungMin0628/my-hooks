import React, { useEffect, useRef } from 'react'

const useFadeIn = (duration = 3, delay = 0) => {
  const element = useRef()

  const fadeIn = () => {
    if (element.current) {
      element.current.style.opacity = 1
      element.current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
    }
  }

  useEffect(() => {
    fadeIn()
  }, [])

  return { ref: element, style: { opacity: 0 } }
}


const App = () => {
  const fadeInTitle = useFadeIn(2)
  const fadeInP =  useFadeIn(5, 3)

  return (
    <div>
      <h1 {...fadeInTitle}>Hello Hooks!!!</h1>
      <p {...fadeInP}>Good morning!</p>
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
