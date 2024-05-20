// memory

// stack(primitive)  & Heap(non primitive)
//data is copied         data is taken as reference
//no change in original data       change in original data
let myName = "rahul"
let anotherName = myName
anotherName = "anurag"

console.log(myName)
console.log(anotherName)

// here there is no change in the orignal set of data as the data is copied that is 
// my name is given the value rahul and then another name is given my name so the value of my name is given to another name so the copy of value of my name is given to the another name not the orignal vlaue


// objet as heap memory

let user1={
    email:"rahul@gmail.com",
    upi:"xyz"

}

let user2=user1 // as there user2 is assigned the value of user 1 so if there is a change in the user 2 then there is a change in the values of user1 also because they are taking the reference from the same set of values

user2.email = "anurag@gmail.com"

console.log(user1)
console.log(user2)