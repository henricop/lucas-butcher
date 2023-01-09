import { ButtonDefault } from './ButtonDefault-style'

function Button({margin, width, text, link}){
    return(
        <div>
        {
        link ? 
            <a href={link}>
                <ButtonDefault margin={margin} width={width}>{text}</ButtonDefault>
            </a>
            : 
            <ButtonDefault margin={margin} width={width}>{text}</ButtonDefault>
        }
        </div>
    )
}

export default Button;