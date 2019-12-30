const fs = require('fs');
let universitiesData = []


fs.readFile('./static/world_universities_and_domains.json', (err, data) => {
    if (err) throw err;
    universitiesData = JSON.parse(data);
});

const getUniversitiesByName = {
    handler: async (request, response) => {
        let { name, index, number } = request.payload, value = []
        if (universitiesData) {
            // const newUni = universitiesData.filter(uData => uData.name.startsWith(name))
            const newUni = universitiesData.filter(uData => uData.name.toLowerCase().includes(name.toLowerCase()) || 
                                                                uData.alias.toLowerCase().includes(name.toLowerCase()))
            value = newUni.slice(index, (index + number))
        }
        return value
    }
}

const getUniversitiesByCountry = {
    handler: async (request, response) => {
        let { country, index, number } = request.payload, value = []
        if (universitiesData) {
            const newUni = universitiesData.filter(uData => uData.country.toLowerCase().startsWith(country.toLowerCase()))
            value = newUni.slice(index, (index + number))
        }
        return value
    }
}

const getHomePage = {
    handler: async (request, response) => {
        return 'Welcome to World Universities API'
    }
}


routes = [
    {
        method: 'POST',
        path: '/getUniversitiesByName',
        config: getUniversitiesByName
    },
    {
        method: 'POST',
        path: '/getUniversitiesByCountry',
        config: getUniversitiesByCountry
    },
    {
        method: 'GET',
        path: '/',
        config: getHomePage
    }
]
module.exports = routes