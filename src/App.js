import React, { useEffect, useRef } from 'react'

const useClick = onClick => {
  const element = useRef()

  useEffect(() => {
    const current = element.current
    if (current) {
      current.addEventListener('click', onClick)

      return () => {
        current.removeEventListener('click', onClick)
      }
    }
  }, [])

  return element
}

const App = () => {
  const title = useClick(() => console.log(title.current))
  const input = useRef()

  useEffect(() => {
    setTimeout(() => input.current.focus(), 3000)
  }, [])

  return (
    <div>
      <h1 ref={title}>Hello Hooks!!!</h1>
      <input ref={input} type="text" placeholder="name" />
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
