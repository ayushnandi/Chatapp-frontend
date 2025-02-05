import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import toast from 'react-hot-toast'
import joinCreateChat from './components/joinCreateChat';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <joinCreateChat/>
    </div>
  )
}

export default App
