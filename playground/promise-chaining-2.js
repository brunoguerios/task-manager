require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('60eb6b77eb56aa2716c5d168').then((task) => {
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const deleteTaskAndCount = async (id) => {
    const deletedTask = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('60eb6baaeb56aa2716c5d16b').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})

