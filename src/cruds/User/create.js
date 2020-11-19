require('../../connection')

const User = require('../../models/User')

const createUsers = async () => {
    const userone  = new User({
        userName: 'Facundo',
        password: '1234',
        city: 'Rosario'
    })
        await userone.save();

    const usertwo = new User({
        userName: 'Carlos',
        password: '12345',
        city: 'Buenos Aires'
    })
        await usertwo.save();

    const userthird = new User({
        userName: 'Tomas',
        password: '123456',
        city: 'Cordoba'
    })
        await userthird.save();
    
    const userfour = new User({
        userName: 'Pablo',
        password: '124',
        city: 'Rosario'
    })
        await userfour.save();
}

createUsers();