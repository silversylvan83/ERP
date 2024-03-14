import { useState } from 'react';

const ProductManagementPage = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', category: 'Electronics', price: 135800, quantity: 100 },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 80952, quantity: 50 },
    { id: 3, name: 'Tablet', category: 'Electronics', price: 180412, quantity: 75 },
    { id: 4, name: 'Desk Chair', category: 'Furniture', price: 15000, quantity: 30 },
    { id: 5, name: 'Coffee Table', category: 'Furniture', price: 25000, quantity: 20 },
    { id: 6, name: 'Gaming Console', category: 'Electronics', price: 300000, quantity: 40 },
    { id: 7, name: 'Office Desk', category: 'Furniture', price: 20000, quantity: 25 },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.category && newProduct.price && newProduct.quantity) {
      const id = products.length > 0 ? products[products.length - 1].id + 1 : 1;
      setProducts([...products, { id, ...newProduct }]);
      setNewProduct({ name: '', category: '', price: '', quantity: '' });
    }
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Product Management</h1>

      {/* Add New Product */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Add New Product</h2>
        <div className="flex flex-col md:flex-row md:items-center mb-4">
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="mb-2 md:mr-2 md:mb-0 px-4 py-2 border rounded"
          />
          <input
            type="text"
            name="category"
            value={newProduct.category}
            onChange={handleChange}
            placeholder="Category"
            className="mb-2 md:mr-2 md:mb-0 px-4 py-2 border rounded"
          />
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
            placeholder="Price"
            className="mb-2 md:mr-2 md:mb-0 px-4 py-2 border rounded"
          />
          <input
            type="number"
            name="quantity"
            value={newProduct.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            className="mb-2 md:mr-2 md:mb-0 px-4 py-2 border rounded"
          />
          <button onClick={handleAddProduct} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add Product
          </button>
        </div>
      </div>

      {/* Product List */}
      <div>
        <h2 className="text-xl font-bold mb-2">Product List</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Sr.No</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Category</th>
                <th className="border px-4 py-2">Price</th>
                <th className="border px-4 py-2">Quantity</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                  <td className="border px-4 py-2">{product.id}</td>
                  <td className="border px-4 py-2">{product.name}</td>
                  <td className="border px-4 py-2">{product.category}</td>
                  <td className="border px-4 py-2">₹{product.price.toFixed(2)}</td>
                  <td className="border px-4 py-2">{product.quantity}</td>
                  <td className="border px-4 py-2 flex gap-2">
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                    <button className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductManagementPage;

