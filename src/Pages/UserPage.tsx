import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/Usersstyle.css";

type Usertype = {
  id: number;
  username: string;
  name: string;
  email: string;
};
const UserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState<Usertype | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const email = localStorage.getItem("Email");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [id]);

  if (!user) {
    return <div>User Not Found ..!</div>;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <>
      <h1>{email}</h1>
      <div>
        <button
          className="back-to-users"
          onClick={() => {
            navigate("/users-posts/users");
          }}
        >
          Go Back
        </button>
      </div>
      <div className="user-block">
        <table className="table-user">
          <thead>
            <tr>
              <th>UserId</th>
              <th>Id</th>
              <th>Title</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserPage;
