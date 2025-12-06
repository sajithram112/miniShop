const { db } = require('../dbConnect')
// create user table
const create_user_table = async () => {
    try {
        await db.query(`
            CREATE TABLE IF NOT EXISTS user_detail (
                id SERIAL PRIMARY KEY,
                business_name VARCHAR(255) NOT NULL,
                contact_person VARCHAR(255) NOT NULL,
                address VARCHAR(255) NOT NULL,
                postal_number VARCHAR(20) NOT NULL,
                city VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                phone VARCHAR(50) NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT NOW()
            )
        `)
        console.log('User table created successfully')
    } catch (Err) {
        console.log('Unable to create user table', Err)
    }
}
const create_service_table = async () => {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS product_item (
        id SERIAL PRIMARY KEY,
        article_no BIGSERIAL UNIQUE NOT NULL,
        title VARCHAR(255) NOT NULL,
        in_price NUMERIC(15,2) NOT NULL,
        price NUMERIC(15,2) NOT NULL,
        unit VARCHAR(100) NOT NULL,
        in_stock INTEGER NOT NULL,
        description TEXT,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `)
    console.log('Product service table created successfully')
  } catch (err) {
    console.log('unable to create service table', err)
  }
}


const create_language_table = async () => {
    try {
        db.query(`
            CREATE TABLE IF NOT EXISTS language (
                id SERIAL PRIMARY KEY,
                key_name VARCHAR(255) UNIQUE NOT NULL,
                en TEXT NOT NULL,
                sv TEXT NOT NULL
            )
        `)
        console.log('language db created successfully')
    } catch (Err) {
        console.log('Unable to  create language table')
    }
}

create_user_table()
create_service_table()
create_language_table()