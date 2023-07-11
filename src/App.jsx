import './App.css'
import { useEffect, useState } from 'react'

const FollowMouse = () => {
    const [enabled, setEnabled] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    //pinter move
    useEffect(() => {
        console.log('effect ', { enabled })

        const handleMove = (event) => {
            const { clientX, clientY } = event
            console.log('handleMove', { clientX, clientY })
            setPosition({ x: clientX, y: clientY })
        }

        if (enabled) {
            window.addEventListener('pointermove', handleMove)
        }
        // cleanup:
        // Esto se ejecuta cuando el componente se desmonta
        // y cuando cambia las dependencias, antes de ejecutar el efecto de nuevo
        return () => {
            console.log('cleanup')
            window.removeEventListener('pointermove', handleMove)
        }
    }, [enabled]) // dependencia

    // [] -> solo se ejecuta una vez cuando se monta el componente
    // [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
    // undefined -> se ejecuta cada vez que se renderiza el componente

    // change body className
    useEffect(() => {
        document.body.classList.toggle('no-cursor', enabled)

        return () => {
        document.body.classList.remove('no-cursor')
        }
    }, [enabled])


    return (
        <>
        <div style={{ 
            position: 'absolute',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            border: '1px solid #fff',
            borderRadius: '50%',
            opacity: 0.8,
            pointerEvents: 'none',
            left: -25,
            top: -25,
            width: '50px',
            height: '50px',
            transform: `translate(${position.x}px, ${position.y}px)`,
        }} />
            <h1>
                Mouse Follower
            </h1>
            <button onClick={() => setEnabled(!enabled)}>
                {enabled ? 'Desactivar' : 'Activar'} puntero
            </button>
        </>
    )
}


function App() {
    return (
        <main>
            <FollowMouse />
        </main>
    )
}

export default App
