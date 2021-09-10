import axios from 'axios'

const client = axios.create({
  baseURL: 'https://localhost:44333/Employees',
  json: true
})

export default {
    async execute (method, resource, data) {
        return client({
            method,
            url: resource,
            data
        }).then(response => {
            return response;
        })
    },
    getDeliveryManagers () {
        return this.execute('get', '/managers')
    },
    getSeniorDevelopers () {
        return this.execute('get', '/seniors')
    },
    getJuniorDevelopers () {
        return this.execute('get', '/juniors')
    },
}
