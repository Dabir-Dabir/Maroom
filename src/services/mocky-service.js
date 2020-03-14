export default class MockyService {

    _apiBase = 'https://api.myjson.com/';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`, {method: 'PUT'});

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    getMenuItems = async () => {
        const res = await this.getResource("");
        return res.results;
    };
}