const baseUrl = 'http://localhost:5000/api/v1';

export const fetchData = async (endpoint, data='', method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;
    console.log(data);
    try {
        if (method === 'GET') {
            const resp = await fetch(url);
            return await resp.json();
        } else {
            const resp = await fetch(url, {
                method,
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            return await resp.json();
        }
    } catch (error) {
        throw new Error(error);
    }

}

export const fetchBasic = async (url, code) => {
    try {
        const resp = await fetch(url, {
            headers: {
                Authorization: 'token ' + code
            }
        });
        return await resp.json();
    } catch (error) {
        throw new Error(error);
    }
}

export const fetchApi = async (url) => {
    try {
        const resp = await fetch(url, {
            headers: {
                'Content-type': 'application/json'
            }
        });
        return await resp.json();
    } catch (error) {
        throw new Error(error);
    }
}
export const fetchWithToken = async (endpoint, data, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`;
    const token = localStorage.getItem('token') || '';

    if (method === 'GET') {
        const resp = await fetch(url, {
            headers: {
                'x-token': token
            }
        });
        return await resp.json();
    } else {
        const resp = await fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify(data)
        })

        return await resp.json();
    }

}