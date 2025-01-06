import { useNavigate } from "react-router-dom";
import ironbox from "../assets/ironbox.webp";
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
      <div className="ironbox">
        <img src={ironbox} width="300px" height="300px" />
        <div>
          <b>Premium Electric Ironbox - Efficient, Durable, and Easy to Use </b>
          Upgrade your ironing experience with our{" "}
          <b>Premium Electric Ironbox</b>, designed for seamless wrinkle removal
          and a polished finish on all types of fabric. Whether you're tackling
          delicate garments or heavy-duty linens, this ironbox ensures
          professional results every time. <b> Key Features:</b>{" "}
          <ul>
            <li>
              <b>Powerful Heating Element:</b> 2000W for quick and even heat
              distribution.
            </li>
            <li>
              <b>Non-Stick Soleplate:</b> Glides effortlessly over fabrics,
              preventing sticking or scorching.
            </li>
            <li>
              <b>Variable Temperature Control:</b> Tailor the heat settings to
              suit cotton, silk, wool, and more.
            </li>
            <li>
              <b>Steam Burst Function: </b>Eliminates tough wrinkles with ease,
              even in vertical positions.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Post2;
