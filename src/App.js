import React, { useState, useEffect } from 'react'

const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle)

  const updateTitle = () => {
    const titleElement = document.querySelector('title')
    titleElement.innerText = title
  }

  useEffect(updateTitle, [title])

  return setTitle
}

const App = () => {
  const setTitle = useTitle('loading....')
  setTimeout(() => {
    setTitle('good!!!')
  }, 5000);

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
