import styled from 'styled-components';

export const Container = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items:start;
  justify-content: flex-start;

  svg {
    height: 30px;
    width: 30px;
    transition: all .2s;
    &:hover{
      cursor: pointer;
      transform: scale(1.1);
    }
  }


`;