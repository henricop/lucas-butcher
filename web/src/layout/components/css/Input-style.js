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
        padding: 10px;
    }
`;

Container.defaultProps = {
    width: "400px",
}