import React, {useState} from 'react'
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

const Login = () => {

  const {setShowLogin, axios, setToken, navigate, setUser } = useAppContext();


  const [state, setState] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e)=>{
    try {
      e.preventDefault();
      const {data} = await axios.post(`/api/users/${state}`, {name, email, password});
      if(data.success) {

        navigate("/");

        setToken(data.token);

        if(data.user) {
          setUser(data.user);
        }
        else {
          setUser({ name: name || "User", email: email });
        }

        localStorage.setItem("token", data.token);
        
        setShowLogin(false);

        
      } 
      else {
        toast.error(data.message);
      }
    } catch (err) {
      toast.error(err.message);


    }
  }

  return (
     <div
      onClick={() => setShowLogin(false)}
      className="fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center text-sm text-gray-600 bg-black/50">
      <form
        onSubmit={submitHandler}
        onClick={(evt) => evt.stopPropagation()}
        className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] text-white rounded-lg shadow-xl border border-[#FFD369] bg-black">
        <p className="text-2xl font-medium m-auto">
          <span className="text-[#FFD369]">User</span>{" "}
          {state === "login" ? "Login" : "Sign Up"}
        </p>
        {state === "register" && (
          <div className="w-full">
            <p>Name</p>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="type here"
              className="border border-[#FFD369] rounded w-full p-2 mt-1 outline-indigo-500"
              type="text"
              required
            />
          </div>
        )}
        <div className="w-full ">
          <p>Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="type here"
            className="border border-[#FFD369] rounded w-full p-2 mt-1 outline-indigo-500"
            type="email"
            required
          />
        </div>
        <div className="w-full ">
          <p>Password</p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="type here"
            className="border border-[#FFD369] rounded w-full p-2 mt-1 outline-primary"
            type="password"
            required
          />
        </div>
        {state === "register" ? (
          <p>
            Already have account?{" "}
            <span
              onClick={() => setState("login")}
              className="text-green-400 cursor-pointer">
              click here to login
            </span>
          </p>
        ) : (
          <p>
            Create an account?{" "}
            <span
              onClick={() => setState("register")}
              className="text-green-400 cursor-pointer">
              click here to register
            </span>
          </p>
        )}
        <button className="bg-green-400 hover:bg-[#FFD369] transition-all text-black font-bold w-full py-2 rounded-md cursor-pointer">
          {state === "register" ? "CREATE ACCOUNT" : "LOGIN"}
        </button>
      </form>
    </div>
  )
}

export default Login