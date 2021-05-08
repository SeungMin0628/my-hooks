import React, { useState } from 'react'

const contents = [
  {
    tab: 'Tab 1',
    content: 'Content 1'
  },
  {
    tab: 'Tab 2',
    content: 'Content 2'
  }
]

const useTabs = (initialIndex, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  if (!allTabs || !Array.isArray(allTabs)) {
    return
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  }
}

const App = () => {
  const { currentItem, changeItem } = useTabs(0, contents)

  return (
    <div>
      <h1>Hello Hooks!!!</h1>
      {contents.map((content, index) =>
        <button key={index} onClick={() => {changeItem(index)}}>{content.tab}</button>
      )}
      <div>{currentItem.content}</div>
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
