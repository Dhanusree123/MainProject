import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

type Usertype = {
  id: number;
  username: string;
  name: string;
  email: string;
};

const UsersPage = () => {
  const [data, setData] = useState<Usertype[]>([]);
  const [email, setEmail] = useState<string>();
  const storedValue = localStorage.getItem("Email");
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const initialPage = Number(query.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const recordsPerPage = 3;
  const npages = Math.ceil(10 / recordsPerPage);
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
      })
      .catch((err) => console.log(err));

    if (storedValue) {
      setEmail(storedValue);
    }
    // console.log(currentPage);
  }, [currentPage, storedValue]);

  const previousPage = () => {
    if (currentPage !== 1) {
      const newpage = currentPage - 1;
      setCurrentPage(newpage);
      navigate(`?page=${newpage}`);
    }
  };
  const nextPage = () => {
    if (currentPage !== npages) {
      const newpage = currentPage + 1;
      setCurrentPage(newpage);
      navigate(`?page=${newpage}`);
    }
  };

  return (
    <>
      <div className="header-users">{email}</div>
      <div className="go-to-usersposts">
        <button
          className="btn-users-posts"
          onClick={() => navigate("/usersposts")}
        >
          Go Back
        </button>
      </div>
      <h2 className="users-h2">Users List</h2>
      <div className="users-block">
        <table>
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
              <tr key={index}>
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
          type="button"
          onClick={previousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          type="button"
          onClick={nextPage}
          disabled={currentPage === npages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default UsersPage;
