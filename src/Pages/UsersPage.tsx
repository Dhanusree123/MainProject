import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Usersstyle.css";

type Usertype = {
  id: number;
  username: string;
  name: string;
  email: string;
};

const UsersPage = () => {
  const [data, setData] = useState<Usertype[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const email = localStorage.getItem("Email");
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const initialPage = Number(query.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const recordsPerPage = 3;
  const npages = Math.ceil(totalCount / recordsPerPage);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/users?_start=${
          (currentPage - 1) * recordsPerPage
        }&_limit=${recordsPerPage}`
      )
      .then((res) => {
        setData(res.data);
        const dataCount = res.headers["x-total-count"];

        setTotalCount(dataCount);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  const previousPage = () => {
    if (currentPage !== 1) {
      const newpage = currentPage - 1;
      setCurrentPage(newpage);
      navigate(`/users-posts/users?page=${newpage}`);
    }
  };
  const nextPage = () => {
    if (currentPage !== npages) {
      const newpage = currentPage + 1;
      setCurrentPage(newpage);
      navigate(`/users-posts/users?page=${newpage}`);
    }
  };

  const handleUserPage = (id: number) => {
    navigate(`/users-posts/users/user/${id}`);
  };
  return (
    <>
      <div className="users-page">
        <div className="header-users">{email}</div>
        <div className="go-to-usersposts">
          <button
            className="btn-users-posts"
            onClick={() => navigate("/users-posts")}
          >
            Go Back
          </button>
        </div>
        <h2 className="users-h2">Users</h2>
        <div className="users-block">
          <table className="table-users">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user, index) => (
                <tr key={index} onClick={() => handleUserPage(user.id)}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="btns-prev-next">
          <button
            className="btn-users"
            type="button"
            onClick={previousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="btn-users"
            type="button"
            onClick={nextPage}
            disabled={currentPage === npages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
