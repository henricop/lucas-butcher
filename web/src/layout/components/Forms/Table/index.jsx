import { Container } from './Table-style'
import TableItem from './TableItem';

function UserList(props){
    const itemKeys = props.itemKeys;

    function setKeys(object){
        var itemInfo = [];
        itemKeys.forEach(element => {
            itemInfo.push(object[element]);
        });
        return itemInfo;
    }

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
                                key={element[props.id]} 
                                name={element[props.name]} 
                                id={element[props.id]} 
                                itemInfo={setKeys(element)} 
                                cells={props.titles.length}/>)
                        })
                    }       
                </tbody> 
            </table>
        </Container>
    )
}

export default UserList;