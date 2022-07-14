import styled from "styled-components";

const Container = styled.div`

    
    height: calc(100vh - 7.1vh);
    width: 72px;
    top: 7.1vh;
    box-shadow:8px 0 10px #f0f0f0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(10, 1fr);
    align-items: center;
    
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

.Button{
    color:black; 
    display: flex;
    flex-direction: column;
    font-size:8px ;
    height: 100%;
    align-items: center;
    flex-wrap: nowrap;
    width: -webkit-fill-available;
    
}
.Button:hover{
    background-color: #f0f0f0;
}

a{
    text-decoration: none;
    margin-left: -5px;
}
`

export default Container;