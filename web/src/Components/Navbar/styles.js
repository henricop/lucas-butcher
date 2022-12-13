import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100vw;
  height: 60px;
  background: #c6c6c6;
  padding: 0 5rem;
  

  display: flex;
  justify-content: center;
  align-items:center;
  main {
    max-width: 1100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items:center;
    section{
      display: flex;
      flex-direction: column;
      align-items:center;
      justify-content: center;
      text-align: left;
      gap: .5rem;
      time {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 12px;
        color: #2D2E2F;
        opacity: 0.53;
      }
      span {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
      }
    }
    div{
      display: flex;
      align-items:center;
      justify-content: center;
      gap: .5rem;
      transition: var(--transition);
      svg {
        font-size: 22px;
        &:hover{
            cursor: pointer;
           transform: scale(1.05);
        }
      }
    }
  }
  @media(max-width: 900px){
    padding: 0 1rem;
    width: 100vw;
    main {
    max-width: 100%;
  }
  }
  
`;