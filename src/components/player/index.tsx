import React, { useEffect } from "react"
import { PlayerTemplate } from "./player"

const Player: React.FC = (props) => {
    const [y, setY] = React.useState(2)
    const [x, setX] = React.useState(2)

    useEffect(() =>  console.log(x),[x])
    
    useEffect(() => document.addEventListener('keydown', checkInput), [])

    function checkInput(event: any) {
        const keyValue = event.keyCode
        const left = 37
        const up = 38
        const right = 39
        const down = 40
        
        switch(keyValue)
        {
            case left : setX(x - 1)
                break
            case right : setX(x + 1)
                break
            case up : setY(y - 1)
                break
            case down : setY(y + 1)
                break
        }
    }

    return (
        <PlayerTemplate positionX={x} positionY={y}></PlayerTemplate>
    )
}

interface PlayerProps {
    positionX: number,
    positionY: number
}

export type { PlayerProps }

export default Player
