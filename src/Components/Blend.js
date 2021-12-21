import React, {useState, useEffect} from 'react'
import BlendImg from '../assets/blend.png'

export default function Blend() {
    const [aboutOffSetY, setAboutOffSetY] = useState(0)

    useEffect(() => {
        function mouseScroll() {
            setAboutOffSetY(window.pageYOffset)
        }

        window.addEventListener('scroll', mouseScroll)
        return () => {
            window.removeEventListener('scroll', mouseScroll)
        }
    }, [])

    return (
        <div style={{
            backgroundImage: `url(${BlendImg})`,
            backgroundPosition: 'top center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            transform: `translateY(${aboutOffSetY * (-.5)}px)`,
            width: '100%',
            position: 'relative',
            zIndex: 4,
            marginTop: '-15rem',
            height: '100vh',
        }}>
        </div>
    )
}