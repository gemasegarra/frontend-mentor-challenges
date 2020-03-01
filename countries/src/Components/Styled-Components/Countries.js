import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  -webkit-column-gap: 0.3rem;
  -moz-column-gap: 0.3rem;
  column-gap: 0.1rem;
  margin: auto;
  width: 90%;
`;

export const Card = styled.div`
  margin: 2rem;   
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 2px -2px  hsl(0, 0%, 80%);

`;

export const Body = styled.div `
  margin: 2rem;
`

export const Name = styled.h1 `
  font-size: 1.5rem;
  margin-bottom: 2rem;
`

export const Bold = styled.p `
  display: inline;
  font-weight: 800`

export const Picture = styled.img` 
  width: 100%;
  height: 200px;
  border-radius: 10px 10px 0 0;
`