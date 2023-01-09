import { Container } from './Input-style'

function Input({width, height, title, type, placeholder}){
    return(
        <Container width={width} height={height}>
            <h1 className='title'>{title}</h1>
            <input type={type} placeholder={placeholder}/>
        </Container>
    )
}

export default Input;