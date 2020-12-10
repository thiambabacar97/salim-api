const { getAll, deleteUser, updateUser, findUserById, create } = require('../models/User');
class UserController {
    static create(req, res) {
        const user = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            address: req.body.address,
            age: req.body.age,
        }
        create(user)
            .then(result => {
                return res.status(401).json({
                    result: {
                        success: true,
                        data: result,
                        message: 'data created successfuly'
                    }
                });
            })
            .catch(error => {
                return res.status(500).json({
                    error: {
                        success: false,
                        message: "Internal servral",
                        error: error
                    }
                });
            });
    }
    static users(req, res) {
        getAll()
            .then(response => {
                res.status(200).json({
                    result: {
                        succes: true,
                        data: response,
                        message: "donne recuperer avec success",
                    }
                });
            })
            .catch(error => {
                return res.status(500).json({
                    error: {
                        success: false,
                        message: error
                    }
                });
            });
    }
    static deleteUser(req, res) {
        const id = req.params.id
        deleteUser(id)
            .then(result => {
                if (!result.affectedRows) {
                    return res.status(401).json({
                        error: {
                            success: false,
                            message: 'row not found'
                        }
                    });
                }
                return res.status(200).json({
                    result: {
                        success: true,
                        message: "Data deleted successfullly"
                    }
                });
            })
            .catch(error => {
                res.status(500).json({
                    error: {
                        success: false,
                        message: 'Internal serve error',
                        error: error
                    }
                });
            });
    }
    static updateUser(req, res) {
        const user = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            address: req.body.address,
            age: req.body.age,
            id: req.params.id
        }
        updateUser(user)
            .then(result => {
                console.log(result.changedRows)
                if (!result.changedRows) {
                    return res.status(401).json({
                        error: {
                            success: false,
                            message: 'row not not updated'
                        }
                    });
                }
                return res.status(200).json({
                    result: {
                        success: true,
                        message: "Data was updated successfullly"
                    }
                });
            })
            .catch(error => {
                res.status(500).json({
                    error: {
                        success: false,
                        message: 'Internal serve error',
                        error: error
                    }
                });
            });
    }
    static findUserById(req, res) {
        const id = req.params.id;
        findUserById(id)
            .then(result => {
                return res.status(200).json({
                    result: {
                        success: true,
                        data: result
                    }
                });
            })
            .catch(error => {
                res.status(500).json({
                    error: {
                        success: false,
                        message: 'Internal serve error',
                        error: error
                    }
                });
            });
    }

}
module.exports = UserController;