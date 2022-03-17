// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjetcID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database - ', error)
    }

    const db = client.db(databaseName)

    // Update One and Many

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateOne({
    //     _id: new ObjectID("6098039290d2603a315672e3")
    // }, {
    //     $set: {
    //         name: 'Mike'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    // Find One and Find

    // db.collection('users').findOne({ name: 'Jen' }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch - ', error)
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({ age: 31 }).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks)
    // })


    
    // Insert One and Insert Many

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Vikram',
    //     age: 26
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     }, {
    //         name: 'Gunther',
    //         age: 26
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         console.log('Unable to insert many')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'This is task 1',
    //         completed: true
    //     }, {
    //         description: 'This is task 2',
    //         completed: false
    //     }, {
    //         description: 'This is task 3',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         console.log('Unable to insert tasks')
    //     }

    //     console.log(result.ops)
    // })
})