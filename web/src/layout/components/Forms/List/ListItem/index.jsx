import {Container} from "./ListItem-style"

function ListItem(props){
    return(
        <Container>
            <p className="name">{props.name}</p>
            <p className="weight">{props.weight} KG</p>
            <p className="value">R$ {props.value}</p>
            <button className="remove-bttn">-</button>
        </Container>
    )
}

export default ListItem