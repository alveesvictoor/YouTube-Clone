import styled from "styled-components";

const Container = styled.nav`
    width: calc(100%);
    height: 56px;
    border-bottom: 1.5px solid #f0f0f0;
    border-top: 1.5px solid #f0f0f0;
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 12px;
    grid-column: 2;
    padding: 12px;
    overflow-x: scroll;

    .button{
        
        text-transform: capitalize;
        color: black;
        border: 1px solid #d7d7d7;
        background-color: #e5e5e5;
        border-radius: 50px;
        min-width: min-content;
        padding-left: 12px;
        padding-right: 12px;
        white-space: nowrap;
        
}
`

export default Container;