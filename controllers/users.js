import { v4 as uuidv4 } from 'uuid';

//mock dataBase
let users = [
]

//for random user IDs, I can import/use the uuid package it creates new ids just like so: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
export const createUser = (req, res) => {
    const user = req.body;
    const userId = uuidv4();
    const userWithId = { ...user, id: userId }
    users.push(userWithId);
    //... = spreads all the values inside the user object, and then adds a new value on top of it, which in this case is userId.
    console.log(`New user has been added: ${user.firstName}`);
    console.log(users);
    res.send(`${user.firstName} has been added to the dataBase`);
}

export const getUsers = (req, res) => {
    res.send(users);
}

export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    //.filter creates a new array with the elements that checked the test
    users = users.filter((user) => user.id != id);
    //this means that, if the users ID is different from the id, it's added to the array
    //if not, it's not added to it
    res.send(`${id} has been removed from the DataBase`);
}

export const patchUser = (req,res) => {
    const {id} = req.params;
    const {firstName, lastName, age} = req.body;
    const user = users.find((user) => user.id == id);
    //.find returns the value of the first element of the array that checks the test
    
    //.params is what is in the URL and body is what is being sent by the user 
    if (firstName) {
        user.firstName = firstName;
    }
    if (lastName) {
        user.lastName = lastName;
    }
    if (age) {
        user.age = age;
    }
    res.send(`User with the ID: ${id} has been updated`);
}