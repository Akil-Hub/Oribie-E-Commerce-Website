import React, { useEffect, useState } from "react";

import axios from "axios";
// SIGN UP PAGE WITH LOCATION LOGIC
const SignUpPage = () => {
    const [data, setData] = useState([])
    useEffect(() => {
      const getData = async () => {
        const res =  await axios.get('/bdLocalArea.json')
        setData(res.data)
        
      };
   getData()
    }, [])
    console.log(data)
  const [division, setDivision] = useState("");
  const [districts, setDistricts] = useState([]);
  const [district, setDistrict] = useState("");

  const [upazilas, setUpazilas] = useState([]);
  const [upazila, setUpazila] = useState("");

  const [unions, setUnions] = useState([]);
  const [union, setUnion] = useState("");

  const handleDivisionChange = (e) => {
    const selected = data.find((d) => d.name === e.target.value);
    setDivision(selected.name);
    setDistricts(selected.districts);
    setDistrict("");
    setUpazilas([]);
    setUnions([]);
  };

  const handleDistrictChange = (e) => {
    const selected = districts.find((d) => d.name === e.target.value);
    setDistrict(selected.name);
    setUpazilas(selected.upazilas);
    setUnions([]);
  };

  const handleUpazilaChange = (e) => {
    const selected = upazilas.find((u) => u.name === e.target.value);
    setUpazila(selected.name);
    setUnions(selected.unions);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>

      {/* Personal Details */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Your Personal Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <input placeholder="First Name" className="p-2 border rounded" />
          <input placeholder="Last Name" className="p-2 border rounded" />
          <input
            placeholder="Email"
            className="p-2 border rounded col-span-2"
          />
          <input
            placeholder="Telephone"
            className="p-2 border rounded col-span-2"
          />
        </div>
      </div>

      {/* Address with Bangladesh Location */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Address</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            placeholder="Address"
            className="p-2 border rounded col-span-2"
          />

          <select
            onChange={handleDivisionChange}
            className="p-2 border rounded"
          >
            <option>Select Division</option>
            {data.map((d) => (
              <option key={d.id}>{d.name}</option>
            ))}
          </select>

          <select
            onChange={handleDistrictChange}
            className="p-2 border rounded"
          >
            <option>Select District</option>
            {districts.map((d) => (
              <option key={d.id}>{d.name}</option>
            ))}
          </select>

          <select onChange={handleUpazilaChange} className="p-2 border rounded">
            <option>Select Upazila</option>
            {upazilas.map((u) => (
              <option key={u.id}>{u.name}</option>
            ))}
          </select>

          <select
            onChange={(e) => setUnion(e.target.value)}
            className="p-2 border rounded"
          >
            <option>Select Union</option>
            {unions.map((u) => (
              <option key={u.id}>{u.name}</option>
            ))}
          </select>

        
        </div>
      </div>

      {/* Password */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Your Password</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="password"
            placeholder="Password"
            className="p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="p-2 border rounded"
          />
        </div>
      </div>

      <button className="bg-blue-600 text-white px-6 py-2 rounded">
        Register
      </button>
    </div>
  );
};

export default SignUpPage;
