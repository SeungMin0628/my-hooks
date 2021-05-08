import React, { useEffect, useState } from 'react'

const useNetwork = (handleOnLineListener, handleOffLineListener) => {
  const [status, setStatus] = useState(navigator.onLine)

  const handleChange = () => {
    setStatus(navigator.onLine)

    if(navigator.onLine) {
      if (typeof handleOnLineListener === 'function') {
        handleOnLineListener()
      }
    } else {
      if (typeof handleOffLineListener === 'function') {
        handleOffLineListener()
      }
    }
  }

  useEffect(() => {
    window.addEventListener('online', handleChange)
    window.addEventListener('offline', handleChange)

    return () => {
      window.removeEventListener('online', handleChange)
      window.removeEventListener('offline', handleChange)
    }
  }, [])

  return status
}

const App = () => {
  const handleOnLine = () => console.log('I am online...!')
  const handleOffLine = () => console.log('I am offline...!')
  const status = useNetwork(handleOnLine, handleOffLine)

  return (
    <div>
      <h1>Hello Hooks!!!</h1>
      <p>{status ? 'Online' : 'Offline'}</p>
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
