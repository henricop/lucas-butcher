import { Container } from './Table-style'

function UploadButton(props){
    return(
        <Container>
            {props.children}
        </Container>
    )
}

export default UploadButton;