import React from 'react';
import {Screen} from './screen'

const ScreenComponent = (props : any) => {
    return(
    <Screen>
        {props.children}
    </Screen>)
}

export default ScreenComponent