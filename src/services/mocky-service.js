export default class MockyService {

    _apiBase = 'http://www.mocky.io/v2/';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`, {method: 'PUT'});

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json();
    };

    getMenuItems = async () => {
        const res = await this.getResource("5e6c2d2a2d000089008e9d26");
        return res.menuItems;
    };
}