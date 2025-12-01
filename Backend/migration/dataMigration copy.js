const migration_data = require('./migrationDatas')
const language_data = require('../language/language')
const { db } = require('../dbConnect')

const insert_product_details = async () => {
    if (!migration_data.products || !migration_data.products.length) return
    let placeholders = ''
    const values = []
    migration_data.products.forEach((x, i) => {
        placeholders += `${i === 0 ? '' : ','}($${i*7 + 1}, $${i*7 + 2}, $${i*7 + 3}, $${i*7 + 4}, $${i*7 + 5}, $${i*7 + 6}, $${i*7 + 7})`
        values.push(...Object.values(x))
    })
    const query = `
        INSERT INTO product_item
        (article_no, title, in_price, price, unit, in_stock, description)
        VALUES ${placeholders}
    `
    try {
        await db.query(query, values)
        console.log('products data updated successfully')
    } catch (err) {
        console.log('Error in updating products data', err)
    }
}

const insert_user_data = async () => {
    if (!migration_data.userData || !migration_data.userData.length) return
    let placeholders = ''
    const values = []
    migration_data.userData.forEach((x, i) => {
        placeholders += `${i === 0 ? '' : ','}($${i*9 + 1}, $${i*9 + 2}, $${i*9 + 3}, $${i*9 + 4}, $${i*9 + 5}, $${i*9 + 6}, $${i*9 + 7}, $${i*9 + 8}, $${i*9 + 9})`
        values.push(...Object.values(x), x.created_at || new Date())
    })
    const query = `
        INSERT INTO user_detail
        (business_name, contact_person, address, postal_number, city, email, phone, password, created_at)
        VALUES ${placeholders}
    `
    try {
        await db.query(query, values)
        console.log('user data updated successfully')
    } catch (err) {
        console.log('Error in updating user data', err)
    }
}

const insert_language_data = async () => {
    if (!language_data || !language_data.length) return
    const numCols = 3
    let placeholders = ''
    const values = []
    language_data.forEach((x, i) => {
        placeholders += `${i === 0 ? '' : ','}($${i*numCols + 1}, $${i*numCols + 2}, $${i*numCols + 3})`
        values.push(x.key_name, x.en, x.sv)
    })
    const query = `
        INSERT INTO language (key_name, en, sv)
        VALUES ${placeholders}
        ON CONFLICT (key_name) DO NOTHING
    `
    try {
        await db.query(query, values)
        console.log('language data updated successfully')
    } catch (err) {
        console.log('Error in updating language data', err)
    }
}

const runMigrations = async () => {
    Promise.all([
    insert_user_data(),
    insert_product_details(),
    insert_language_data()
    ]).then(()=> console.log('data updated successfully'))
}

runMigrations()
