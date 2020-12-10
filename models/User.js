const connection = require('../config/db');

class User {
    static getAll() {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT  * FROM users`, function(error, results) {
                if (error) return reject(error);
                return resolve(results);
            });
        })
    }
    static findUserById(id) {
        return new Promise((resolve, reject) => {
            const sql = "SELECT * FROM `users` WHERE `id`=?"
            connection.query(sql, [id], function(error, results) {
                if (error) return reject(error);
                return resolve(results);
            });
        });
    }
    static create(user) {
        return new Promise((resolve, reject) => {
            const sql = "INSERT INTO users SET ?";
            connection.query(sql, user, function(error, results) {
                if (error) reject(error)
                resolve(results)
            });
        });
    }
    static updateUser(User) {
        return new Promise((resolve, reject) => {
            const sql = "UPDATE `users` SET `first_name`=?,`last_name`=?,`address`=?, `age`=? WHERE `id`=?"
            connection.query(sql, [User.first_name, User.last_name, User.address, User.age, User.id], (error, result) => {
                if (error) reject(error)
                resolve(result)
            });
        });
    }
    static deleteUser(id) {
        return new Promise((resolve, reject) => {
            const sql = "DELETE FROM users WHERE id=?"
            connection.query(sql, [id], (error, result) => {
                if (error) reject(error)
                resolve(result)
            });
        });
    }
    static login(username, password) {
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM users WHERE user_name = ? AND password = ?`;
            let row = connection.query(sql, [username, password], (error, result) => {
                if (error) {
                    reject(error)
                }
                resolve(result)
            });
        });
    }

}

module.exports = User;