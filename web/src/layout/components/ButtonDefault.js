import { ButtonDefault } from './css/ButtonDefault-style'

function Button(props){
    return(
        <ButtonDefault onClick={props.onClick} bgColor={props.bgColor} margin={props.margin} width={props.width}>{props.text}</ButtonDefault>
    )
}

export default Button;