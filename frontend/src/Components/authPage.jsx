import React, { useContext, useState } from "react";
import { AuthContext } from "./authContext";

const AuthPage = () => {
  const { register, login, googleLogin, otpLogin } = useContext(AuthContext);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login / Register</h2>

        {/* Email & Password Authentication */}
        <input type="email" placeholder="Email" className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full p-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => register(email, password)} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-md mb-2 transition duration-200">Register</button>
        <button onClick={() => login(email, password)} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-md mb-2 transition duration-200">Login</button>

        {/* Google Login */}
        <button onClick={googleLogin} className="w-full bg-rose-600 hover:bg-rose-700 text-white p-2 rounded-md mb-2 transition duration-200">Login with Google</button>

        {/* Phone OTP Login */}
        <input type="text" placeholder="Phone (+1234567890)" className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" onChange={(e) => setPhone(e.target.value)} />
        <button onClick={() => setShowOtpInput(true)} className="w-full bg-amber-600 hover:bg-amber-700 text-white p-2 rounded-md mb-2 transition duration-200">Send OTP</button>

        {showOtpInput && (
          <>
            <input type="text" placeholder="Enter OTP" className="w-full p-2 border rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" onChange={(e) => setOtp(e.target.value)} />
            <button onClick={() => otpLogin(phone, otp)} className="w-full bg-violet-600 hover:bg-violet-700 text-white p-2 rounded-md mb-2 transition duration-200">Verify OTP</button>
          </>
        )}
      </div>
    </div>
  );
};
export default AuthPage;
