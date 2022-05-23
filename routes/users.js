import express from "express";


import { createUser, getUsers, getUser, deleteUser, patchUser } from "../controllers/users.js";

const router = express.Router();

//all routes bellow are starting with /users

//get all users - Read
router.get('/', getUsers);

//users with id route
// when i use the ":" before the id, it means I can write anything after the users/ url, like, "http://localhost:5000/users/sfd", it will still fall into the id route now, to get the user's id, it's in the req.params
//get for a single user - Read
router.get("/:id", getUser)

//delete users - Delete
router.delete('/:id', deleteUser)

//post - Create
router.post("/", createUser);

//patch - update
router.patch('/:id', patchUser)

export default router;