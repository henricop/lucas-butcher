import styled from "styled-components";

export const ButtonDefault = styled.button`
    width: ${props => props.width};
    margin: ${props => props.margin};
    height: 36px;
    background-color: #3DC327;
    color: #FFFFFF;
    border-radius: 2px;
    border: none;
    font-size: 16px;
    font-weight: 500;
    float: right;

    &:hover{
        transition-duration: 0.2s;
        transform: scale(1.05);
        cursor: pointer;
    }

`;

ButtonDefault.defaultProps = {
    width: "200px",
    margin: "0px 0px 0px 0px",
}