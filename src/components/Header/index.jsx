import { Link } from 'react-router-dom';
import * as S from './styled';
import logo from '../../assets/logo.png'
import profile from '../../assets/profile.png'
import { pullLogin } from '../../utils/login';
import { clearIdx } from '../../utils/idx';

function Header() {

    const handleClear = () => {
        clearIdx();
    }

    return (
        <S.HeaderDiv>
            <S.ContentsDiv>
                <Link to="/" onClick={handleClear}>
                    <S.LogoBox>
                        <img src={logo} alt="" />
                    </S.LogoBox>
                </Link>
                <Link to="/login">
                    {pullLogin() ? <S.UserBox>{pullLogin()}</S.UserBox> : <S.LoginBox><img src={profile} alt="logIn" /></S.LoginBox>}
                </Link>
            </S.ContentsDiv>
        </S.HeaderDiv>
    );
}

export default Header;