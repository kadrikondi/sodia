
import React, { useState, useEffect } from 'react';
import { getData } from 'country-list';

const Signup = () => {
  const [countries, setCountries] = useState([]);
  const [gender, setGender] = useState('');

  useEffect(() => {
    const countries = getData().map(country => country.name);
    setCountries(countries);
 
    const gender = (event) =>{
      event.preventDefault();
      alert(`Selected gender: ${gender}`);
    };
  }, []);


  return <div className="bg-gradient-to-r from-purple-900 to-white h-screen flex items-center justify-center">
    <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-lg transform transition-all duration-500 hover:scale-105">
    <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-whie to-purple-400">
            Sign-Up
          </span>
        </h2>
  <form className="space-y-4">
<div>
<label className="block text-purple-900 font-bold" >Name</label>
            <input
              id="name"
              type="text"
         class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 
         shadow-sm  sm:text-sm" placeholder="input your name"
              required
            />
            </div>

<div>
<label className="block text-purple-900 font-bold" >Tel</label>
            <input
              id="Tel"
              type="text"
         class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 
         shadow-sm  sm:text-sm" placeholder="input your Phone Number"
              required
            />
            </div>
            
            <div>
<label className="block text-purple-900 font-bold" >Email</label>
            <input
              id="Email"
              type="text"
         class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 
         shadow-sm  sm:text-sm" placeholder="input your Email Address"
              required
            />
            </div>
            
            <div>
            <label className="block text-purple-900 font-bold" >Country</label>
            <select
              id="country"
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 
         shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="input your Email Address"
              required
            >
              {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <div>
<label className="block text-purple-900 font-bold" >Password</label>
            <input
              id="password"
              type="password"
         class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 
         shadow-sm  sm:text-sm" placeholder='input your password'
              required
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
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
            <label className='mr-2 text-purple-900 font-bold'>
              <input
                type="radio"
                name="gender"
                value="Other"
                className="mr-2"
                onChange={(e) => setGender(e.target.value)}
              />
              Other
            </label>
          </div>
          </div>
   
            <br />
            
            
            <div className="flex justify-center mt-6">
            <button
    type="submit"
    className="bg-purple-900 text-white py-2 px-4 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
required  >
    Submit
  </button>
  </div>

  <div className="flex flex-col items-center mt-6">
  <span className="flex justify-center mb-2"></span>
  <a href="/Landing" className="text-purple-700 py-2 px-4 hover:underline font-bold">
    Already a User?
  </a>
</div>
        

  </form>
    </div>
  </div>;

};

export default Signup;
