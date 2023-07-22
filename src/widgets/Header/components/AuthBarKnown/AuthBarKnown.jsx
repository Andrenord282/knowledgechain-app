//-----modules-----//
import classNames from 'classnames';

//-----hooks-----//
import { useState, useRef } from 'react';
import { useEventOutside } from 'hooks/useEventOutside';

//-----redux-----//
import { useSelector } from 'react-redux';

//-----selectors-----//
import { selectUserName, selectUserImgUrl } from 'store/userSlice';

//-----components-----//
import * as Icon from 'components/Icon';
import Button from "components/Button";
import AuthBarKnownList from '../AuthBarKnownList';
import ava from 'assets/img/ava.jpg';

//-----style-----//
import './AuthBarKnown.scss';

const AuthBarKnown = (props) => {
    const { classes } = props;
    const authBarKnowRef = useRef(null);
    const userName = useSelector(selectUserName);
    const userImg = useSelector(selectUserImgUrl);
    const [toggleAuthBarKnownList, setAuthBarKnownList] = useState(false);

    useEventOutside(authBarKnowRef, () => {
        setAuthBarKnownList(false);
    });

    const handleToggleAuthBarKnownList = () => {
        setAuthBarKnownList((prevToggleList) => !prevToggleList);
    };

    const classAuthBarActive = classNames({
        active: toggleAuthBarKnownList,
        '': !toggleAuthBarKnownList,
    });

    return (
        <div className={classNames(classes, 'auth-bar-known')} >
            <div className="auth-bar-known__user-item" ref={authBarKnowRef} >
                <img src={ava} alt="Ваша фотография" className="auth-bar-known__user-img" />
                <Button classes='auth-bar-known__list-btn' handleClick={handleToggleAuthBarKnownList}>
                    <span className="btn-text">{userName}</span>
                    <Icon.Triangle className={`btn-icon  ${classAuthBarActive}`} />
                </Button>
            </div>
            {toggleAuthBarKnownList && <AuthBarKnownList
                classes="auth-bar-known__list"
                setAuthBarKnownList={setAuthBarKnownList}
            />}
        </div>
    );
};

export default AuthBarKnown;