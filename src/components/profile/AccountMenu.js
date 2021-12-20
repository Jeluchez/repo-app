import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logout } from '../../actions/authAction';
// import { StateItem, StateList } from './StateList'
export const AccountMenu = ({ accountMenuRef }) => {

    const { avatarUrl,name } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const stateListRef = useRef()

    const handleVisibilityStateList = () => {
        stateListRef.current.classList.toggle('d-none');
    }

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div ref={accountMenuRef} className="d-none accountMenu__container">
            <div className="account__profile d-flex">
                <img src={avatarUrl} alt="This is perfil" className="accountMenu__profileImage" />
                <div className="accountMenu__information">
                    <span className="name">{name}</span>
                    {/* <span className="email">jeluchez@gmail.com</span> */}

                    <div className="d-flex account__state">
                        <div onClick={handleVisibilityStateList} className="d-flex account__stateItemWrapper">
                            {/* <StateItem item={{ label: 'Disponible', class: 'online' }} /> */}
                            <span className="ml-2"><i className="fas fa-angle-down"></i></span>
                        </div>

                        {/* <StateList stateListRef={stateListRef} /> */}
                    </div>
                </div>
            </div>
            <div className='SignOut__wrapper'>
                <i className="fas fa-sign-out-alt"></i>
                <button type='button' onClick={handleLogout}>Sign Out</button>
            </div>
        </div>
    )
}
