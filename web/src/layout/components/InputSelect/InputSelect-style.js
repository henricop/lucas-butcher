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

    select{
        background-color: #FFF;
        height: 36px;
        border: none;
        border: 1px solid #8f8f9d;
        border-radius: 2px;
        box-sizing: border-box;
        padding-left: 10px;
    }
`;

Container.defaultProps = {
    width: "400px",
}