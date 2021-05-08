import React from 'react'

const useConfirm = (message, confirmed, canceled = null) => {
  if (!confirmed || !message || typeof message !== 'string' || typeof confirmed !== 'function') {
    return
  }

  const confirmAction = () => {
    if (window.confirm(message)) {
      confirmed()
    } else {
      if (canceled && typeof canceled === 'function') {
        canceled()
      }
    }
  }

  return confirmAction
}

const App = () => {
  const handleDelete = () => console.log('Delete the world...!')
  const confirmDelete = useConfirm('Are you sure?', handleDelete, () => console.log('canceled.'))

  return (
    <div>
      <h1>Hello Hooks!!!</h1>
      <button onClick={confirmDelete}>Delete the world</button>
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
