import {Container} from './Finder-style'

function Finder({width, title, type, placeholder}){
       return(        
        <Container width={width}>
            <h1 className='title'>{title}</h1>
            <div className='inpt-container'>
                <input type={type} placeholder={placeholder}/>
                <button className='plus-bttn'>+</button>
            </div>
        </Container>
    )
}

export default Finder;