import { useState, useEffect, useCallback } from "react";
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
  const email = localStorage.getItem("email");

  const handleFetch = useCallback(async () => {
    setIsLoading(true);

    try {
      const user = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUser(user.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  return (
    <>
      <h1>{email}</h1>
      <div>
        <button className="back-to-users" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>

      {!isLoading && user && (
        <div className="user-block">
          <table className="table-user">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      {isLoading && <div>Loading...</div>}
      {!isLoading && !user && <div>User Not Found</div>}
    </>
  );
};

export default UserPage;
