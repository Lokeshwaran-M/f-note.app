import { useState } from 'react'
import Note from "./components/note.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Note note ="hi this is a sample note"/>
      <Note note="This is a small note" />
      <Note note="Another floating note" />
      <Note note="Yet another note bdvbieb  vidbibd c dbcibdic c d idi d c s cis c s cis ic s ic s cs ic si" />
    </>
  )
}

export default App
