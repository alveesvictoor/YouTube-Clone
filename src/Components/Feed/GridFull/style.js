import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-row: 1;
    max-width: 25%;
    padding: 6px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
.thumbnail{
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    }
.thumbnail img{
    width: 100%;
 
}
.video-time{
    background-color: #1c1307;
    color: #fff;
    font-size: 0.8em;
    padding: 4px;
    border-radius: 2px;
    width: fit-content;
    height: fit-content;
    position: absolute;
    margin: 5px;

}
#meta{
    display: grid;
    grid-template-columns: 1fr 5fr;
    
}
.infos{
    align-items: flex-start;
    justify-content: center;
    font-size: 12px;
    color: #606060;
    grid-column: 2;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

}

.video-tittle{
    font-family: "Roboto","Arial",sans-serif;
    font-size: 1.0rem;
    line-height: 2rem;
    font-weight: 500;
    max-height: 4rem;
    overflow: hidden;
    display: block;
    display: box;
    display: -webkit-box;
    text-overflow: ellipsis;
    white-space: normal;
    color: #030303;
   
}
.channel-avatar{
    width: 36px;
    border-radius: 100%;
    margin: 12px 12px 0 0;
    grid-column: 1;
    grid-row: 1;
}


`

export default Container;