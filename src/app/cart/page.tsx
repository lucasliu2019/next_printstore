'use client'; // If using App Router
import './page.css';

import { useEffect, useState } from 'react';

type CartItem = {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  description: string;
};

export default function CartPage() {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(storedCart);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would send to backend or email service
    console.log("Quote requested:", formData);

    alert("Quote request sent!");
    setFormData({ name: '', email: '', message: '' });
  };

  const removeFromCart = (id: string | number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQuantity = (id: string | number) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id: string | number) => {
    const updatedCart = cart.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  return (
    <>
      <div style={{ padding: '2rem' }}>
        <h1>🛒 Your Cart</h1>
        {cart.map((item) => (
          <div key={item.id} style={{
            marginBottom: '1rem',
            borderBottom: '1px solid #ccc',
            display: 'flex',
            gap: '1.5rem',  // Spacing between items
            padding: '1rem',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}>
            {/* Product Image (optional, can add your image here) */}
            <div style={{ width: '150px', height: '150px', backgroundColor: '#f1f1f1', borderRadius: '8px' }}>
              {/* Example image if needed */}
              {/* <img src={item.imageUrl} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} /> */}
            </div>

            {/* Product Details Section */}
            <div style={{ flex: 1 }}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p><strong>Price: ${item.price}</strong></p>
            </div>

            {/* Quantity Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={() => decreaseQuantity(item.id)}
                style={{
                  backgroundColor: '#f39c12',
                  color: '#fff',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                ➖
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => increaseQuantity(item.id)}
                style={{
                  backgroundColor: '#2ecc71',
                  color: '#fff',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                ➕
              </button>
            </div>

            {/* Remove Button */}
            <div>
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  backgroundColor: '#e74c3c',
                  color: '#fff',
                  border: 'none',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2rem', margin: 'auto', alignItems: 'center', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        <h2>📄 Request a Quote</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '500px', padding: '1rem', margin: '0.5rem', border: '1px solid #ccc', borderRadius: '8px' }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Special Requests or Questions"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="quoteButton">Send Quote Request</button>
        </form>
      </div>
    </>
  );
}
