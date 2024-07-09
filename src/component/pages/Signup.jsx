
import React, { useState, useEffect } from 'react';
import { getData } from 'country-list';

const Signup = () => {
  const [countries, setCountries] = useState([]);
  const [years, setYears] = useState([]);
  const [months, setMonths] = useState([]);
  const [days, setDays] = useState([])

  useEffect(() => {
    const countries = getData().map(country => country.name);
    setCountries(countries);
    const currentYear = new Date().getFullYear();
    const yearsArray = Array.from({ length: currentYear - 1899 }, (_, i) => 1900 + i);
    setYears(yearsArray);
    const monthsArray = Array.from({ length: 12 }, (_, i) => i + 1);
    setMonths(monthsArray);
    const daysArray = Array.from({ length: 31 }, (_, i) => i + 1);
    setDays(daysArray);
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
          
          <label className="block text-purple-900 font-bold" htmlFor="age">Age</label>
            <div className="flex space-x-2">
              <select
                id="days"
                className="w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              >
                {days.map((day, index) => (
                  <option key={index} value={day}>{day}</option>
                ))}
              </select>
              <select
                id="months"
                className="w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              >
                {months.map((month, index) => (
                  <option key={index} value={month}>{month}</option>
                ))}
              </select>
              <select
                id="years"
                className="w-1/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              >
                {years.map((year, index) => (
                  <option key={index} value={year}>{year}</option>
                ))}
              </select>
              
            </div>
            
            <div>
<label className="block text-purple-900 font-bold" >Addresss</label>
            <input
              id="Address"
              type="text"
         class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 
         shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="input your address"
              required
            />
            </div>
            <br />
            <br />
            
            <div className="flex justify-center mt-6">
            <button
    type="submit"
    className="bg-purple-900 text-white py-2 px-4 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
required  >
    Submit
  </button>
  <span className="text-gray-500 justify-center mt-6"></span>
  <a href="/Landing" className="text-purple-600 hover:underline justify-center mt-6 font-bold">Login</a>
 
  </div>
  
          <div>
</div>
  </form>
    </div>
  </div>;

};

export default Signup;
