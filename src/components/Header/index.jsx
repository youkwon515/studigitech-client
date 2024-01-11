import { Link } from 'react-router-dom';
import * as S from './styled';
import logo from '../../assets/logo.png'
import { pullLogin } from '../../utils/login';
import { clearIdx } from '../../utils/idx';

function Header() {
    return (
        <S.HeaderDiv>
            <S.ContentsDiv>
                <Link to="/" onClick={clearIdx()}>
                    <S.LogoBox>
                        <img src={logo} alt="" />
                    </S.LogoBox>
                </Link>
                <Link to="/login">
                    {pullLogin() ? <S.UserBox>{pullLogin()}</S.UserBox> : <S.LoginBox></S.LoginBox>}
                </Link>
            </S.ContentsDiv>
        </S.HeaderDiv>
    );
}

export default Header;