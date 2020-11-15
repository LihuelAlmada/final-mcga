require('../connection')

const User = require('../models/User')

const createUsers = async () => {
    const userone  = new User({
        username: 'facundo',
        password: '1234'
    })
        await userone.save();

    const usertwo = new User({
        username: 'carlos',
        password: '12345'
    })
        await usertwo.save();
   //console.log(userone, usertwo);
}

createUsers();