import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import styles from '../styles/Register.module.css';
import { UserContext } from '../contexts/UserContext';

const Register = () => {
  const { state } = useLocation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState(state ? state.mobileNumber : ''); // Allowing updates to mobileNumber
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState('');
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCounseling, setSelectedCounseling] = useState(null);
  const navigate = useNavigate();
  const { user, login } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      navigate('/dashboards');
    }
  }, [user, navigate]);

  const states = [
    { label: 'Kerala', value: 'Kerala' },
    { label: 'Andhra Pradesh', value: 'Andhra Pradesh' },
    // Add more states as needed
  ];

  const counselingOptions = [
    { label: 'NEET PG', value: 'NEET PG' },
    { label: 'NEET UG', value: 'NEET UG' },
    { label: 'INI CET', value: 'INI CET' },
    { label: 'NEET SS', value: 'NEET SS' }
  ];

  const handleSendOtp = async () => {
    if (mobileNumber.length === 10) {
      try {
        await axiosInstance.post('/auth/send-otp-register', {
          mobileNumber: '+91' + mobileNumber,
          name
        });
        setIsOtpSent(true);
        setError('');
      } catch (error) {
        setError(error.response?.data?.message || 'Failed to send OTP. Please try again.'); // Improved error handling
      }
    } else {
      setError('Please enter a valid 10-digit mobile number');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axiosInstance.post('/auth/verify-otp-register', {
        name,
        email,
        mobileNumber: '+91' + mobileNumber,
        state: selectedState,
        counseling: selectedCounseling,
        code: otp
      });
  
      console.log("Backend response:", response.data);
  
      const { token, user } = response.data; // Ensure you destructure user correctly
      localStorage.setItem('token', token); // Store the token
      localStorage.setItem('user', JSON.stringify(user)); // Store user data correctly
  
      console.log("Stored user in localStorage:", localStorage.getItem('user'));
  
      login(user, token);
      navigate('/dashboards');
    } catch (error) {
      console.error("Verification error:", error);
      setError(error.response?.data?.message || 'Failed to verify OTP or register. Please try again.'); // Improved error handling
    }
  };
  
  

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerBox}>
        <div className={styles.logoContainer}>
          <img src="/logo.png" alt="Logo" className={styles.logo} />
        </div>
        <h1 className={styles.signup}>Register</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <InputText
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className={styles.inputField}
          />
          <InputText
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={styles.inputField}
          />
          <InputText
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))} // Allow updates to mobileNumber
            placeholder="Enter your mobile number"
            className={styles.inputField}
            maxLength="10"
          />
          <Dropdown
            value={selectedState}
            options={states}
            onChange={(e) => setSelectedState(e.value)}
            placeholder="Select your state"
            className={styles.inputField}
          />
          <Dropdown
            value={selectedCounseling}
            options={counselingOptions}
            onChange={(e) => setSelectedCounseling(e.value)}
            placeholder="Preferred Counseling"
            className={styles.inputField}
          />
          {isOtpSent ? (
            <>
              <InputText
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength="6"
                placeholder="Enter OTP"
                className={styles.inputField}
              />
              <Button label="Verify OTP & Register" onClick={handleVerifyOtp} className={styles.button} />
            </>
          ) : (
            <Button label="Send OTP" onClick={handleSendOtp} className={styles.button} />
          )}
          {error && <p className={styles.errorMessage}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
