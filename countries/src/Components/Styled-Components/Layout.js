import styled from 'styled-components';

export const HeaderBar = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;  
  width: 100%;
  height: 70px;
  top: 0;
  z-index: 10;
  background: white;
  box-shadow: 0 0 5px hsl(0, 0%, 52%);
  p {
    font-weight: bold;
    font-size: 1.2rem;
    letter-spacing: 0.05em;
    margin-left: 2rem;
  }
`


export const FooterBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;  
  bottom: 0;
  width: 100%;
  position: fixed;
  height: 60px;
  background: #F6F6F6;
  font-size: 0.8rem;
  a {
    color: hsl(209, 23%, 22%);
    text-decoration: none;
  }
  & a:visited {
    color: hsl(209, 23%, 22%);
  }
`;