import React from 'react'

const usePreventLeave = () => {
  const preventLeave = (event) => {
    event.preventDefault()
    event.returnValue = ''
  }

  const protectLeavePage = () => {
    window.addEventListener('beforeunload', preventLeave)
  }

  const unprotectLeavePage = () => {
    window.removeEventListener('beforeunload', preventLeave)
  }

  return { protectLeavePage, unprotectLeavePage }
}

const App = () => {
  const { protectLeavePage, unprotectLeavePage } = usePreventLeave()

  return (
    <div>
      <h1>Hello Hooks!!!</h1>
      <button onClick={protectLeavePage}>Protect</button>
      <button onClick={unprotectLeavePage}>Unprotect</button>
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
