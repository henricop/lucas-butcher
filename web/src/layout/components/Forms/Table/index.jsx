import { Container } from './Table-style'
import TableItem from './TableItem';

function UserList(props){
    return(
        <Container cellwidth={props.cellwidth}>
            <table>
                <tbody>
                    <tr>
                        <th></th>
                        {
                            props.titles > 0 ?
                                null
                            :
                            props.titles.map((element) => {
                                return (<th key={element} className='th-title'>{element}</th>)
                            })
                        }
                        <th className='th-title'>Ação</th>
                    </tr>
                    {
                        props.items > 0 ? 
                            null
                        :
                        props.items.map((element) =>{
                            console.log(Object.keys(element).length)
                            return (<TableItem 
                                key={element.id} 
                                name={element.name} 
                                id={element.id} 
                                itemInfo={[element.type, element.email, element.cpf, element.phone, element.register_date]} 
                                cells={props.titles.length}/>)
                        })
                    }       
                </tbody> 
            </table>
        </Container>
    )
}

export default UserList;