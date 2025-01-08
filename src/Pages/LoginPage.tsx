import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPagestyle.css";
type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const form = useForm<FormValues>();
  const { register, formState, handleSubmit } = form;
  const { errors } = formState;
  const navigate = useNavigate();

  const handleLocalStorage = (data: FormValues) => {
    const mailLocal = localStorage.getItem("Email");
    const passwordLocal = localStorage.getItem("Password");
    if (mailLocal !== data.email && passwordLocal !== data.password) {
      alert("Please enter valid email and password");
      return;
    }
    if (mailLocal !== data.email) alert("Please enter the correct email");
    if (passwordLocal !== data.password)
      alert("Please enter the correct password");
    if (mailLocal === data.email && passwordLocal === data.password) {
      navigate("/users-posts");
    }
  };

  return (
    <>
      <div className="form-block">
        <form onSubmit={handleSubmit(handleLocalStorage)} noValidate>
          <p className="p-login">LOGIN</p>
          <div className="form-input">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
            />
            <p className="error-control">{errors.email?.message}</p>
          </div>
          <div className="form-input">
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
            />
            <p className="error-control">{errors.password?.message}</p>
          </div>
          <button className="btn-login" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
