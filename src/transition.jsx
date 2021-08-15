import { useEffect, useRef, useState } from 'react'
import useInterval from './useInterval'

const AnimatedCircles = () => {
    const [visibleCircles, setVisibleCircles] = useState(
        generateCircle()
    )
    useInterval(() => {
        setVisibleCircles(generateCircle())
    }, 2000)

    return (
        <svg viewBox="0 0 100 20">
            {allCircles.map(d => (
                <AnimatedCircle
                    key = {d}
                    index = {d}
                    isShowing = {visibleCircles.include(d)}
                />
            ))}
        </svg>
    )
}

const AnimatedCircle = ({ index, isShowing }) => {
    const wasShowing = useRef(false)
    
    useEffect(() => {
        wasShowing.current = isShowing
    }, [isShowing])

    const style = useSpring({
        
    })
}