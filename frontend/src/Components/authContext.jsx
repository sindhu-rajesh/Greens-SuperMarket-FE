import React, { createContext, useState } from "react";


// Create Auth Context
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Mock Registration
  const register = (email, password) => {
    const user = { email, password };
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  // Mock Login
  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      setUser(storedUser);
    } else {
      alert("Invalid credentials");
    }
  };

  // Mock Google Login
  const googleLogin = () => {
    const googleUser = { email: "googleuser@example.com" };
    localStorage.setItem("user", JSON.stringify(googleUser));
    setUser(googleUser);
  };

  // Mock OTP Login
  const otpLogin = (phone, otp) => {
    if (otp === "1234") {
      const otpUser = { phone };
      localStorage.setItem("user", JSON.stringify(otpUser));
      setUser(otpUser);
    } else {
      alert("Invalid OTP");
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, register, login, googleLogin, otpLogin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;