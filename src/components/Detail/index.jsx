import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import MarkdownPreview from '@uiw/react-markdown-preview';
import * as S from './styled';
import { pullBlog, pullBlogDetail, pushBlog, UpdateBlog } from '../../utils/blog';
import { pullLogin } from '../../utils/login';
import { pullIdx } from '../../utils/idx';

function Detail() {
    const movePage = useNavigate();
    const data = pullIdx() ? pullBlogDetail(pullIdx()) : null;
    const [source, setSource] = useState(data ? data.content : '# 제목');
    const handleChange = (e) => {
        setSource(e.target.value);
    };
    
    const handleSubmit = () => {
        let title = source.split('\n')[0];
        if (title.includes('#')) {
            title = title.split('#').join('');
        }
        const content = source;
        const user = pullLogin();
        pushBlog(title, content, user);
        // clearIdx();
        movePage('/');
    }

    const handleUpdate = () => {
        const blogList = pullBlog();
        console.log()
        if (pullIdx() >= 0 && pullIdx() < blogList.length) {
            const uptitle = source.split('\n')[0];
            const upcontent = source;
            const upuser = pullLogin();
            blogList[pullIdx()] = {title : uptitle, content : upcontent, user : upuser}
            UpdateBlog(blogList);
        } else {
            console.log("update error");
        }
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
                {data ? data.user === pullLogin() && <S.MarkdownCode onChange={handleChange} value={source}></S.MarkdownCode> : true && <S.MarkdownCode onChange={handleChange} value={source}></S.MarkdownCode>}
            </S.Contents>
            {data ? data.user === pullLogin() && <S.C_Btn onClick={handleUpdate}>수정 완료</S.C_Btn> : true && <S.C_Btn onClick={handleSubmit}>작성 완료</S.C_Btn>}
        </S.Main>
        </>
    );
}

export default Detail;