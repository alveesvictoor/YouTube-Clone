import styled from "styled-components";

const Container = styled.nav`
   .scroll-bar{ height: 56px;
    width:100%;
    border-bottom: 1.5px solid #f0f0f0;
    border-top: 1.5px solid #f0f0f0;
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 12px;
    grid-column: 2px;
    padding: 0 12px 0 12px;
    overflow-x: scroll;
    overflow-y: hidden;
    position: fixed;
    background-color: #fff;
}

&::-webkit-scrollbar{display:none;}
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