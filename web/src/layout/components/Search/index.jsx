import { Container } from './Search-style';

function Finder({ width, title, type, placeholder }) {
    return (
        <Container width={width}>
            <h1 className='title'>{title}</h1>
            <input type={type} placeholder={placeholder} />
        </Container>
    )
}

export default Finder;