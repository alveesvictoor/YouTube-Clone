import styled from "styled-components";

const Container = styled.div`
    grid-row: 2;
    grid-column: 2;
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    
    .grid{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        margin-top: 56px;
    }
`

export default Container;