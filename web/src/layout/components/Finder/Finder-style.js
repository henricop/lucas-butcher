import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props => props.width};

    .title{
        margin: 0;
        padding: 0;
        margin-top: 16px;
        margin-bottom: 16px;
        font-size: 16px;
        
    }

    input{
        width: 100%;
        height: 36px;
        box-sizing: border-box;
        padding-left: 10px;
        border: 1px solid #8f8f9d;
        border-radius: 2px;
    }

    .inpt-container{
        display: flex;
    }

    .inpt-container>.plus-bttn{
        margin-left: 10px;
    }

    .plus-bttn{
        height: 36px;
        width: 36px;
        font-size: 24px;
        font-weight: 700;
        border: none;
        background-color: #3DC327;
        color: #FFF;
        border-radius: 2px;
      }

    .plus-bttn:hover{
        transition-duration: 0.2s;
        transform: scale(1.05);
        cursor: pointer;
    }
`;

Container.defaultProps = {
    width: "400px",
}