
const userData = [
  {
    business_name: "Alpha Foods",
    contact_person: "John Doe",
    address: "12 Street Road",
    postal_number: "564321",
    city: "Chennai",
    email: "alpha@gmail.com",
    phone: "9876543210",
    password: 123456
  },
  {
    business_name: "Beta Traders",
    contact_person: "Michael",
    address: "45 Market Lane",
    postal_number: "420011",
    city: "Hyderabad",
    email: "beta@gmail.com",
    phone: "9988776655",
    password: 123456
  },
  {
    business_name: "Omega Distributors",
    contact_person: "Priya",
    address: "88 Highway Road",
    postal_number: "660223",
    city: "Bangalore",
    email: "omega@gmail.com",
    phone: "8877665544",
    password: 123456
  },
  {
    business_name: "Crystal Pvt Ltd",
    contact_person: "Rahul",
    address: "7 Tech Park",
    postal_number: "900221",
    city: "Mumbai",
    email: "crystal@gmail.com",
    phone: "7766554433",
    password: 123456
  },
  {
    business_name: "Glory Retail",
    contact_person: "Ananya",
    address: "22 Beach Side",
    postal_number: "301122",
    city: "Goa",
    email: "glory@gmail.com",
    phone: "6655443322",
    password: 123456
  }
]
const products = [
  { article_no: 10001, title: 'Product 1', in_price: 10.00, price: 15.00, unit: 'pcs', in_stock: 50, description: 'Description for Product 1' },
  { article_no: 10002, title: 'Product 2', in_price: 20.50, price: 30.00, unit: 'pcs', in_stock: 40, description: 'Description for Product 2' },
  { article_no: 10003, title: 'Product 3', in_price: 5.75, price: 10.00, unit: 'pcs', in_stock: 100, description: 'Description for Product 3' },
  { article_no: 10004, title: 'Product 4', in_price: 12.00, price: 18.00, unit: 'pcs', in_stock: 60, description: 'Description for Product 4' },
  { article_no: 10005, title: 'Product 5', in_price: 8.50, price: 12.00, unit: 'pcs', in_stock: 80, description: 'Description for Product 5' },
  { article_no: 10006, title: 'Product 6', in_price: 15.00, price: 22.00, unit: 'pcs', in_stock: 35, description: 'Description for Product 6' },
  { article_no: 10007, title: 'Product 7', in_price: 7.25, price: 11.00, unit: 'pcs', in_stock: 90, description: 'Description for Product 7' },
  { article_no: 10008, title: 'Product 8', in_price: 18.00, price: 25.00, unit: 'pcs', in_stock: 20, description: 'Description for Product 8' },
  { article_no: 10009, title: 'Product 9', in_price: 9.50, price: 14.00, unit: 'pcs', in_stock: 70, description: 'Description for Product 9' },
  { article_no: 10010, title: 'Product 10', in_price: 11.00, price: 17.00, unit: 'pcs', in_stock: 55, description: 'Description for Product 10' },
  { article_no: 10011, title: 'Product 11', in_price: 13.50, price: 20.00, unit: 'pcs', in_stock: 45, description: 'Description for Product 11' },
  { article_no: 10012, title: 'Product 12', in_price: 6.75, price: 9.50, unit: 'pcs', in_stock: 95, description: 'Description for Product 12' },
  { article_no: 10013, title: 'Product 13', in_price: 16.00, price: 24.00, unit: 'pcs', in_stock: 25, description: 'Description for Product 13' },
  { article_no: 10014, title: 'Product 14', in_price: 14.50, price: 21.00, unit: 'pcs', in_stock: 30, description: 'Description for Product 14' },
  { article_no: 10015, title: 'Product 15', in_price: 19.00, price: 28.00, unit: 'pcs', in_stock: 15, description: 'Description for Product 15' },
  { article_no: 10016, title: 'Product 16', in_price: 4.50, price: 8.00, unit: 'pcs', in_stock: 120, description: 'Description for Product 16' },
  { article_no: 10017, title: 'Product 17', in_price: 17.00, price: 26.00, unit: 'pcs', in_stock: 18, description: 'Description for Product 17' },
  { article_no: 10018, title: 'Product 18', in_price: 21.00, price: 32.00, unit: 'pcs', in_stock: 12, description: 'Description for Product 18' },
  { article_no: 10019, title: 'Product 19', in_price: 3.25, price: 6.00, unit: 'pcs', in_stock: 150, description: 'Description for Product 19' },
  { article_no: 10020, title: 'Product 20', in_price: 2.50, price: 5.00, unit: 'pcs', in_stock: 200, description: 'Description for Product 20' }
]

module.exports = { userData, products}