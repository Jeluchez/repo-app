const baseUrl = 'http://localhost:5000/api';

export const fetchData = async (endPoint = '', data, method = 'GET') => {
    const url = `${baseUrl}/${endPoint}`;
    try {
        if (method === 'GET') {
            const res = await fetch(url);
            return await res.json();
        } else {
           
            const res = await fetch(url, {
                method,
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if(!res.ok){
                return { ok: false, error: (await res.json())['error']}
            }
            return { ok: true, data: await res.json()}
        }

    } catch (error) {
        return { ok: false, error }
    }

}