import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPagestyle.css";
type FormValues = {
  username: string;
  email: string;
};

const LoginPage = () => {
  const form = useForm<FormValues>();
  const { register, formState } = form;
  const { errors, isDirty, isValid } = formState;
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLocalStorage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredMail = (e.target as HTMLFormElement).email.value;
    localStorage.setItem("Email", enteredMail);
    setEmail(enteredMail);
    console.log(email);
    alert("Details Saved Successfully");
    navigate("/usersposts");
  };
  return (
    <>
      <div className="login-page">
        <div className="login-block">
          <h1>Login Form</h1>
          <form onSubmit={handleLocalStorage} noValidate>
            <div className="form-input">
              <input
                type="text"
                id="username"
                placeholder="enter your name"
                {...register("username", {
                  required: {
                    value: true,
                    message: "username is required",
                  },
                })}
              />
              <p className="error-control">{errors.username?.message}</p>
            </div>
            <div className="form-input">
              <input
                type="email"
                id="email"
                placeholder="enter your email-id"
                {...register("email", {
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "mail-id is required",
                  },
                })}
              />
              <p className="error-control">{errors.email?.message}</p>
            </div>
            <button disabled={!isDirty || !isValid} className="btn-login">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
