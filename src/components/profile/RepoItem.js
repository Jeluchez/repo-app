import React from 'react'

export const RepoItem = ({ item, avatar, id }) => {

    return (
        <div className='repoitem'>
            <div className='wrapper-image'>
                <img src={avatar} alt="Avatar" className='avatar-item' />

            </div>
            <div>{item}</div>
            <div>
                <button type="button" className='mark-favorite'>
                    <i className='mdi mdi-star'></i>
                </button>
            </div>
        </div>
    )
}
