import styled from "styled-components";

export const Container = styled.tr`
    td{
        height: 100px;
    }

    .td-main{
        display:flex;
        align-items: center;
        width: 220px;
    }

    .td-cell{
        text-align: center;
    }

    .info-container {
        margin-left: 15px;
    }

    .info-container > h1 {
        font-size: 16px;
    }

    .info-container > p{
        font-size: 12px;
    }

    .img-container{
        border: none;
        width: 80px;
        height: 80px;
        background-color: #DDDDDD;
        border-radius: 2px;
    }

    button{
        height: 30px;
        width: 60px;
        color: #FFF;
    }

    button:hover{
        transition: 0.2s;
        filter: brightness(85%);
    }

    .bttns-container{
        text-align: center;
    }

    .edit{
        background-color: #C3C653;
        border-radius: 2px 0px 0px 2px;
    }

    .delete{
        background-color: #EA7A7A;
        border-radius: 0px 2px 2px 0px;
    }
`;