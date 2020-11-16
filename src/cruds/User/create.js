require('../../connection')

const User = require('../../models/User')

const createUsers = async () => {
    const userone  = new User({
        username: 'Facundo',
        password: '1234'
    })
        await userone.save();

    const usertwo = new User({
        username: 'Carlos',
        password: '12345'
    })
        await usertwo.save();
   //console.log(userone, usertwo);
}

createUsers();