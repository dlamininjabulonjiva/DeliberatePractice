import axios from 'axios'

const client = axios.create({
  baseURL: 'https://run.mocky.io/v3',
  json: true
})

export default {
    async execute (method, resource, data) {
        return client({
            method,
            url: resource,
            data
        }).then(req => {
            return req.data
        })
    },
    getDeliveryManagers () {
        return this.execute('get', '/f94abcce-4a39-4217-bd60-3c2ac457cdda')
    },
    getSeniorDevelopers () {
        return this.execute('get', '/a89f97f2-ad1a-4e8b-b00d-715518d056d3')
    },
    getJuniorDevelopers () {
        return this.execute('get', '/f56e988b-4e02-41ed-a067-c1dbf4876480')
    },
}
