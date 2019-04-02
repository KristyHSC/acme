const conn = require('./conn')
const User = require('./User')

const syncAndSeed = () => {
    return conn.sync({force:true})
        .then(()=> {
            User.create({
                name: 'Kristy',
                bio: 'MHS',
                rank: 1
            })
        })
        .then(()=> {
            User.create({
                name: 'Ruby',
                bio: 'Linden HAll',
                rank: 2
            })
        })
}

module.exports = {
    conn,
    User,
    syncAndSeed
}