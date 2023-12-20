import React, { useState } from 'react';
import './InvestorLogIn.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { sendEmail } from '../../Utils/MailService';


const SkilledPersonSignup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    city: '',
    country: '',
    postalCode: '',
    role: 'skilledPerson',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      valid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
      valid = false;
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
      valid = false;
    }

    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
      valid = false;
    }

    if (!formData.country.trim()) {
      newErrors.country = 'Country is required';
      valid = false;
    }

    if (!formData.postalCode.trim()) {
      newErrors.postalCode = 'Postal code is required';
      valid = false;
    } else if (!/^\d{5}$/.test(formData.postalCode)) {
      newErrors.postalCode = 'Postal code must be 5 digits';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      await axios.post('http://localhost:5000/skilledPersonSignup', formData).then((res) => {
       if(res.status === 201){
        sendEmail(formData.firstName, formData.email);
        navigate('/coming-soon');
       }
      }).catch((err) => {
        console.log(err);
      }
      );


    } else {
      console.log('Form has validation errors');
    }
  };

  return (
    <div className="signup-page">
      <div className="info-section">
        <div className="specific-info">
          <h1>Skilled Person</h1>
           <p>
           A skilled person is a master in their craft, blending
             inspiring expertise with practical know-how. Whether 
             it's an artist, musician, or scientist, their adeptness 
             comes from dedicated practice and continuous learning. 
             Beyond technical prowess, they showcase creativity, innovation,
              and adaptability. These individuals exude confidence yet remain 
              humble, open to learning and refining their abilities. 
              Their impact resonates through lasting contributions, 
              inspiring others to pursue excellence. Skilled individuals
               are the artisans of our world, elevating their professions
                with exceptional abilities and unwavering dedication.
           </p>
        </div>
      </div>
      <div className="form-section">
        <div className="form-container">
          <h2 className="form-heading">Sign Up</h2>
          <form onSubmit={handleSubmit} className="form-content">
          <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <span className={`error-message ${errors.firstName ? 'active' : ''}`}>
          {errors.firstName}
        </span>

        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <span className={`error-message ${errors.lastName ? 'active' : ''}`}>
          {errors.lastName}
        </span>
        <input
          type="text"
          id="cnic"
          name="cnic"
          placeholder="CNIC (13 digits)"
          value={formData.cnic}
          onChange={handleChange}
          required
        />
        <span className={`error-message ${errors.cnic ? 'active' : ''}`}>
          {errors.cnic}
        </span>

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <span className={`error-message ${errors.email ? 'active' : ''}`}>
          {errors.email}
        </span>

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <span className={`error-message ${errors.password ? 'active' : ''}`}>
          {errors.password}
        </span>

        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <span className={`error-message ${errors.confirmPassword ? 'active' : ''}`}>
          {errors.confirmPassword}
        </span>

        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <span className={`error-message ${errors.phone ? 'active' : ''}`}>
          {errors.phone}
        </span>

        <input
          type="text"
          id="address"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <span className={`error-message ${errors.address ? 'active' : ''}`}>
          {errors.address}
        </span>

        <input
          type="text"
          id="city"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <span className={`error-message ${errors.city ? 'active' : ''}`}>
          {errors.city}
        </span>

        <input
          type="text"
          id="country"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          required
        />
        <span className={`error-message ${errors.country ? 'active' : ''}`}>
          {errors.country}
        </span>

        <input
          type="text"
          id="postalCode"
          name="postalCode"
          placeholder="Postal Code"
          value={formData.postalCode}
          onChange={handleChange}
          required
        />
        <span className={`error-message ${errors.postalCode ? 'active' : ''}`}>
          {errors.postalCode}
        </span>

        <button type="submit" className="animated-button">
          Sign Up
        </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SkilledPersonSignup;
