import {Container} from './css/Finder-style'

function Finder(props){
       return(        
        <Container width={props.width}>
            <h1 className='title'>{props.title}</h1>
            <div className='inpt-container'>
                <input type={props.type} placeholder={props.placeholder}/>
                <button className='plus-bttn'>+</button>
            </div>
        </Container>
    )
}

export default Finder;