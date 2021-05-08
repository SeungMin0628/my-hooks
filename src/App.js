import React, { useState, useEffect } from 'react'

const useScroll = () => {
  const [scroll, setScroll] = useState({ x: window.scrollX, y: window.scrollY })

  const onScroll = () => {
    setScroll({ x: window.scrollX, y: window.scrollY })
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return scroll
}


const App = () => {
  const { y } = useScroll()

  return (
    <div style={{height: '1000vh'}}>
      <h1 style={{position: 'fixed', color: y > 100 ? 'red' : 'blue'}}>Hello Hooks!!!</h1>
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
