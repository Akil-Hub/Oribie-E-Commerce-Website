const LoginPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Login</h1>

      <div className="grid grid-cols-2 gap-6">
        {/* New Customer */}
        <div className="border p-4 rounded">
          <h2 className="text-lg font-semibold mb-3">New Customer</h2>
          <p className="mb-4">Create an account to enjoy faster checkout.</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Continue
          </button>
        </div>

        {/* Returning Customer */}
        <div className="border p-4 rounded">
          <h2 className="text-lg font-semibold mb-3">Returning Customer</h2>
          <div className="flex flex-col gap-3">
            <input placeholder="Email" className="p-2 border rounded" />
            <input type="password" placeholder="Password" className="p-2 border rounded" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage