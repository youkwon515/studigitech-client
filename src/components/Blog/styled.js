import styled from "styled-components";

export const Item = styled.div`
    display : flex;
    justify-content: space-between;
    align-items: center;
    width : 100%;
    height : 50px;
    padding : 0 20px 0 25px;
    cursor: pointer;
    background : #fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

    > p {
        color : #556170;
    }

    &:hover {
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    }
`;