// Local Storage key
const USERS_STORAGE_KEY = 'foodDeliveryUsers';

// Password validation regex
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[a-zA-Z\d@$!%*?&]{6,}$/;

export const isAuthenticated = () => {
  return localStorage.getItem("User") !== null;
};
export const authUtils = {
  // Get all users from localStorage
  getAllUsers: () => {
    try {
      const users = localStorage.getItem(USERS_STORAGE_KEY);
      return users ? JSON.parse(users) : [];
    } catch (error) {
      console.error('Error reading users from localStorage:', error);
      return [];
    }
  },

  // Check if email exists
  emailExists: (email) => {
    const users = authUtils.getAllUsers();
    return users.some(user => user.email.toLowerCase() === email.toLowerCase());
  },

  // Validate password format
  validatePassword: (password) => {
    return PASSWORD_REGEX.test(password);
  },

  // Get password validation requirements
  getPasswordRequirements: () => {
    return [
      { text: 'Minimum 6 characters', required: true },
      { text: 'At least one uppercase letter', required: true },
      { text: 'At least one lowercase letter', required: true },
      { text: 'At least one number', required: true },
      { text: 'At least one special character (@$!%*?&)', required: true }
    ];
  },

  // Check password requirement individually
  checkPasswordRequirements: (password) => {
    return {
      minLength: password.length >= 6,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[@$!%*?&]/.test(password)
    };
  },

  // Sign up - create new user
  signUp: (email, password, name) => {
    if (authUtils.emailExists(email)) {
      return { success: false, error: 'Email already exists' };
    }

    if (!authUtils.validatePassword(password)) {
      return { success: false, error: 'Password does not meet the required criteria' };
    }

    try {
      const users = authUtils.getAllUsers();
      const newUser = {
        id: Date.now().toString(),
        name,
        email: email.toLowerCase(),
        password // In production, this should be hashed
      };
      users.push(newUser);
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
      return { success: true, user: newUser };
    } catch (error) {
      console.error('Error during sign up:', error);
      return { success: false, error: 'An error occurred during sign up' };
    }
  },

  // Login - verify credentials
  login: (email, password) => {
    const users = authUtils.getAllUsers();
    const user = users.find(
      u => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );

    if (user) {
      return { success: true, user };
    }
    return { success: false, error: 'Invalid email or password' };
  },

  // Store current user session
  setCurrentUser: (user) => {
    try {
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('User', JSON.stringify(user)); // For isAuthenticated() check
    } catch (error) {
      console.error('Error storing current user:', error);
    }
  },

  // Get current user session
  getCurrentUser: () => {
    try {
      const user = localStorage.getItem('currentUser');
      return user ? JSON.parse(user) : null;
    } catch (error) {
      console.error('Error reading current user:', error);
      return null;
    }
  },

  // Logout
  logout: () => {
    try {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('User');
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }
};
