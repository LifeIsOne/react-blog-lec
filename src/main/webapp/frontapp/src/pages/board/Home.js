import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import axios from "axios";
import BoardItem from "../../components/BoardItem";

const Home = () => {
  const [model, setPage] = useState({
     totalPage: undefined,
     number   : undefined,
     isFirst  : true,
     isLast   : false,
     boards   : [],
  });

  useEffect(() => {
    apiHome();
  }, []);
  
  async function apiHome(){
    let response = await axios({
      url   : "http://localhost:8080",
      method: "GET"
    });

    console.log("model", response.data.body);

    setPage(response.data.body);
  }

  function prev() {}
  function next() {}

  return (
    <div>
      {model.boards.map((board) => (
        <BoardItem key={board.id} id={board.id} title={board.title} />
      ))}
      {/* {<BoardItem id={1} title={"제목1"} />} */}
      {<BoardItem id={2} title={"제목2"} />}
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