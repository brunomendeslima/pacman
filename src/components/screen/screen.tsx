import styled from "styled-components"

const ScreenTemplate = styled.div`
    width: 700px;
    height: 500px;
    border-style: solid;
    border-width: 5px;
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