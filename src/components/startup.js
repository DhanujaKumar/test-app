import { useState, useEffect } from 'react';
// import Link from 'next/link'; // Uncomment if using Link for navigation

export default function StartupRegistration() {
  const [formData, setFormData] = useState({
    startupName: '',
    incorporationDate: '',
    entityType: '',
    industry: '',
    founderName: '',
    email: '',
    phone: '',
    description: '',
    certificate: null,
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log("Startup Registration form loaded");
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'certificate') {
      setFormData({ ...formData, certificate: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting Startup Registration Form:', formData);
    setMessage("Form submitted successfully!");
  };

  return (
    <div>
      {/* Header Section */}
      <div className="top">
        <img src="TamilNadu_Logo.svg.png" className="image" alt="Tamil Nadu Logo" />
        <p className="title">
          <b>GovEase: Simplifying Government Approvals Through A Unified Digital Interface</b>
        </p>
        <button className="login">Login</button>
        {/* <Link href="/login"><button className="login">Login</button></Link> */}
      </div>

      {/* Form Section */}
      <div className="startup-container">
        <h2 className="form-title">Startup Registration Form</h2>
        <form onSubmit={handleSubmit} className="startup-form">
          <label>Startup Name:</label>
          <input type="text" name="startupName" value={formData.startupName} onChange={handleChange} required />

          <label>Date of Incorporation:</label>
          <input type="date" name="incorporationDate" value={formData.incorporationDate} onChange={handleChange} required />

          <label>Entity Type:</label>
          <select name="entityType" value={formData.entityType} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="Private Limited">Private Limited Company</option>
            <option value="LLP">Limited Liability Partnership</option>
            <option value="Partnership">Partnership Firm</option>
          </select>

          <label>Industry Sector:</label>
          <input type="text" name="industry" value={formData.industry} onChange={handleChange} required />

          <label>Founder Name:</label>
          <input type="text" name="founderName" value={formData.founderName} onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Phone Number:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

          <label>Startup Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} rows="4" required></textarea>

          <label>Upload Certificate of Incorporation:</label>
          <input type="file" name="certificate" accept=".pdf,.jpg,.png" onChange={handleChange} />

          <button type="submit">Submit</button>
        </form>

        {message && <p className="success-message">{message}</p>}
      </div>
    </div>
  );
}
