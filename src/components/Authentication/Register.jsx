import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const [registerError, setRegisterError] = useState(null);
  const [registerSuccess, setRegisterSuccess] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const image = form.get("image");
    const email = form.get("email");
    const password = form.get("password");
    setRegisterSuccess("");
    setRegisterError("");

    if(password.length < 6){
        setRegisterError('Password must be at least 6 characters long!');
        return;
    }else if(!/[A-Z]/.test(password)){
        setRegisterError( 'Your password must contain at least one uppercase character!');
        return;
      }else if (!/[!@#$%^&*()_+{}\\[\]:;<>,.?~\\-]/.test(password)) {
        setRegisterError("Password must contain at least one special character.");
        return;
      }

    registerUser(email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName: name,
          photoURL: image
        })
          .then()
          .catch((err) => toast.error(err.message));

        const user = {name, email, image, password};
        fetch('https://brand-shop-server-side-71jynkzgp-tanvir-hossains-projects.vercel.app/users', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

        setRegisterSuccess(`${name}, you have been registered successfully`);
        setTimeout(() => {
            navigate(location?.state ? location.state : "/");
        }, 1500);
      })
      .catch((err) => {
        setRegisterError(err.message);
      });
  };

  useEffect(() => {
    registerSuccess && toast.success(registerSuccess);
    registerError && toast.error(registerError);
  }, [registerSuccess, registerError]);

  return (
    <div className="dark:bg-gradient-to-t from-[#141420a6] to-[#141420]">
    <div className="max-w-[1320px] mx-auto">
      <section className="rounded-md py-20">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <div className="p-5 lg:p-14 bg-[#FFFAFA] dark:bg-formBg  rounded-lg border-2 border-stone-500 dark:border-[#4D4C5A]">
            <h2 className="text-3xl font-bold leading-tight text-center">
              Register Now
            </h2>
            <p className="mt-4 text-base text-secondaryTextColor">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-btnColor font-semibold transition-all duration-200 hover:underline"
              >
                Please Log In here
              </Link>
            </p>
            <form className="mt-8" onSubmit={handleRegister}>
              <div className="space-y-5">
                <div>
                  <label className="text-base font-medium"> Your Name </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md bg-[#F5F5F5] dark:bg-[#353444] border-[1px] border-[#4D4C5A] px-3 py-2 text-sm placeholder:text-secondaryTextColor focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      required
                      name="name"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-base font-medium"> Your Image </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md bg-[#F5F5F5] dark:bg-[#353444] border-[1px] border-[#4D4C5A] px-3 py-2 text-sm placeholder:text-secondaryTextColor focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      required
                      name="image"
                      placeholder="Enter your Image URL"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-base font-medium">
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md bg-[#F5F5F5] dark:bg-[#353444] border-[1px] border-[#4D4C5A] px-3 py-2 text-sm placeholder:text-secondaryTextColor focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
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
                      className="flex h-10 w-full rounded-md bg-[#F5F5F5] dark:bg-[#353444] border-[1px] border-[#4D4C5A] px-3 py-2 text-sm placeholder:text-secondaryTextColor focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
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
                    Register{" "}
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
            <ToastContainer></ToastContainer>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Register;
