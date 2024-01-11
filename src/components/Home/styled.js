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
    gap : 10px;
    width : 1000px;
    height : 100%;
    margin : 0 auto;
    padding-top : 30px;
`;

export const C_Btn = styled.button`
    width : 100px;
    height : 40px;
    border-radius: 100px;
    background : #fff;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    position: fixed;
    z-index : 999;
    left : 35px;
    bottom : 35px;
    border : 0;
    cursor: pointer;
`;