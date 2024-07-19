import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { router } from './router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App
