import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import * as S from './styled';
import Header from "../Header";

import { Logout, pullLogin, pushLogin } from '../../utils/login';

function Login() {
    const movePage = useNavigate();
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleLogin = () => {
        if (name) {
            pushLogin(name);
            movePage('/');
        } else {
            alert('정보를 작성해주세요!');
        }
    }

    const handleLogout = () => {
        Logout();
        window.location.reload();
    }

    return (
        <>
        <Header />
        <S.Main>
            <S.Contents>
                {
                !pullLogin() ? 
                <>
                <S.Title>로그인</S.Title>
                <S.InputBox>
                    <S.Input
                    onChange={handleChange}
                    value={name}
                    placeholder="아이디"
                    ></S.Input>
                    <S.Label htmlFor="username">아이디</S.Label>
                </S.InputBox>
                <S.InputBox>
                    <S.Input type="password" placeholder="비밀번호"></S.Input>
                    <S.Label htmlFor="password">비밀번호</S.Label>
                </S.InputBox>
                <S.Submit onClick={handleLogin}>로그인</S.Submit>
                </> : <S.Submit onClick={handleLogout}>로그아웃</S.Submit>
                }
                
            </S.Contents>
        </S.Main>
        </>
    );
}

export default Login;