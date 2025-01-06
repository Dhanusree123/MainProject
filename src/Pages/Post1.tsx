import { useNavigate } from "react-router-dom";
import mixer from "../assets/mixer.webp";
import { useEffect, useState } from "react";
const Post1 = () => {
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
      <div className="mixer">
        <img src={mixer} width="300px" height="300px" />
        <div>
          <h3>Description for Sales:</h3>
          <b>Product Overview</b>
          Our state-of-the-art mixer is the perfect blend of functionality,
          durability, and sleek design, tailored to meet the needs of both
          professional and home users. With advanced features and high-quality
          materials, this mixer ensures superior performance and ease of use,
          making it a must-have for kitchens of all sizes.
          <ul>
            <b>Key Features</b>
            <li>
              <b>Powerful Motor:</b> Equipped with a [XX]-watt motor, this mixer
              delivers consistent, reliable power to handle everything from
              light whisking to heavy-duty mixing.
            </li>
            <li>
              <b>Variable Speed Settings:</b>
              Multiple speed options allow precise control for a variety of
              tasks, including kneading dough, whipping cream, and blending
              ingredients.
            </li>
            <li>
              <b>Durable Build</b>
              Built with [material, e.g., stainless steel housing], the mixer is
              designed to withstand daily use while maintaining its sleek,
              modern appearance.
            </li>
            <li>
              <b>Versatile Attachments</b>
              Comes with a variety of attachments, such as: - Dough hook - Whisk
              - Flat beater Each attachment is designed for specific tasks,
              ensuring optimal results every time.
            </li>
            <li>
              <b>Large Capacity Bowl</b>
              The [XX]-liter capacity mixing bowl accommodates both small and
              large recipes, perfect for personal meals or entertaining guests.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Post1;
