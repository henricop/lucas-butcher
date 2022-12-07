import { Container } from './css/InputSelect-style'

function InputSelect(props){
    return(
    <Container width={props.width}>
        <h1 className='title'>{props.title}</h1>
        <select name={props.name} id={props.id}>
            {
                props.options.map( (elem, key) => 
                <option key={key}>{elem.name}</option> )
            }
        </select>
    </Container>
    )
}

export default InputSelect;