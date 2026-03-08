import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData)
      const response = await fetch('http://localhost:3000/api/web/contact', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json', // Crucial: Tells the server what it's receiving
        },
        body: JSON.stringify(formData), // formData is your state object
      });

      if (!response.ok) throw new Error('Network response was not ok');
      
      const data = await response.json();
      console.log('Success:', data);
      setSuccess(true)
      setFormData({
        name: '',
        email: '',
        message: ''
      })
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
    {
      success ? <div 
        className="bg-green-300 text-black w-full h-fit px-1.5 flex justify-center cursor-pointer"
        onClick = {() => {setSuccess(false)}}
      >
        Your Information has been sent successfully!
      </div> : ""
    }
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-xl border border-gray-100">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-purple-600 hover:bg-purple-500 w-full text-white font-bold py-2 rounded-lg transition cursor-pointer"
      >
        Send Message
      </button>
    </form>
    </>
  );
}