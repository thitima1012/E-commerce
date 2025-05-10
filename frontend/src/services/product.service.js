import api from "./api";
const API_URL = "/product";

const getAllProducts = async () => {
  //http://localhost:5173/product.json
  return await api.get(`${API_URL}`);
};

const createProduct = async (product) => {
  return await api.post(API_URL, product, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const getProductById = async (id) => {
  return await api.get(`${API_URL}/${id}`);
};

const updateProduct = async (id, product) => {
  return await api.put(`${API_URL}/${id}`, product, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const deleteProductById = async (id) => {
  return await api.delete(`${API_URL}/${id}`);
};

const ProductService = {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProductById,
};

export default ProductService;