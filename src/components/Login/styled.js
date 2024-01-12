import styled from "styled-components";

export const Main = styled.section`
  width: 100%;
  height: calc(100vh - 80px);
  position: relative;
  background: #D6DBDF;
`;

export const Contents = styled.div`
  width: 300px;
  margin: 0 auto;
  height: 100%;
  padding-top: 100px;
  text-align: center;
`;

export const Title = styled.h2`
  font-family: "Roboto", sans-serif;
  text-align: center;
`;

export const InputBox = styled.div`
  width: 300px;
  position: relative;
  margin: 10px 0;
  user-select: none;
  > input {
    background: transparent;
    width: 100%;
    padding: 20px 0 5px 0;
    border: none;
    border-bottom: 1px solid #aaa;
    font-size: 15pt;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  &::placeholder {
    color: transparent;
  }
  &:placeholder-shown + label {
    color: #aaa;
    font-size: 12pt;
    top: 19px;
    transition: all 0.2s ease;
  }
  &:focus + label,
  label {
    color: #333;
    font-size: 9pt;
    position: absolute;
    top: 0;
    left: 0;
  }
  &:focus,
  &:not(:placeholder-shown) {
    border-bottom: 1px solid #333;
  }
`;

export const Label = styled.label`
  color: #333;
  font-size: 9pt;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
`

export const Submit = styled.button`
  padding: 8px 25px;
  margin-top: 10px;
  border: none;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  background: #02457a;
  transition: 0.2s;
  color: #fff;
  &:hover {
    background: #396281;
  }

`;