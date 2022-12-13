import styled from "styled-components";

export const Container = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    height: 36px;
    width: ${props => props.width};
    box-sizing: border-box;
    border-bottom: 1px solid #8f8f9d;
    align-items: center;
    padding-left: 10px;

    p{
        font-size: 16px;
    }

    .name{
        width: 35%;
        text-align: left;
        color: #8f8f9d;
    }

    .weight{
        width: 20%;
        color: #8f8f9d;
    }

    .value{
        width: 30%;
        color: #8f8f9d;
    }

    .remove-bttn{
        height: 30px;
        width: 30px;
        font-size: 24px;
        font-weight: 700;
        border: none;
        background-color: #AAAAAA;
        color: #FFF;
        border-radius: 2px;
      }

    .remove-bttn:hover{
        transition-duration: 0.2s;
        transform: scale(1.05);
        cursor: pointer;
    }
`;

Container.defaultProps = {
    width: "400px",
}