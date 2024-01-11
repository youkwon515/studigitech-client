import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import MarkdownPreview from '@uiw/react-markdown-preview';
import * as S from './styled';
import { pullBlogDetail, pushBlog } from '../../utils/blog';
import { pullLogin } from '../../utils/login';
import { clearIdx, pullIdx } from '../../utils/idx';

function Detail() {
    const movePage = useNavigate();
    const data = pullIdx() ? pullBlogDetail(pullIdx()) : null;
    const [source, setSource] = useState(data ? data.content : '# 제목');

    const handleChange = (e) => {
        setSource(e.target.value);
    };

    const handleSubmit = () => {
        const title = source.split('\n')[0];
        const content = source;
        const user = pullLogin();
        pushBlog(title, content, user);
        clearIdx();
        movePage('/');
    }
    
    return (
        <>
        <Header />
        <S.Main>
            <S.Contents>
                <S.MarkdownPreview>
                    <MarkdownPreview source={source} />
                </S.MarkdownPreview>
                {data ? data.user === pullLogin() : true && <S.MarkdownCode onChange={handleChange} value={source}></S.MarkdownCode>}
            </S.Contents>
            {data ? data.user === pullLogin() : true && <S.C_Btn onClick={handleSubmit}>작성 완료</S.C_Btn>}
        </S.Main>
        </>
    );
}

export default Detail;