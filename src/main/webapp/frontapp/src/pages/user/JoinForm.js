import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const JoinForm = (props) => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        password: "",
        email   : "",
    });
    
    function changeValue(e){
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    async function submitJoin(e){
        e.preventDefault(); // action 막기
        let response = axios({
            url     : "http://localhost:8080/join",
            method  : "POST",
            headers : {
                'Content-Type'  : 'application/json; charset=utf-8'
            },
            data    : user
        });

        if(response.status === 200){
            navigate("/loginForm");
        }else{
            alert(response.data.msg);
        }
    }

    return (
        <Form>
        <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                onChange={changeValue}
            />
        </Form.Group>

        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                placeholder="Enter password"
                name="password"
                onChange={changeValue}
            />
        </Form.Group>

        <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={changeValue}
            />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submitJoin}>
            회원가입
        </Button>
        </Form>
    );
};

export default JoinForm;