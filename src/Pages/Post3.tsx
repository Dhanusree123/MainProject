import { useNavigate } from "react-router-dom";
import induction from "../assets/induction.webp";
import { useEffect, useState } from "react";
const Post2 = () => {
  const [email, setEmail] = useState<string>();
  const storedValue = localStorage.getItem("Email");
  const navigate = useNavigate();
  useEffect(() => {
    if (storedValue) {
      setEmail(storedValue);
    }
  }, [storedValue]);
  return (
    <>
      <div className="mail-data">{email}</div>
      <div>
        <button className="btn-back-post1" onClick={() => navigate("/posts")}>
          Go Back
        </button>
      </div>
      <div className="induction">
        <img src={induction} width="300px" height="300px" />
        <div>
          <b>Efficient Induction Cooker – Fast, Safe, and Smart Cooking</b>
          Revolutionize your kitchen with our Advanced Induction Cooker,
          designed for speed, precision, and energy efficiency. Perfect for
          modern cooking, it ensures every meal is cooked to perfection with
          minimal effort.
          <ul>
            <b>Key Features:</b>
            <li>
              <b>Rapid Heating Technology:</b>2000W power for instant and even
              heating, reducing cooking time significantly.
            </li>
            <li>
              <b>Touch Control Panel:</b> Intuitive controls with LED display
              for hassle-free operation.
            </li>
            <li>
              <b>10 Adjustable Power Levels:</b>Customize settings for boiling,
              simmering, frying, or slow cooking.
            </li>
            <li>
              <b>Child Lock and Overheat Protection:</b> Enhanced safety
              features to prevent accidents in the kitchen.
            </li>
            <li>
              <b>Auto Pan Detection:</b>Works only with induction-compatible
              cookware, adding to its energy efficiency.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Post2;
