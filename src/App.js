import React, { useState } from 'react'

const App = () => {
  const [item, setItem] = useState(0)

  const incrementItem = () => setItem(item + 1)
  const decrementItem = () => setItem(item - 1)

  return (
    <>
      <h1>Hello Hooks!!!</h1>

      <div>
        {item}
        <button onClick={incrementItem}>+ 1</button>
        <button onClick={decrementItem}>- 1</button>
      </div>
    </>
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
