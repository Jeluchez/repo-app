import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { fetchApi } from '../../helpers/fetchData';
import { RepoItem } from './RepoItem';

export const RepositoriesList = ({setRepoList,repoList}) => {

    const { avatarUrl } = useSelector(state => state.auth);
    console.log(repoList)
    return (
        <div className='repositorieslist-inner'>
            {
                repoList &&
                repoList.map((item)=>(
                    <RepoItem key={item.id} item={item.name} id={item.id} avatar={avatarUrl}/>
                ))
            }
        </div>
    )
}
