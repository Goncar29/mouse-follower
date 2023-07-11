import './App.css'
import { useEffect, useState } from 'react'

function App() {
    const [enabled, setEnabled] = useState(false)

    useEffect(() => {
        console.log('effect', { enabled })

        const handleMove = (event) => {
            const { clientX, clientY } = event
            console.log('handleMove', { clientX, clientY })
        }

        if (enabled) {
            window.addEventListener('pointermove', handleMove)
        }
        
    }, [enabled])

    return (
        <main>
        <div style={{ 
            position: 'absolute',
            backgroundColor: '#09f',
            borderRadius: '50%',
            opacity: 0.8,
            pointerEvents: 'none',
            left: -20,
            top: -20,
            width: '40',
            height: '40',
            transform: 'translate(0px, 0px)',
        }}>
        </div>
            <h1>
                Mouse Follower
            </h1>
            <button onClick={() => setEnabled(!enabled)}>
                {enabled ? 'Desactivar' : 'Activar'} puntero
            </button>
        </main>
    )
}

export default App
