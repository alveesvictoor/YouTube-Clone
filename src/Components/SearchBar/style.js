import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;

    

input{
    padding: 10px;
    border: 1px solid #d2d2d3;
    border-radius: 3px 0 0 3px;
    font-size: 1em;
    width: 100%;

}
.search-icon{
       padding: 5px;
        width: 50px;
        height: 40.5px;
        color:#030202;
        background-color: #f9f8f9;
        border: 1px solid #d2d2d3;
        border-radius: 0 3px 3px 0;
    }
.voice-icon{
    background-color: #f9f8f9;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    padding: 7px;
    margin-left: 10px;
}

`
export default Container;