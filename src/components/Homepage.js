import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Homepage(){
    const [shortData, setShortData] = useState([]);
    const [longUrl, setlongUrl] = useState("");
    const navigate = useNavigate()
  
    useEffect(()=>{
        if(!(localStorage.getItem("x-auth-token"))){
            navigate("/signup")
            alert("Signup to continue")
        }
        else getShortData();
    },[])

    const getShortData = async () => {
      try {
        const response = await fetch(
          "https://url-short-backend-rdzrn4kpr-saravanakumaran08011995.vercel.app/urlRoutes/all",
          {
            method: "GET",
            headers: {
              "x-auth-token": localStorage.getItem("x-auth-token") },
          }
        );
        const data = await response.json();
        setShortData(data);
      } catch (error) {
        if(!(localStorage.getItem("x-auth-token"))){
            navigate("/")
            alert("Signup to continue")
        }
        console.log("Error", error);
      }
    };
  
    
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const res = await fetch(
          "https://url-short-backend-rdzrn4kpr-saravanakumaran08011995.vercel.app/urlRoutes/create",
          {
            method: "POST",
            body: JSON.stringify({
              longUrl,
            }),
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": localStorage.getItem("x-auth-token")},
          }
        );
  
        const data = await res.json();
        getShortData();
        console.log("Successfully added");
        setlongUrl("");
      } catch (error) {
        if(!(localStorage.getItem("x-auth-token"))){
            navigate("/")
            alert("Signup to continue")
        }
        console.log(error);
      }
    };
  
    const handleDelete = async (id) => {
      try {
        const res = await fetch(
          `https://url-short-backend-rdzrn4kpr-saravanakumaran08011995.vercel.app/urlRoutes/delete/${id}`,
          {
            method: "DELETE",
            headers: {
              "x-auth-token":localStorage.getItem("x-auth-token")},
          }
        );
        getShortData();
      } catch (error) {
        if(!(localStorage.getItem("x-auth-token"))){
            navigate("/")
            alert("Signup to continue")
        }
        
        console.log(error);
      }
    };
  
    
  
    return (
      <div className="bg-gray-100">
      <div className="container-lg py-10">
        <h1 className="text-3xl font-bold">URL SHORTENER</h1>
      </div>
    
      <div className="container-lg bg-white rounded-lg shadow-lg p-8">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center border-b border-gray-300 py-2">
            <span className="text-gray-500">Paste URL here</span>
            <input
              type="url"
              className="flex-1 ml-4 px-4 py-2 rounded-lg border border-gray-400 focus:outline-none focus:border-blue-400"
              value={longUrl}
              onChange={(event) => setlongUrl(event.target.value)}
            />
          </div>
    
          <button
            type="submit"
            className="mt-4 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
          >
            Submit
          </button>
        </form>
      </div>
    
      <div className="container-lg mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shortData.map((data, index) => {
            return (
              <div
                className="bg-white rounded-lg shadow-lg p-8"
                key={index}
              >
                <h5 className="text-xl font-bold mb-4">{data.longUrl}</h5>
                <hr />
                <h5 className="text-lg font-bold mt-4">Short URL:</h5>
                <a
                  href={`https://url-short-backend-rdzrn4kpr-saravanakumaran08011995.vercel.app/${data.shortenedUrl}`}
                  className="block text-blue-500 hover:text-blue-700 hover:underline"
                  target="_blank"
                >
                  {`https://url-short-backend-rdzrn4kpr-saravanakumaran08011995.vercel.app/${data.shortenedUrl}`}
                </a>
                <button
                  type="button"
                  className="mt-4 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
                  onClick={() => {
                    handleDelete(data._id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    
    );
}
export default Homepage;