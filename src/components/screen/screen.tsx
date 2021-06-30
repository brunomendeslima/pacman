import styled from "styled-components"

const ScreenTemplate = styled.div`
    width: 100px;
    height: 80px;
    border-style: solid;
    border-width: 1px;
`
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Screen = (props : any) => {
    return(
        <Container>
            <ScreenTemplate>
                {props.children}
            </ScreenTemplate>
        </Container>
    )
}


export {Screen}