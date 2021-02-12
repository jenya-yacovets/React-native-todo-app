import CONFIG from '../config';

export default class ApiServises {

    static async request(url, params, method) {
        if (!method) {
            method = 'GET'
        }

        let data = {
            method,
            headers: {
                'Content-Type': 'application/json'
            }
        }

        if (params) {
            data.body = JSON.stringify(params)
        }

        const res = await fetch(`${CONFIG.API_PATH}${url}`, data)

        return await res.json()
    }

    static async get() {
        try {
            return await this.request('/todos.json')
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    static async update({ id, title }) {
        try {
            return await this.request(`/todos/${id}.json`, { title }, 'PATCH')
        } catch (error) {
            console.error(error)
            throw error
        }
    }

    static async delete({ id }) {
        try {
            return await this.request(`/todos/${id}.json`, null, 'DELETE')
        } catch (error) {
            console.error(error)
            throw error
        }
    }
}