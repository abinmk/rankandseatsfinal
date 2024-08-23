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
  const [mobileNumber, setMobileNumber] = useState(state ? state.mobileNumber : ''); 
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState('');
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCounseling, setSelectedCounseling] = useState(null);
  const [resendTimer, setResendTimer] = useState(60); // Timer set to 60 seconds
  const [isTimerActive, setIsTimerActive] = useState(false);
  const navigate = useNavigate();
  const { user, login } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      navigate('/dashboards');
    }
  }, [user, navigate]);

  // Timer logic for resend OTP
  useEffect(() => {
    let timer;
    if (isTimerActive && resendTimer > 0) {
      timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
    } else if (resendTimer === 0) {
      setIsTimerActive(false);
    }
    return () => clearTimeout(timer);
  }, [isTimerActive, resendTimer]);

  const states = [
    { label: 'Andhra Pradesh', value: 'Andhra Pradesh' },
    { label: 'Arunachal Pradesh', value: 'Arunachal Pradesh' },
    { label: 'Assam', value: 'Assam' },
    { label: 'Bihar', value: 'Bihar' },
    { label: 'Chhattisgarh', value: 'Chhattisgarh' },
    { label: 'Goa', value: 'Goa' },
    { label: 'Gujarat', value: 'Gujarat' },
    { label: 'Haryana', value: 'Haryana' },
    { label: 'Himachal Pradesh', value: 'Himachal Pradesh' },
    { label: 'Jharkhand', value: 'Jharkhand' },
    { label: 'Karnataka', value: 'Karnataka' },
    { label: 'Kerala', value: 'Kerala' },
    { label: 'Madhya Pradesh', value: 'Madhya Pradesh' },
    { label: 'Maharashtra', value: 'Maharashtra' },
    { label: 'Manipur', value: 'Manipur' },
    { label: 'Meghalaya', value: 'Meghalaya' },
    { label: 'Mizoram', value: 'Mizoram' },
    { label: 'Nagaland', value: 'Nagaland' },
    { label: 'Odisha', value: 'Odisha' },
    { label: 'Punjab', value: 'Punjab' },
    { label: 'Rajasthan', value: 'Rajasthan' },
    { label: 'Sikkim', value: 'Sikkim' },
    { label: 'Tamil Nadu', value: 'Tamil Nadu' },
    { label: 'Telangana', value: 'Telangana' },
    { label: 'Tripura', value: 'Tripura' },
    { label: 'Uttar Pradesh', value: 'Uttar Pradesh' },
    { label: 'Uttarakhand', value: 'Uttarakhand' },
    { label: 'West Bengal', value: 'West Bengal' }
    // Add more states as needed
  ];

  const counselingOptions = [
    { label: 'NEET PG', value: 'NEET PG' },
    { label: 'NEET UG', value: 'NEET UG' },
    { label: 'INI CET', value: 'INI CET' },
    { label: 'NEET SS', value: 'NEET SS' }
  ];

  const validateFields = () => {
    if (!name || !email || !mobileNumber || !selectedState || !selectedCounseling) {
      setError('Please fill in all the fields');
      return false;
    }
    setError('');
    return true;
  };

  const handleSendOtp = async () => {
    if (!validateFields()) return;

    if (mobileNumber.length === 10) {
      try {
        await axiosInstance.post('/auth/send-otp-register', {
          mobileNumber: '+91' + mobileNumber,
          name
        });
        setIsOtpSent(true);
        setIsTimerActive(true);
        setResendTimer(60); // Reset timer to 60 seconds
        setError('');
      } catch (error) {
        setError(error.response?.data?.message || 'Failed to send OTP. Please try again.');
      }
    } else {
      setError('Please enter a valid 10-digit mobile number');
    }
  };

  const handleResendOtp = async () => {
    if (!validateFields()) return;

    if (mobileNumber.length === 10) {
      try {
        await axiosInstance.post('/auth/send-otp-register', {
          mobileNumber: '+91' + mobileNumber,
          name
        });
        setIsTimerActive(true);
        setResendTimer(60); // Reset timer to 60 seconds
        setError('');
      } catch (error) {
        setError(error.response?.data?.message || 'Failed to resend OTP. Please try again.');
      }
    } else {
      setError('Please enter a valid 10-digit mobile number');
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      setError('Please enter the OTP');
      return;
    }
    
    try {
      const response = await axiosInstance.post('/auth/verify-otp-register', {
        name,
        email,
        mobileNumber: '+91' + mobileNumber,
        state: selectedState,
        counseling: selectedCounseling,
        code: otp
      });

      const { token, user } = response.data;
      localStorage.setItem('token', token); // Store the token
      localStorage.setItem('user', JSON.stringify(user)); // Store user data
      login(user, token);
      navigate('/dashboards');
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to verify OTP or register. Please try again.');
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
            required
          />
          <InputText
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className={styles.inputField}
            required
          />
          <InputText
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))} // Allow updates to mobileNumber
            placeholder="Enter your mobile number"
            className={styles.inputField}
            maxLength="10"
            required
          />
          <Dropdown
            value={selectedState}
            options={states}
            onChange={(e) => setSelectedState(e.value)}
            placeholder="Select your state"
            className={styles.inputField}
            required
          />
          <Dropdown
            value={selectedCounseling}
            options={counselingOptions}
            onChange={(e) => setSelectedCounseling(e.value)}
            placeholder="Preferred Counseling"
            className={styles.inputField}
            required
          />
          {isOtpSent ? (
            <>
              <InputText
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength="6"
                placeholder="Enter OTP"
                className={styles.inputField}
                required
              />
              <Button label="Verify OTP & Register" onClick={handleVerifyOtp} className={styles.button} />
              <Button
                label={`Resend OTP ${resendTimer > 0 ? `(${resendTimer}s)` : ''}`}
                onClick={handleResendOtp}
                className={styles.button}
                disabled={isTimerActive} // Disable button while timer is active
              />
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
