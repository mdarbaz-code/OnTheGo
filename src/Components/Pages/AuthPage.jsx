import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authUtils } from '../../utils/authUtils';
import ErrorNotification from '../UI/components/ErrorNotification';
import '../Core/components/Auth.css';

export default function AuthPage({ isSignUp = false }) {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [passwordRequirements, setPasswordRequirements] = useState({
    minLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Update password requirements in real-time for sign up
    if (isSignUp && name === 'password') {
      setPasswordRequirements(authUtils.checkPasswordRequirements(value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isSignUp) {
      handleSignUp();
    } else {
      handleLogin();
    }
  };

  const handleLogin = () => {
    const { email, password } = formData;

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    const result = authUtils.login(email, password);
    if (result.success) {
      authUtils.setCurrentUser(result.user);
      navigate('/');
    } else {
      setError(result.error);
    }
  };

  const handleSignUp = () => {
    const { name, email, password } = formData;

    if (!name || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!authUtils.validatePassword(password)) {
      setError('Password does not meet the required criteria');
      return;
    }

    const result = authUtils.signUp(email, password, name);
    if (result.success) {
      authUtils.setCurrentUser(result.user);
      navigate('/');
    } else {
      setError(result.error);
    }
  };

  const handleNavigateToggle = () => {
    navigate(isSignUp ? '/login' : '/signup');
  };

  return (
    <div className="auth-container">
      {error && <ErrorNotification message={error} onClose={() => setError('')} />}
      
      <div className="auth-form-wrapper">
        <h1 className="auth-title">{isSignUp ? 'Sign Up' : 'Login'}</h1>
        
        <form onSubmit={handleSubmit} className="auth-form">
          {isSignUp && (
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your name"
                className="form-input"
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              className="form-input"
            />
            {isSignUp && formData.password && (
              <div className="password-requirements">
                <RequirementItem 
                  met={passwordRequirements.minLength}
                  text="Minimum 6 characters"
                />
                <RequirementItem 
                  met={passwordRequirements.hasUpperCase}
                  text="At least one uppercase letter"
                />
                <RequirementItem 
                  met={passwordRequirements.hasLowerCase}
                  text="At least one lowercase letter"
                />
                <RequirementItem 
                  met={passwordRequirements.hasNumber}
                  text="At least one number"
                />
                <RequirementItem 
                  met={passwordRequirements.hasSpecialChar}
                  text="At least one special character (@$!%*?&)"
                />
              </div>
            )}
          </div>

          <button type="submit" className="auth-button">
            {isSignUp ? 'Create Account' : 'Login'}
          </button>
        </form>

        <p className="auth-toggle-text">
          {isSignUp ? (
            <>
              Already have an account? <button onClick={handleNavigateToggle} className="toggle-link">Login</button>
            </>
          ) : (
            <>
              Don't have an account? <button onClick={handleNavigateToggle} className="toggle-link">Sign Up</button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}

function RequirementItem({ met, text }) {
  return (
    <div className={`requirement-item ${met ? 'met' : 'unmet'}`}>
      <span className="requirement-indicator">{met ? '✓' : '•'}</span>
      <span>{text}</span>
    </div>
  );
}
