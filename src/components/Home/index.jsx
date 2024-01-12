import Header from "../Header";
import Blog from "../Blog";
import { useNavigate } from "react-router-dom";
import * as S from './styled';
import { pullLogin } from "../../utils/login";
import { pullBlog } from "../../utils/blog";
import { clearIdx } from "../../utils/idx";

function Home() {
    const movePage = useNavigate();
    const handleDetail = () => {
        if (pullLogin()) {
            clearIdx();
            movePage('/blog/'+pullLogin());
        } else {
            alert('로그인 하십시오');
            movePage('/login/');
        }
    }

    return (
        <>
        <Header />
        <S.Main>
            <S.Contents>
                {pullBlog() ? pullBlog().map((value, idx) => {
                    return <Blog key={idx} idx={idx} title={value.title} user={value.user}/>
                }) : ''}
                
            </S.Contents>
            <S.C_Btn onClick={handleDetail}>글쓰기</S.C_Btn>
        </S.Main>
        </>
    );
}

export default Home;