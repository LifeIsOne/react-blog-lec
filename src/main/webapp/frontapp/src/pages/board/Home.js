import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import axios from "axios";
import BoardItem from "../../components/BoardItem";

const Home = () => {
  const [ page, setPage ] = useState(0);

  const [model, setModel] = useState({
     totalPage: undefined,
     number   : undefined,
     isFirst  : true,
     isLast   : false,
     boards   : [],
  });

  useEffect(() => {
    console.log("userEffect 실행 됨!");
    apiHome();
  }, [page]);
  
  async function apiHome(){
    let response = await axios({
      url   : "http://localhost:8080?page=" + page,
      method: "GET"
    });

    console.log("model", response.data.body);

    setModel(response.data.body);
  }

  function prev() {
    console.log("prev 실행 됨! page : " + page);
    setPage(page - 1);
  }
  function next() {
    console.log("next 실행 됨! page : " + page);
    setPage(page + 1);
  }

  return (
    <div>
      {model.boards.map((board) => (
        <BoardItem key={board.id} id={board.id} title={board.title} />
      ))}
      <br />
      <div className="d-flex justify-content-center">
        <Pagination>
          <Pagination.Item onClick={prev} disabled={model.isFirst}>
            Prev
          </Pagination.Item>
          <Pagination.Item onClick={next} disabled={model.isLast}>
            Next
          </Pagination.Item>
        </Pagination>
      </div>
    </div>
  );
};

export default Home;