import axios from "axios"
import { API } from "../EnvConfig"

export const language = async () => {
  try {
    const result = await axios.get(`${API}/user/language`)
    return result.data
  } catch (err) {
    return { status: false, message: 'failed to fetch language', error: err.message }
  }
}

export const login = async (params) => {
  try {
    const result = await axios.post(`${API}/user/login`, params)
    return result.data
  } catch (err) {
    return { status: false, type: 'error', message: 'failed to login', error: err.message }
  }
}

export const get_products = async (params) => {
  try {
    const result = await axios.get(`${API}/user/products?page=${params.page}&limit=${params.limit}`)
    return result.data
  } catch (err) {
    return { status: false, type: 'error', message: 'failed to login', error: err.message }
  }
}

export const create_product = async (params) => {
  try {
    const result = await axios.post(`${API}/user/products`, params)
    return result.data
  } catch (err) {
    return { status: false, type: 'error', message: 'failed to login', error: err.message }
  }
}

export const edit_product = async (params) => {
  try {
    const result = await axios.put(`${API}/user/products/${params.id}`, params)
    return result.data
  } catch (err) {
    return { status: false, type: 'error', message: 'failed to login', error: err.message }
  }
}