const db = require('../db')

class UserController {
    async create(req, res) {
        const {fname, lname} = req.body

        const token = new Date().getTime()

        if(!fname || !lname) {
            return res.json('data isnt exist')
        }
        const newUser = await db.query(`INSERT INTO person (fname, lname, token) values ($1, $2, $3) RETURNING *`, [fname, lname, token])

        console.log(newUser.rows[0])
        res.json('zaebok')
    }
    async get(req, res) {
        const id = req.params.id
        const user = await db.query(`select * from person where id = $1`, [id])

        res.json(user.rows[0])
    }
    async update(req, res) {
        const {id, fname, lname} = req.body

        const user = await db.query(`UPDATE person set fname = $1, lname = $2 where id = $3 RETURNING *`, [fname, lname, id])

        res.json(user.rows[0]) 
    }
    async delete(req, res) {
        const id = req.params.id
        const user = await db.query(`delete from person where id = $1`, [id])

        res.json(user.rows[0])
    }

}

module.exports = new UserController