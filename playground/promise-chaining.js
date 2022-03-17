require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('60eb688f29111126b22c657e', { age: 1 }).then((user) => {
//     return User.countDocuments({age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('60eb688f29111126b22c657e', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})

