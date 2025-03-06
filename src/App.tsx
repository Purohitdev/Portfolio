import './App.css'
import Home from './Home/Home'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function App() {
  const shape1 = useRef(null)
  const shape2 = useRef(null)

  useEffect(() => {
    gsap.to(shape1.current, {
      x: '+=90',
      y: '+=100',
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    })

    gsap.to(shape2.current, {
      x: '-=105',
      y: '-=200',
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    })
  }, [])

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:30px_30px] opacity-45"></div>
      
      {/* Large Blurred Shapes with GSAP */}
      <div ref={shape1} className="fixed -top-20 left-10 w-[500px] h-[500px] bg-[#313030] rounded-full opacity-50 blur-3xl z-[10]"></div>
      <div ref={shape2} className="fixed bottom-0 right-10 w-[400px] h-[400px] bg-[#313030] rounded-full opacity-60 blur-3xl z-[10]"></div>

      <Home />
    </div>
  )
}

export default App
