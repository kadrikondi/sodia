import React, { useState, useEffect } from 'react';
import { getData } from 'country-list';
import { useHistory } from 'react-router-dom'; 
import axios from "axios"
const Signup = () => {
  const [countries, setCountries] = useState([]);
  const [gender, setGender] = useState('');
  const history = useHistory(); 
  const[username,setUsername]= useState("")
  const [password,setPassword] = useState("")
  const[email,setEmail]= useState("")
  const[country,setCountry] = useState("")
  const[tel,setTel] = useState("")
  useEffect(() => {
    const countries = getData().map(country => country.name);
    setCountries(countries);
  }, []);

  const handleSubmit = async(event) => {
    event.preventDefault();
    try{
      const response = await axios.post("http://localhost:3500/user/signup",
        {
          username,
          password,
          email,
          country,
          tel,
          gender,
        }
      )
      if(response.status=== 200){
        alert("User Created Successfully")
        history.push("/login")
      }
    }catch(err){
      if (err.response.data ==  "User already exist"){
        alert("User already exist")
      }else if(err.response.data == "email already exist"){
        alert("Email already exist")
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 to-white p-4 sm:p-6 lg:p-8">
      <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-lg transform transition-all duration-500 hover:scale-105">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-purple-900 font-extrabold text-xl md:text-3xl lg:text-4xl">
            Sign-Up
          </span>
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-purple-900 font-bold">Name</label>
            <input
              id="name"
              type="text"
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm sm:text-sm"
              placeholder="Input your name"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-purple-900 font-bold">Tel</label>
            <input
              id="Tel"
              type="text"
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm sm:text-sm"
              placeholder="Input your Phone Number"
              required
            />
          </div>

          <div>
            <label className="block text-purple-900 font-bold">Email</label>
            <input
              id="Email"
              type="text"
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm sm:text-sm"
              placeholder="Input your Email Address"
              required
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div>
      <label className="block text-purple-900 font-bold">Country</label>
      <select
        id="country"
        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
        value={country}
        onChange={(e) => setCountry(e.target.value)} 
      >
        <option value="" disabled>Select a country</option>
        {countries.map((country, index) => (
          <option key={index} value={country}>{country}</option>
        ))}
      </select>
    </div>

          <div>
            <label className="block text-purple-900 font-bold">Password</label>
            <input
              id="password"
              type="password"
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm sm:text-sm"
              placeholder="Input your password"
              required
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 text-purple-900 font-bold">Gender</label>
            <div className="flex items-center">
              <label className="mr-4 text-purple-900 font-bold">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="mr-2"
                  checked={gender === 'Male'}
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
              </label>
              <label className="mr-4 text-purple-900 font-bold">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="mr-2"
                  checked={gender === 'Female'}
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </label>
              <label className="mr-2 text-purple-900 font-bold">
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  className="mr-2"
                  checked={gender === 'Other'}
                  onChange={(e) => setGender(e.target.value)}
                />
                Other
              </label>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-purple-900 text-white py-2 px-4 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="flex flex-col items-center mt-6">
          <span className="flex justify-center mb-2"></span>
          <a href="/login" className="text-purple-700 py-2 px-4 hover:underline font-bold">
            Already a User?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
