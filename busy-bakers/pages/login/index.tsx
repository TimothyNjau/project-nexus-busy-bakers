import { useState } from "react";

const Login: React.FC = () => {
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="w-full max-w-sm mx-auto px-4 py-8">
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-4">
        {isRegister ? "Register" : "Login"}
      </h1>
      <form className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-4">
        {isRegister && (
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
          required
        />
        <button
          type="submit"
          className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 rounded transition-colors"
        >
          {isRegister ? "Register" : "Login"}
        </button>
      </form>
      <div className="text-center mt-4">
        {isRegister ? (
          <>
            Already have an account?{" "}
            <button
              className="text-amber-600 hover:underline font-semibold"
              onClick={() => setIsRegister(false)}
            >
              Login
            </button>
          </>
        ) : (
          <>
            New user?{" "}
            <button
              className="text-amber-600 hover:underline font-semibold"
              onClick={() => setIsRegister(true)}
            >
              Register
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
