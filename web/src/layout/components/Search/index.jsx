import {Container} from './Search-style'

function Finder(props){
       return(        
        <Container width={props.width}>
            <h1 className='title'>{props.title}</h1>
            <input type={props.type} placeholder={props.placeholder}/>
        </Container>
    )
}

export default Finder;