
const { db } = require('../dbConnect')

module.exports.login = async (req, res) => {
    const { email, password } = req.body
    try {
        const result = await db.query(
            `SELECT * FROM user_detail WHERE email=$1 AND password=$2`,
            [email, password]
        )
        if (result.rows.length > 0) {
            return res.json({ status: true, message: 'user logged in successfully' })
        } else {
            return res.json({ status: false, type: 'user_not_found', message: 'user not found' })
        }
    } catch (err) {
        return res.json({ status: false, message: 'Something went wrong', error: err.message })
    }
}

module.exports.language = async (req, res) => {
    try {
        const result = await db.query(`SELECT * FROM language`)
        return res.json({ status: true, data: result.rows })
    } catch (err) {
        return res.json({ status: false, message: 'Something went wrong', error: err.message })
    }
}

module.exports.get_product_service = async (req, res) => {
    try {
        const page = Number(req?.query?.page);
        const limit = Number(req?.query?.limit ?? 10)
        const offset = (page - 1) * limit
        const query = `
            SELECT * 
            FROM product_item
            ORDER BY created_at DESC, id DESC
            LIMIT $1 OFFSET $2
        `
        const result = await db.query(query, [limit, offset]);
        return res.status(200).json({
            status: true,
            total: result.rowCount,
            data: result.rows,
            message: 'products list fetched successfully'
        });
    } catch (err) {
        console.error('Unable to fetch products', err);
        return res.json({
            status: false,
            message: 'Failed to fetch products'
        });
    }
};
