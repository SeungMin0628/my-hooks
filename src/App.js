import React, { useEffect } from 'react'

const useBeforeLeave = (callable) => {
  const beforeLeave = (event) => {
    const { clientY } = event
    if (clientY <= 0) {
      callable()
    }
  }

  useEffect(() => {
    document.addEventListener('mouseleave', beforeLeave)

    return () => {
      document.removeEventListener('mouseleave', beforeLeave)
    }
  }, [])
}

const App = () => {
  useBeforeLeave(() => { console.log("please don't leave") })

  return (
    <div>
      <h1>Hello Hooks!!!</h1>
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
