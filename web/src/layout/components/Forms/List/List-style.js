import styled from "styled-components";

export const Container = styled.div`
    width: ${props => props.width};
    height: auto;

    .title{
        margin: 0;
        padding: 0;
        margin-top: 16px;
        margin-bottom: 16px;
        font-size: 16px;
        
    }

    .list-container{
        padding: 0;
        margin: 0;
        overflow: hidden;
        overflow-y: scroll;
        max-height: 250px;
        height: auto;
        border: 1px solid #8f8f9d;
        border-radius: 2px;
    }
`;

Container.defaultProps = {
    width: "400px",
}