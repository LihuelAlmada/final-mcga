require('../../connection');
const User = require('../../models/User');

const someFunction = async () => {
    const user = await User.findOne({firstName:'Facundo'});
    user.password = 'securepass';
    user.save();
}

async function updateUsers() {
    const user = await User.update({firstName:'Carlos'},{
        password: 'securepassforcarl'
    })
    console.log(user)
}   

someFunction();