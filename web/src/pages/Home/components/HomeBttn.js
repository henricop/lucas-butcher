import { FrameLink, Image, Title } from './css/home-bttn-style'


function Home_Bttn(props){
    return (
       <FrameLink to={props.path}>
            <Image src={props.src} alt="#"/>
            <Title>{props.title}</Title>
       </FrameLink>
    )
}

export default Home_Bttn;
