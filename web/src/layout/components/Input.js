import { Container } from './css/Input-style'

function Input(props){
    return(
        <Container width={props.width} height={props.height}>
            <h1 className='title'>{props.title}</h1>
            <input type={props.type} placeholder={props.placeholder}/>
        </Container>
    )
}

export default Input;