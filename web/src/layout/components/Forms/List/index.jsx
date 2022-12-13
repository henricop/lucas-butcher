import {Container} from './List-style'
import ListItem from './ListItem'

function List(props){
    return(
        <Container>
            <h1 className='title'>{props.title}</h1>
            <ul className='list-container'>
                <ListItem name="Coca-Cola" weight="0,9" value="19,99"/>
                <ListItem name="Picanha" weight="0,9" value="19,99"/>
                <ListItem name="Frango resfriado" weight="0,9" value="19,99"/>
                <ListItem name="Linguiça toscana" weight="0,9" value="19,99"/>
                <ListItem name="Linguiça toscana" weight="0,9" value="19,99"/>
                <ListItem name="Linguiça toscana" weight="0,9" value="19,99"/>
                <ListItem name="Linguiça toscana" weight="0,9" value="19,99"/>
            </ul>
        </Container>
    )
}

export default List