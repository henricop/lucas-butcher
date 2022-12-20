import { Container } from './UploadButton-style'

function UploadButton(props){
    return(
        <Container>
            {props.title? <h1 className='title'>{props.title}</h1> : ""}
            <input type="file" accept={props.accept}/>
        </Container>
    )
}

export default UploadButton;