import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const {loginUser, googleLogin} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get('email');
    const password = form.get('password');
    
    loginUser(email, password)
    .then(res => {
      toast.success(`${res.user.displayName}, you are successfully logged in!`);
      setTimeout(() => {
        navigate(location?.state? location.state: "/")
      }, 1500);
    })
    .catch(err => {
      if(err.code === "auth/invalid-login-credentials"){
        toast.error('Login error: Email or Password is incorrect!');
      }
    })
  }

  const handleGoogleLogin = () => {
    googleLogin()
    .then(res => {
      console.log(res.user)
      toast.success(`${res.user.displayName} you are successfully logged in!`);
      setTimeout(() => {
        navigate(location?.state? location.state: "/")
      }, 1500);
    })
    .catch(err => toast.error(err.message));
  }

  return (
    <div className="max-w-[1320px] mx-auto">
      <section className="rounded-md">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <div className="p-14 bg-formBg rounded-lg border-2 border-[#4D4C5A]">
            <h2 className="text-3xl font-bold leading-tight text-center">
              Log In Now
            </h2>
            <p className="mt-4 text-base text-secondaryTextColor">
              Don&#x27;t have an account?{" "}
              <Link
                to="/register"
                className="text-btnColor font-semibold transition-all duration-200 hover:underline"
              >
                Please register here
              </Link>
            </p>
            <form className="mt-8" onSubmit={handleLogin}>
              <div className="space-y-5">
                <div>
                  <label className="text-base font-medium">
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md bg-[#353444] border-[1px] border-[#4D4C5A] px-3 py-2 text-sm placeholder:text-secondaryTextColor focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      required
                      name="email"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-base font-medium"> Password </label>
                  </div>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md bg-[#353444] border-[1px] border-[#4D4C5A] px-3 py-2 text-sm placeholder:text-secondaryTextColor focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      required
                      name="password"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-btnColor px-3.5 py-2.5 font-semibold leading-7 text-black hover:bg-black/80 hover:text-white"
                  >
                    Log in{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-5">
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="relative inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold text-white transition-all duration-200 hover:bg-btnColor hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              >
                <span className="mr-2 inline-block">
                  <svg
                    className="h-6 w-6 text-rose-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </span>
                Log in with Google
              </button>
            </div>
          </div>
          <ToastContainer></ToastContainer>
        </div>
      </section>
    </div>
  );
};

export default Login;
