import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Postsstyle.css";

type poststype = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostsPage = () => {
  const [data, setData] = useState<poststype[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const storedValue = localStorage.getItem("email");

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const initialPage = Number(query.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);
  const recordsPerPage = 5;
  const npages = Math.ceil(totalCount / recordsPerPage);
  const navigate = useNavigate();

  const handleFetch = useCallback(async () => {
    setIsLoading(true);

    try {
      const posts = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_start=${
          (currentPage - 1) * recordsPerPage
        }&_limit=${recordsPerPage}`
      );
      setData(posts.data);
      const dataCount = posts.headers["x-total-count"];

      setTotalCount(dataCount);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage]);

  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  const previousPage = () => {
    if (currentPage !== 1) {
      const newpage = currentPage - 1;
      setCurrentPage(newpage);
      navigate(`/users-posts/posts?page=${newpage}`);
    }
  };
  const nextPage = () => {
    if (currentPage !== npages) {
      const newpage = currentPage + 1;
      setCurrentPage(newpage);

      navigate(`/users-posts/posts?page=${newpage}`);
    }
  };
  const handlePostPage = (id: number) => {
    navigate(`/users-posts/posts/post/${id}`);
  };

  return (
    <>
      <div className="posts-page">
        <h1>{storedValue}</h1>
        <div className="go-to-posts">
          <button
            className="btn-users-posts"
            onClick={() => navigate("/users-posts")}
          >
            Go Back
          </button>
        </div>
        <h2>Posts</h2>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="posts-block">
            {data.map((post, index) => (
              <div
                key={index}
                onClick={() => handlePostPage(post.id)}
                className="posts-div"
              >
                <p>
                  <b>UserId:</b>
                  {post.userId}
                </p>
                <p>
                  <b>Id:</b>
                  {post.id}
                </p>
                <p>
                  <b>Title:</b>
                  {post.title}
                </p>
                <p>
                  <b>Body:</b>
                  {post.body}
                </p>
              </div>
            ))}
          </div>
        )}
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
      </div>
    </>
  );
};

export default PostsPage;
