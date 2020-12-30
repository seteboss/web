export default {
    id: null,
    name: null,
    secondName: null,
    email: null,
    accessToken: null,
    isAuth()  {
        this.load()
        return this.accessToken !== null
    },
    login(data) {
        localStorage.setItem('user', JSON.stringify(data))
        console.log(localStorage.getItem('user'))
        this.init(data)
    },
    logout() {
        localStorage.removeItem('user')
        this.id = null
        this.name = null
        this.secondName = null
        this.email = null
        this.accessToken = null
    },
    load() {
        let data = localStorage.getItem('user')
        if (data !== null && data !== '') {
            data = JSON.parse(data)
            this.init(data)
        }
    },
    init(data) {
        this.id = data.id
        this.name = data.name
        this.secondName = data.secondName
        this.email = data.email
        this.accessToken = data.accessToken
    }
}