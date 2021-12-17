import React from 'react'
import { Link } from 'react-router-dom'

export const Menu = () => {

    return (
        <nav className='menu__container'>
            <Link to="/ticket">
                <div className='menu__item menu__item-active ticket '>
                    <span>
                        T
                    </span>
                </div>
            </Link>
            <Link to="/client">
                <div className='menu__item client'>
                    <span>
                        C
                    </span>
                </div>
            </Link>
            <Link to="/places">
                <div className='menu__item place'>
                    <span>
                        D
                    </span>
                </div>
            </Link>

        </nav>
    )
}
