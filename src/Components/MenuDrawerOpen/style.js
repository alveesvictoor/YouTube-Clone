import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 240px;
    top: 7.1vh;
    box-shadow:8px 0 10px #f0f0f0;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
.section{
    width: 100%;
}
a{text-decoration:none;}
.button{
    color:black;
    display: flex;
    flex-direction: row;
    font-size: 14px; 
    margin:1px;
    width: 100%;
    column-gap: 20px;
    justify-content: flex-start;
    font-weight: 400;
    text-transform: capitalize;
    
}
.button:hover{
    background-color: #e5e5e5;
}
.divider{
    background-color:#e5e5e5;
    width: 100%;
    height: 1px;
    margin: 10px 0 10px 0;

}
.ico{
    font-size: 24px;
    margin-right:5px;
    margin-left: 12px;
    font-weight: 300;
}
`

export default Container;