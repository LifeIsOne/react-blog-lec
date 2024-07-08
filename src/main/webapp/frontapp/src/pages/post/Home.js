import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import PostItem from "../../components/PostItem";
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    apiHome();
  }, []);
  
  async function apiHome(){
    let response = await axios({
      url: "http://localhost:8080",
      method: "GET"
    });

    console.log("posts", response.data);
    setPosts(response.data.body);
  }

  function prev() {}
  function next() {}

  return (
    <div>
      {posts.map((post) => (
        <PostItem id={1} title={"제목1"} />
      ))}
      {/* {<PostItem id={1} title={"제목1"} />} */}
      {<PostItem id={2} title={"제목2"} />}
      <br />
      <div className="d-flex justify-content-center">
        <Pagination>
          <Pagination.Item onClick={prev} disabled>
            Prev
          </Pagination.Item>
          <Pagination.Item onClick={next}>Next</Pagination.Item>
        </Pagination>
      </div>
    </div>
  );
};

export default Home;