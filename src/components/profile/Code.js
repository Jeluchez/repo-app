import React, { useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { startloginGithub } from '../../actions/authAction';
import { fetchBasic } from '../../helpers/fetchData';

export const Code = () => {

    let {code}= useParams();
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        fetchBasic('https://api.github.com/user',code).then((data) => {
            
            if(data){
                localStorage.setItem('code', code);
                data.code=code;
                console.log(data);
                dispatch(startloginGithub(data))
            }
        })      
    }, [code,dispatch])
    return (
        <div>
        </div>
    )
}
