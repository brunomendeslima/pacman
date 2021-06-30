import styled from "styled-components"
import { PlayerProps } from "./index"

const PlayerTemplate = styled.div<PlayerProps>`
    width: 5px;
    height: 5px;
    background-color: yellow;
    margin-top: ${state => state.positionY}px;
    margin-left: ${state => state.positionX}px;
`


export {PlayerTemplate}