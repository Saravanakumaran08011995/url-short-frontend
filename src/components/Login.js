import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Login(){

    const [email,setEmail]= useState();
    const [password,setPassword]=useState();
    const navigate = useNavigate();


    const login=async(event)=>{
        event.preventDefault();

        const res = await fetch(
            "https://url-short-backend-rdzrn4kpr-saravanakumaran08011995.vercel.app/login",
            {
                method:"POST",
                body:JSON.stringify({
                    email,
                    password
                }),
                headers:{
                    "Content-Type": "application/json",
                }
            }
        );

        const data = await res.json();
        alert(data.message)
        localStorage.setItem("x-auth-token",data.token);
        navigate("/homepage")
    }
    return(
      <div class="container-lg">
      <form onSubmit={(event)=>{login(event)}} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="email">
            Enter your Registered E-mail
          </label>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email address"
          />
        </div>
    
        <div class="mb-6">
          <label class="block text-gray-700 font-bold mb-2" for="password">
            Enter your password
          </label>
          <input
            type="password"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            id="password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
          />
        </div>
    
        <div class="flex items-center justify-between">
          <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
          <button type="button" onClick={()=>navigate("/")} class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
            New to here?
          </button>
        </div>
    
      </form>
    </div>
    
    )
}

export default Login;