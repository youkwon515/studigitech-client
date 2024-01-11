import { useNavigate } from "react-router-dom";
import { pushIdx } from "../../utils/idx";
import * as S from './styled';
function Blog({title, user, idx}) {
    const movePage = useNavigate();
    const handleDetail = () => {
        pushIdx(idx);
        movePage('/blog/'+user);
    }

    return (
        <S.Item onClick={handleDetail}>
            <p>{title}</p>
            <p>{user}</p>
        </S.Item>
    );
}

export default Blog;