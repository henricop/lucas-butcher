import { ButtonDefault } from './ButtonDefault-style'

function Button({margin, width, text, link, onClick}){
    const button = (<ButtonDefault margin={margin} width={width} onClick={onClick}>{text}</ButtonDefault>)
    return(
        <div>
        {
        link ? 
            <a href={link}> {button} </a>
            : 
            button
        }
        </div>
    )
}

export default Button;