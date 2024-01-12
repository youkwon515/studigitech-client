import styled from "styled-components";

export const Item = styled.div`
    display : flex;
    width : 100%;
    height : 50px;
    padding : 0 20px 0 0;
    cursor: pointer;
    background : #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    &:hover {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
`;

export const ItemNumber = styled.div`
    display : flex;
    justify-content: center;
    align-items: center;
    width : 5%;
    height : 100%;
    color : #556170;
`;

export const ItemData = styled.div`
    display : flex;
    justify-content: space-between;
    align-items: center;
    width : 95%;
    height : 100%;

    > p {
        color : #556170;
    }
`;