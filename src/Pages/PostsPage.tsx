import Mixer from "../assets/mixer.webp";
import Ironbox from "../assets/ironbox.webp";
import Induction from "../assets/induction.webp";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const PostsPage = () => {
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
      <div className="posts-header"></div>
      <div className="container-posts">
        <div className="post1">
          <button className="btn-post1" onClick={() => navigate("/post1")}>
            <div className="left">
              <img src={Mixer} width="150px" height="150px" />
            </div>
            <div className="right">
              <h4>Food Processors: Get the Deals</h4>
              <p>
                A food processor is a versatile kitchen appliance designed to
                automate food preparation tasks such as chopping, slicing,
                grating, and pureeing. Food processors save time and effort in
                the kitchen, enhancing cooking efficiency.
              </p>
            </div>
          </button>
        </div>
        <div className="post2">
          <button className="btn-post2" onClick={() => navigate("/post2")}>
            <div className="left">
              <img src={Ironbox} width="150px" height="150px" />
            </div>
            <div className="right">
              <h4>Iron Box: Perfect for Effortless, Crisp Clothing</h4>
              <p>
                Our iron box is designed to give your clothes a smooth,
                wrinkle-free finish with ease. Featuring advanced heating
                technology and steam control, it ensures fast and efficient
                ironing, making it the ideal choice for everyday use. Upgrade
                your wardrobe care with our reliable, high-performance iron box!
              </p>
            </div>
          </button>
        </div>
        <div className="post3">
          <button className="btn-post3" onClick={() => navigate("/post3")}>
            <div className="left">
              <img src={Induction} width="150px" height="150px" />
            </div>
            <div className="right">
              <h4>Induction Cooker: Fast, Efficient, and Modern Cooking</h4>
              <p>
                Experience the future of cooking with our induction cooker,
                offering quick heat-up times and precise temperature control.
                Its energy-efficient design and sleek appearance make it the
                perfect addition to any modern kitchen, delivering fast, safe,
                and convenient cooking for everyday meals.
              </p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default PostsPage;
