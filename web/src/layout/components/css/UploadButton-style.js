import styled from "styled-components";
import UploadButton from "../UploadButton";

export const Container = styled.div`

    position: relative;
    overflow: hidden;
    display: inline-block;
    margin-top: 16px;
    margin-bottom: 16px;

    h1.title{
        margin: 0;
        padding: 0;
        margin-bottom: 16px;
        font-size: 16px;
    }

    input::file-selector-button {
        font-weight: bold;
        color: black;
        padding: 8px;
        border: thin solid grey;
        border-radius: 4px;
        cursor: pointer;
    }
    
`;

export default Container;