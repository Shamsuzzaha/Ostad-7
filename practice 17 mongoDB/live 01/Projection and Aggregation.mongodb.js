use('todo')

// ----------CRUD--------------

// create one data
/*
db.task.insertOne({
    "name":"remon",
    "age": 27,
    "gender": "M",
    "city": "Rangpur"
})
*/


//  Delete data one
/*
db.task.deleteOne({
    _id: ObjectId('6768bb87d8a539dbe719819a')
})


// Update Data
db.task.updateOne(
    {_id: ObjectId('6768bc6169dc41ec93ff9d7a')},
    {
        $set:
        {
            name: "Remon",
            city: "Kaunia, Rangpur"
        }
    }
)
*/





// --------Projection using Find----------
/*
// find specific data called Projection
db.task.find(
    {},
    {_id:0,
        age:0
    }
)

// greater than 
db.task.find({
     age: {$gt:30}
})
   
// in operator 
db.task.find({
    age: {$in:[25,30]}
})

// logical operator
db.task.find({
    $and:[
        {age:{$eq:25}},
        {city: {$eq:"Rangpur"}}
    ]
})

//  Shorting
db.task.find().sort({
    age:-1 // -1 for descending and 1 for ascending
})

//  data visualization limit
db.task.find().limit(2)

// Select unique data 
db.task.distinct("age")

// total row count
db.task.find().count("total")
*/




// ------------Aggregate-----------
/*
// total count
db.task.aggregate(
    {$count: "total"}
)

// match
db.task.aggregate(
    {$match:{age:{$gt:25}}},
    {$sort: {age:- 1}},
    {$limit: 3}
)

// projection as specific findings
db.task.aggregate([
    {$project:{
    name:1,
    city:1
    
    }}
])

// min, max, avg value
db.task.aggregate([
    {
        $group: {
            _id: null,
            minimumAge: {$min: '$age'},
            maximumAge: {$max: '$age'},
            averageAge: {$avg: '$age'},
        }
    }
])
*/


