import styled from "styled-components";

export const Main = styled.section`
    width : 100%;
    height : calc(100vh - 80px);
    position: relative;
    background : #D6DBDF;
`;

export const Contents = styled.div`
    display : flex;
    flex-direction: column;
    align-items: center;
    gap : 25px;
    width : 1000px;
    height : 100%;
    margin : 0 auto;
    padding-top : 100px;
`;

export const Title = styled.h2`
    font-family: "Roboto", sans-serif;
`;

export const NameInp = styled.input`
    width : 300px;
    height : 30px;
    border : 0;
    outline : 0;
    border-radius: 3px;
`;

export const PWInp = styled.input`
    width : 300px;
    height : 30px;
    border : 0;
    outline : 0;
    border-radius: 3px;
    padding-left : 10px;
`;

export const Submit = styled.button`
    width : 70px;
    height : 30px;
    border : 0;
    outline : 0;
    border-radius: 3px;
    cursor : pointer;
    background : #02457A;
    color : #fff;
`;