import styled from 'styled-components';

export const Section = styled.div`
  border: none;
  width: 100%;
  overflow: visible;
  background: ${props => (props.background ? props.background : 'none')};
  background-size: cover;
  ${props => props.marginBottom && `margin-bottom: ${props.marginBottom};`}
  ${props => props.marginTop && `margin-top: ${props.marginTop};`}
  ${props => !props.noPadding && 'padding: 2rem 0;'}
  ${props => props.noPaddingTop && 'padding-top: 0;'}
  ${props => props.noPaddingBottom && 'padding-bottom: 0;'}
`;

export const TemplateContent = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem 5rem;

  @media screen and (max-width: 600px) {
    padding: ${props => (props.mobileFlex ? '0' : '1rem')};
    ${props => props.noPaddingTop && 'padding-top: 0;'}
  }

  ${props => props.noPaddingTop && 'padding-top: 0;'}
`;