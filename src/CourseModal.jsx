/** @format */

import React, { useEffect, useState } from "react";

const CourseModal = ({ isOpen, onClose }) => {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("Uttarakhand"); // default

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("IN"); // DEFAULT INDIA
  const [dialCode, setDialCode] = useState("+91");

  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState({
    mobile: "",
    email: "",
    state: "",
  });

  // FETCH STATES
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const res = await fetch(
          "https://countriesnow.space/api/v0.1/countries/states"
        );
        const data = await res.json();
        const india = data.data.find((c) => c.name === "India");
        if (india) {
          setStates(india.states.map((s) => s.name));
        }
      } catch (err) {
        console.error("State API Error:", err);
      }
    };

    fetchStates();
  }, []);

  // FETCH COUNTRIES + DIAL CODES
  useEffect(() => {
    const fetchCountryCodes = async () => {
      try {
        const res = await fetch(
          "https://countriesnow.space/api/v0.1/countries/codes"
        );
        const data = await res.json();

        setCountries(data.data);

        // Default India setup
        const india = data.data.find((c) => c.iso2 === "IN");
        if (india) {
          setSelectedCountry(india.iso2);
          setDialCode(india.dial_code);
        }
      } catch (err) {
        console.error("Country Code API Error:", err);
      }
    };

    fetchCountryCodes();
  }, []);

  // FORM VALIDATION
  const validate = () => {
    let tempErrors = { mobile: "", email: "", state: "" };
    let isValid = true;

    if (!mobile || mobile.length < 10) {
      tempErrors.mobile = "Please enter a valid mobile number";
      isValid = false;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!selectedState) {
      tempErrors.state = "Please select a state";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleVerifyOTP = () => {
    if (validate()) {
      alert(`OTP sent to ${dialCode} ${mobile}`);
    }
  };

  // Close modal condition
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl w-[90%] md:w-[450px] p-6 shadow-lg relative">
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl font-semibold mb-5">Please fill the details</h2>

        {/* MOBILE */}
        <label className="text-sm font-medium">Mobile Number*</label>
        <div className="flex gap-2 mt-1">
          {/* COUNTRY CODE DROPDOWN */}
          {/* <select
            className="border rounded-lg p-2 w-36 text-gray-600"
            value={selectedCountry}
            onChange={(e) => {
              const code = e.target.value;
              setSelectedCountry(code);

              const found = countries.find((c) => c.iso2 === code);
              setDialCode(found?.dial_code || "+91");
            }}
          >
            {countries.length === 0 ? (
              <option>Loading...</option>
            ) : (
              countries.map((c) => (
                <option key={c.iso2} value={c.iso2}>
                  {c.name} ({c.dial_code})
                </option>
              ))
            )}
          </select> */}

          <input
            type="number"
            placeholder="e.g. 81XXXXXXXX"
            className={`border rounded-lg p-2 flex-1 outline-none ${
              errors.mobile ? "border-red-500" : "border-gray-300"
            }`}
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        {errors.mobile && (
          <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
        )}

        {/* EMAIL */}
        <label className="text-sm font-medium mt-4 block">Email*</label>
        <input
          type="email"
          placeholder="Enter your Email"
          className={`border rounded-lg p-2 w-full outline-none ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}

        {/* STATE */}
        <label className="text-sm font-medium mt-4 block">State*</label>
        <select
          className={`border rounded-lg p-2 w-full ${
            errors.state ? "border-red-500" : "border-gray-300"
          }`}
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
        >
          {states.length === 0 ? (
            <option>Loading...</option>
          ) : (
            states.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))
          )}
        </select>
        {errors.state && (
          <p className="text-red-500 text-sm mt-1">{errors.state}</p>
        )}

        {/* BUTTON */}
        <button
          onClick={handleVerifyOTP}
          disabled={!mobile || !email || !selectedState}
          className={`w-full py-3 rounded-lg mt-6 text-white ${
            mobile && email && selectedState
              ? "bg-blue-500 cursor-pointer"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Verify via OTP
        </button>
      </div>
    </div>
  );
};

export default CourseModal;
