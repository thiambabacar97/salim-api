const router = require('express').Router();
const { create, users, deleteUser, updateUser, findUserById } = require('../controller/UserController');



router.get('/users', users);
router.post('/users', create);
router.get('/users/:id', findUserById);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser);

module.exports = router;