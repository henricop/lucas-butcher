import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items:flex-start;
  justify-content: center;
  gap: 1rem;

  h2 { 
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: left;
  }
  div#container {
    max-height: 210px;
    overflow-y:scroll;
    overflow-x: hidden;
    border: 1px solid #CCCCCC;
    border-radius: 2px;
    width: 100%;
    min-width: 400px;

    ul {
      li {
        padding: .5rem 1rem;
        display: flex;
        align-items:center;
        justify-content:space-between;
        gap:1rem;
        span {
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 19px;

          color: rgba(0, 0, 0, 0.2);
        }
        div {
          background: #A0A0A0;
          padding: .5rem 1rem;
          min-height: 36px;
          display: flex;
          align-items:center;
          justify-content:center;
          transition: all .2s;
          border-radius: 2px;

          svg {
            color: #fff;
          }
          &:hover {
            cursor: pointer;
            background: #6B6464;
          }
        }
      }
    }
  }
  @media(max-width: 900px){
    width: 100%;
    div#container {
      min-width: 100%;
      width: 100%;
    }
  }
`;