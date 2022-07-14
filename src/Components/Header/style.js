import styled from "styled-components";

const Container = styled.nav`

  height: 7.2vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  align-items: center;
  grid-column: 1/3;
  grid-row: 1;
  .logo{
    height: 2.7vh;
}
`


export default Container;