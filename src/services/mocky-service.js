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

    getNext = async () => {
        return await this.getResource("5e78ff3a2d0000a29318ba2c?mocky-delay=100ms");
    };

    getPrev = async () => {
        return await this.getResource("5e78fee42d0000979518ba28?mocky-delay=100ms");
    };

    getNumbers = async () => {
        return await this.getResource("5e78f9fe2d0000979518b9f8");
    };
}