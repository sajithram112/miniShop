
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

module.exports.add_product_service = async (req, res) => {
  try {
    const { title, in_price, price, unit, in_stock, description } = req.body

    if (!title || !in_price || !price || !unit || !in_stock) {
      return res.json({
        status: false,
        message: 'Required fields are missing'
      })
    }

    const query = `
      INSERT INTO product_item (
        title, in_price, price, unit, in_stock, description
      )
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `

    const result = await db.query(query, [
      title, in_price, price, unit, in_stock, description
    ])

    return res.json({
      status: true,
      message: 'product added successfully',
      data: result.rows[0]
    })
  } catch (err) {
    console.log('Unable to add product', err)

    return res.json({
      status: false,
      message: 'Failed to add product'
    })
  }
}

module.exports.edit_product_service = async (req, res) => {
  try {
    const { id } = req.params
    const { field, value } = req.body
    const allowedFields = ['title', 'in_price', 'price', 'unit', 'in_stock', 'description'];
    if (!field || !allowedFields.includes(field)) {
      return res.json({
        status: false,
        message: 'Invalid field'
      })
    }

    const query = `
      UPDATE product_item
      SET ${field} = $1
      WHERE id = $2
      RETURNING *
    `;

    const result = await db.query(query, [value, id])
    if (result.rowCount === 0) {
      return res.json({
        status: false,
        message: 'Product not found'
      })
    }
    return res.json({
      status: true,
      message: 'Updated successfully',
    })

  } catch (err) {
    console.log('Update failed:', err)
    return res.json({
      status: false,
      message: 'Something went wrong'
    });
  }
};