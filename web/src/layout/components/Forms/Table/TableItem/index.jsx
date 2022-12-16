import {Container} from './TableItem-style'

function TableItem(props){
    return(
        <Container>
            <td className='td-main'>
                <div className='img-container'>

                </div>
                <div className='info-container'>
                    <h1>{props.name}</h1>
                    <p>{props.id}</p>
                </div>
            </td>
            {
                props.itemInfo > 0 ?
                null:
                props.itemInfo.map(element => {
                    return (<td className='td-cell'>{element}</td>)
                })
            }
            <td className='action-buttons'>
                <div className='bttns-container'>
                    <button className='edit'>Editar</button>
                    <button className='delete'>Excluir</button>
                </div>
            </td>
        </Container>
    )
}

export default TableItem