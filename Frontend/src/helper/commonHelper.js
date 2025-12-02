import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

export const toaster = (message, type) => {
    toast[type](message)
}
