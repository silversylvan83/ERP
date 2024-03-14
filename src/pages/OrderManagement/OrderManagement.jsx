import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const OrderManagementPage = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: 'Aniket Verma', total: 150.99, status: 'Pending', products: ['Tablet', 'SmartPhone'], deliveryDate: new Date(2024, 3, 15) },
    { id: 2, customer: 'Priyanshu Desmukh', total: 200.50, status: 'Shipped', products: ['Laptop', 'Tablet'], deliveryDate: new Date(2024, 3, 16) },
    { id: 3, customer: 'Vaishnavi Yadav', total: 75.25, status: 'Delivered', products: ['Tablet', 'SmartPhone'], deliveryDate: new Date(2024, 3, 17) },
  ]);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isAddingOrder, setIsAddingOrder] = useState(false);
  const [newOrder, setNewOrder] = useState({
    customer: '',
    total: 0,
    status: '',
    products: [],
    deliveryDate: new Date(),
  });

  const handleDateChange = (date) => {
    // Format the selected date to match the format of deliveryDate
    const selectedDateString = date.toISOString().slice(0, 10);
    setSelectedDate(selectedDateString);
    setSelectedOrder(null); // Clear selected order when date changes
  };

  const handleViewDetails = (orderId) => {
    const order = orders.find((order) => order.id === orderId);
    setSelectedOrder(order);
  };

  const handleProcessOrder = (orderId) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: 'Processing' } : order
    );
    setOrders(updatedOrders);
  };

  const handleAddOrder = () => {
    if (newOrder.customer && newOrder.total && newOrder.status && newOrder.products.length > 0) {
      const id = orders.length > 0 ? orders[orders.length - 1].id + 1 : 1;
      setOrders([...orders, { id, ...newOrder }]);
      setNewOrder({ customer: '', total: 0, status: '', products: [], deliveryDate: new Date() });
      setIsAddingOrder(false);
    }
  };

  const handleDeleteOrder = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId));
    setSelectedOrder(null); // Clear selected order after deletion
  };

  const filteredOrders = selectedDate ? orders.filter(order => order.deliveryDate.toISOString().slice(0, 10) === selectedDate) : orders;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Order Management</h1>

      {/* Add Order Form */}
      {isAddingOrder && (
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Add New Order</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Customer"
              value={newOrder.customer}
              onChange={(e) => setNewOrder({ ...newOrder, customer: e.target.value })}
              className="px-4 py-2 border rounded"
            />
            <input
              type="number"
              placeholder="Total"
              value={newOrder.total}
              onChange={(e) => setNewOrder({ ...newOrder, total: parseFloat(e.target.value) })}
              className="px-4 py-2 border rounded"
            />
            <input
              type="text"
              placeholder="Status"
              value={newOrder.status}
              onChange={(e) => setNewOrder({ ...newOrder, status: e.target.value })}
              className="px-4 py-2 border rounded"
            />
            <DatePicker
              selected={newOrder.deliveryDate}
              onChange={(date) => setNewOrder({ ...newOrder, deliveryDate: date })}
              dateFormat="dd/MM/yyyy"
              className="px-4 py-2 border rounded"
            />
            {/* Add product selection */}
            <button
              onClick={handleAddOrder}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Order
            </button>
          </div>
        </div>
      )}

      {/* Calendar View */}
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Calendar View</h2>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          className="px-4 py-2 border rounded"
          placeholderText="Select a Date"
        />
      </div>

      {/* Orders List */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Order ID</th>
              <th className="border px-4 py-2">Customer</th>
              <th className="border px-4 py-2">Products</th>
              <th className="border px-4 py-2">Total</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Delivery Date</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td className="border px-4 py-2">{order.id}</td>
                <td className="border px-4 py-2">{order.customer}</td>
                <td className="border px-4 py-2">{order.products.join(', ')}</td>
                <td className="border px-4 py-2">₹{order.total.toFixed(2)}</td>
                <td className="border px-4 py-2">{order.status}</td>
                <td className="border px-4 py-2">{order.deliveryDate.toISOString().slice(0, 10)}</td>
                <td className="border px-4 py-2 flex flex-wrap gap-2">
                  <button
                    onClick={() => handleViewDetails(order.id)}
                    className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => handleDeleteOrder(order.id)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                  {order.status === 'Pending' && (
                    <button
                      onClick={() => handleProcessOrder(order.id)}
                      className="px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                      Process Order
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Order Details */}
      {selectedOrder && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-2">Order Details</h2>
          <div className="border p-4">
            <p><strong>Order ID:</strong> {selectedOrder.id}</p>
            <p><strong>Customer:</strong> {selectedOrder.customer}</p>
            <p><strong>Total:</strong> ₹{selectedOrder.total.toFixed(2)}</p>
            <p><strong>Status:</strong> {selectedOrder.status}</p>
            <p><strong>Products:</strong> {selectedOrder.products.join(', ')}</p>
            {/* Add more details as needed */}
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderManagementPage;
