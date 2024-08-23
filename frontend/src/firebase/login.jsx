import React, { useState, useContext, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import { UserContext } from '../contexts/UserContext';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import styles from '../styles/Login.module.css';

const Login = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState('');
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

  const handleSendOtp = async () => {
    if (mobileNumber.length === 10) {
      try {
        await axiosInstance.post('/auth/send-otp', {
          mobileNumber: '+91' + mobileNumber
        });
        setIsOtpSent(true);
        setIsTimerActive(true);
        setResendTimer(60); // Reset timer to 60 seconds
        setError('');
      } catch (error) {
        if (error.response && error.response.data.message === 'User not registered') {
          navigate('/register', { state: { mobileNumber } });
        } else {
          setError('Failed to send OTP. Please try again.');
        }
      }
    } else {
      setError('Please enter a valid 10-digit mobile number');
    }
  };

  const handleResendOtp = async () => {
    if (mobileNumber.length === 10) {
      try {
        await axiosInstance.post('/auth/send-otp', {
          mobileNumber: '+91' + mobileNumber
        });
        setIsTimerActive(true);
        setResendTimer(60); // Reset timer to 60 seconds
        setError('');
      } catch (error) {
        setError('Failed to resend OTP. Please try again.');
      }
    } else {
      setError('Please enter a valid 10-digit mobile number');
    }
  };

  const handleVerifyOtp = async () => {
    if (otp.length === 6) {
      try {
        const response = await axiosInstance.post('/auth/verify-otp', {
          mobileNumber: '+91' + mobileNumber,
          code: otp
        });
        const { token, user } = response.data;
        localStorage.setItem('token', token); // Store the token
        localStorage.setItem('user', JSON.stringify(user)); // Store user data
        login(user, token);
        navigate('/dashboards');
      } catch (error) {
        setError('Failed to verify OTP. Please try again.');
      }
    } else {
      setError('Please enter the 6-digit OTP');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.backgroundPattern}>
        {/* Background pattern */}
      </div>
      <div className={styles.loginBox}>
        <Link to="/home" className={styles.logoContainer}>
          <img src="/logo.png" alt="Logo" className={styles.logo} />
        </Link>
        <h1 className={styles.signin}>Sign In</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={styles.mobileInputContainer}>
            <span className={styles.inputAddon}>+91</span>
            <InputText
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
              maxLength="10"
              placeholder="Enter your mobile number"
              className={styles.inputText}
              type="tel"
            />
          </div>
          {isOtpSent ? (
            <>
              <InputText
                value={otp}
                onChange={(e) => {setOtp(e.target.value.replace(/\D/g, ''));
              }}
                maxLength="6"
                placeholder="Enter OTP"
                className={styles.inputText2}
                type="tel"
              />
              <Button label="Verify OTP" className={styles.button} onClick={handleVerifyOtp} />
              <Button
                label={`Resend OTP ${resendTimer > 0 ? `(${resendTimer}s)` : ''}`}
                onClick={handleResendOtp}
                className={styles.button}
                disabled={isTimerActive} // Disable button while timer is active
              />
            </>
          ) : (
            <Button label="Send OTP" className={styles.button} onClick={handleSendOtp} />
          )}
          {error && <p className={styles.errorMessage}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
