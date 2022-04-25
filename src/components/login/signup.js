import logoyellow from "../../images/star-wars-yellow.png";
import "./login.css";
import { useForm } from "react-hook-form";


function SignUp({close, handleRegister}) {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (event) => {
        console.log("-> 1. SUBMIIIT!!!", event)
        handleRegister({event});
  }

  return (
    <div className="cover">
      <div className="popup">
        <button className="close-button" onClick={close}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
            />
            <path
              fillRule="evenodd"
              d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
            />
          </svg>
        </button>
        <div>
          <img src={logoyellow} alt="" />
        </div>
        <p>CREATE YOUR ACCOUNT</p>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="email"
          placeholder="email"
          {...register("email", { 
              required: {
                value: true,
                message: "Please, enter your email" 
            },
                pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Email adress is invalid"
            }
            })}
        ></input>
        <span >
    {errors.email && errors.email.message}
        </span><br/>
        <input
          type="password"
          name="password"
          placeholder="Password"
          {...register("password", { 
            required: {
              value: true,
              message: "Please, enter a password" 
          },
              minLength: {
                  value: 5,
                  message: "Use at least 6 characters"
          }
          })}
        ></input>
        <span >
            {errors.password && errors.password.message}
        </span>
        <br />
        <input type="checkbox"/>
        <label >
          Yes! I would like to receive by email special offers and updates about
          Lucasfilm Ltd. and other products and services from The Walt Disney
          Family of Companies.
        </label>
        <p>
          By creating an account, you agree to our Terms of Use and acknowledge
          that you have read our Privacy Policy, Cookies Policy and EU Privacy
          Rights. More...
        </p>
        <button>CREATE ACCOUNT</button>
        </form>
        <p>Already have an account? Sign in</p>
      </div>
    </div>
  );
}

export default SignUp;
