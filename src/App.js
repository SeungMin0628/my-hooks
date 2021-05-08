import React, { useState } from 'react'

const useInput = (initValue, validator) => {
  const [value, setValue] = useState(initValue)

  const onChange = ({target: {value}}) => {
    let willUpdate = true

    if (typeof validator === 'function') {
      willUpdate = (validator(value))
    }

    if (willUpdate) {
      setValue(value)
    }
  }

  return { value, onChange }
}

const App = () => {
  const maxLen = value => value.length <= 10
  const name = useInput("Mr.", maxLen)

  return (
    <>
      <h1>Hello Hooks!!!</h1>
      <input type="text" placeholder="name" {...name} />
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
