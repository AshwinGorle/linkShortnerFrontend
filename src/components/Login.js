import React, { useState } from "react";
import { redirect } from "react-router";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { BASE_URL } from "../static";

export default function Login() {
     const [inputEmail, setInputEmail] = useState("");
     const [inputPassword, setInputPassword] = useState("");
     const navigate = useNavigate();
     const handleSubmit = async (e)=>{
      e.preventDefault()
      console.log("entered in handle submit")
        try{
          const response = await fetch(`${BASE_URL}/login`,{
            method : "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body : JSON.stringify({
              email : inputEmail,
              password : inputPassword
            })
          })
          console.log(response)
          if(response.ok){
             const data = await response.json();
             localStorage.setItem("token", `Bearer ${data.token}`);
             navigate('/home')
          }else{
            navigate('/login')
          }
        }catch(err){
           console.log("user login error : ", err)
        }
     }
  return (
    
      <div class="flex items-center justify-center min-h-screen bg-gray-100 rounded-lg">
        <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-lg">
          <div class="flex justify-center">
            <div className="text-2xl font-bold">
              <span className="text-gray-700">Ashwin</span>
              <span className="text-blue-500">.dev</span>
            </div>
          </div>
          <h3 class="text-2xl font-bold text-center text-blue-500">Login</h3>
          <form action="">
            <div class="mt-4">
              <div>
                <label class="block" for="email">
                  Email
                </label>
                <input
                  type="text"
                  value={inputEmail}
                  onChange={(e)=>setInputEmail(e.target.value)}
                  placeholder="Email"
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
                <span class="text-xs tracking-wide text-red-600">
                  Email field is required{" "}
                </span>
              </div>
              <div class="mt-4">
                <label class="block">Password</label>
                <input
                  type="password"
                  value={inputPassword}
                  onChange = {(e)=>setInputPassword(e.target.value)}
                  placeholder="Password"
                  class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div class="flex items-baseline justify-between">
                <button class="px-6 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-900"
                onClick={handleSubmit}
                >
                  Login
                </button>
                <div className=" flex flex-col justify-center">
                <Link to="/signup">
                  Forgot password?
                </Link>
                <Link to="/signup"> 
                  Don't have account ?
                </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    
  );
}
