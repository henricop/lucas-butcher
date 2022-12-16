import styled from "styled-components";

export const Container = styled.div`
    th{
        width: ${props => props.cellwidth};
    }

    .th-title{
        color: #555555;
    }
    
`;

Container.defaultProps = {
    cellwidth: "200px",
};
