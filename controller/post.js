const db = require('../db')

class PostController {
    async create(req, res) {
        const {title, content, userid} = req.body

        const post = await db.query(`insert into post (title, content, user_id) values ($1, $2, $3) returning *`, [title, content, userid])

        res.json(post.rows[0])
    }
    async get(req, res) {
        const id = req.query.id

        const posts = await db.query(`select * from post where user_id = $1`, [id])

        res.json(posts.rows)
    }
}

module.exports = new PostController