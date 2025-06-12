import { useState, useEffect } from 'react';

export default function GstApproval() {
  const [formData, setFormData] = useState({
    businessName: '',
    panNumber: '',
    email: '',
    mobile: '',
    businessType: '',
    businessAddress: '',
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log("GST Approval form loaded");
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting GST Form:', formData);
    setMessage("Form submitted successfully!");
  };

  return (
    <div>
      {/* Header section */}
      <div className="top">
        <img src="TamilNadu_Logo.svg.png" className="image" alt="Tamil Nadu Logo" />
        <p className="title">
          <b>GovEase: Simplifying Government Approvals Through A Unified Digital Interface</b>
        </p>
        <button className="login">Login</button>
      </div>

      {/* GST Form section */}
      <div className="gst-container">
        <h2 className="form-title">GST Approval Form</h2>
        <form onSubmit={handleSubmit} className="gst-form">
          <label>Business Name:</label>
          <input type="text" name="businessName" value={formData.businessName} onChange={handleChange} required />

          <label>PAN Number:</label>
          <input type="text" name="panNumber" value={formData.panNumber} onChange={handleChange} required />

          <label>Email Address:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Mobile Number:</label>
          <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />

          <label>Business Type:</label>
          <select name="businessType" value={formData.businessType} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="Proprietorship">Proprietorship</option>
            <option value="Partnership">Partnership</option>
            <option value="LLP">LLP</option>
            <option value="Private Limited">Private Limited</option>
            <option value="Public Limited">Public Limited</option>
          </select>

          <label>Principal Business Address:</label>
          <textarea name="businessAddress" value={formData.businessAddress} onChange={handleChange} required rows="3"></textarea>

          <button type="submit">Submit</button>
        </form>

        {message && <p className="success-msg">{message}</p>}
      </div>
    </div>
  );
}
