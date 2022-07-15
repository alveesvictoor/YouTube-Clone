import styled from "styled-components";

const Container = styled.nav`
z-index: 100;
  position: fixed;
  width: calc(100% - 72px);
  display: flex;
    align-items: center;
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
.arrow{
    position: absolute;
} 
.left{
    left:0;
    z-index: 10;
    background-color: #ffff;
    height: 56px;
    width: 50px;
    padding: 15px;
}
.left::after{
    content: "oie";
    background-color: black;
    color: black;
    width: 100px;
    height: 100px;
    display: inline-block;
}
.right{
    z-index: 10;
    background-color: #ffff;
    height: 56px;
    width: 50px;
    padding: 15px;
    right: 0;
}

`

export default Container;