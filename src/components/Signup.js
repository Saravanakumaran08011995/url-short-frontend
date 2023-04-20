import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (signup) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signUp = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(
        "https://url-short-backend-rdzrn4kpr-saravanakumaran08011995.vercel.app/signup",
        {
          method: "POST",
          body: JSON.stringify({
            name,
            email,
            password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();
      localStorage.setItem("x-auth-token", data.Authtoken);
      navigate("/homepage");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div class="container mx-auto py-12">
      <form
        class="max-w-lg mx-auto bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
        onSubmit={(event) => signUp(event)}
      >
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="name">
            Name
          </label>
          <input
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="email">
            Email
          </label>
          <input
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 font-bold mb-2" for="password">
            Password
          </label>
          <input
            class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
          <button
            type="button"
            class="text-blue-500 hover:text-blue-700 font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
            onClick={() => navigate("/login")}
          >
            Already Have an Account?
          </button>
        </div>
      </form>
    </div>
  );
};
export default Signup;
