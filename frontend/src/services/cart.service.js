import api from "./api"; 
const API_URL = "/cart";

const createCart = async (data) => {
    return await api.post(API_URL, data); 
};

const getAllCartItems = async () => {
    return await api.get(API_URL);
};

const getCartItemByEmail = async (email) => {
    return await api.get(`${API_URL}/${email}`);
};

const updateCartItem = async (id, data) => {  
    return await api.put(`${API_URL}/${id}`, data);
};

const removeAllItems = async () => {
    return await api.delete(`${API_URL}/${email}`);  
};

const removeItemById = async (id) => {  
    return await api.delete(`${API_URL}/${id}`);
};

const CartService = {
    createCart,
    getAllCartItems,
    getCartItemByEmail,
    updateCartItem,
    removeAllItems,
    removeItemById,
};

export default CartService;