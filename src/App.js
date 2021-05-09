import React, { useState, useRef, useEffect } from 'react'

const useNotification = (title, options = null) => {
  if (!('Notification' in window)) {
    return
  }

  const fireNotification = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then(permission => {
        if (permission !== 'granted') {
          return
        }
      })
    }

    new Notification(title, options)
  }

  return fireNotification
}

const App = () => {
  const triggerNotification = useNotification('Hello notification!', { body: 'good evening!' })

  return (
    <div>
      <h1>Hello Hooks!!!</h1>
      <button onClick={triggerNotification}>fire notification</button>
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
