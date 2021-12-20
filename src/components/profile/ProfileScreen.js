import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { fetchApi } from '../../helpers/fetchData';
import { AccountMenu } from './AccountMenu';
import { RepositoriesList } from './RepositoriesList';

export const ProfileScreen = () => {
    const { login, reposUrl } = useSelector(state => state.auth);
    const [repoList, setRepoList] = useState()
    const [repoListFounded, setRepoListFounded] = useState()
    const accountMenuRef = useRef()
    const [search, setSearch] = useState('')

    const handleVisibilityAccountMenu = () => {
        accountMenuRef.current.classList.toggle('d-none');
        console.log(accountMenuRef)
    }

    useEffect(() => {
        fetchApi(reposUrl).then((repos) => {
            console.log(repos);
            setRepoList(repos)
            setRepoListFounded(repos)
        })
    }, [reposUrl])

    const handleInputChange = (e) => {
        const q = e.target.value
        setSearch(q)
        const repos = [...repoList].filter(repo => repo.name.toString().toLocaleLowerCase('es').includes(q));
        setRepoListFounded(repos)
    }
    return (
        <div className='dashboard__inner'>
            <nav className="dashboard__nav">
                {/* <span><i className="fa fa-arrow-left"></i></span> */}
                <div className="d-flex justify-content-end p-2">
                    <div className='favorite'>
                        <i className='mdi mdi-star'></i>
                    </div>
                    <div className="dashboard__account ml-2">
                        <button className="btnAccount" onClick={handleVisibilityAccountMenu}>
                            {login}
                        </button>

                        <AccountMenu accountMenuRef={accountMenuRef} />

                    </div>
                </div>
            </nav>

            <div className='repositories p-3'>
                <p>Repositories</p>
                <div className="form-group form-group-password">
                    <input type="text" className='form-control' placeholder='Search repositories' onChange={handleInputChange} value={search} />
                </div>
                <div className='repositories-list'>
                    <RepositoriesList repoList={repoListFounded} setRepoList={setRepoListFounded} />
                </div>
            </div>
        </div>
    )
}
