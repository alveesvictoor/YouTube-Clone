import styled from "styled-components";

const Container = styled.div`
    grid-row: 2;
    grid-column: 2;
    display: flex;
    flex-wrap: wrap;
    width: calc(100% - 72px);
    margin-left: 72px;
    justify-content: flex-end;
    background-color: #f9f9f9;
    
    .grid{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        margin-top: 56px;
        padding: 20px;
    }
`

export default Container;