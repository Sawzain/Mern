import React from 'react';
// import Button from 'react-bootstrap/esm/Button'
import { Button } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export const PagenotFound = () => {
    const navigate = useNavigate();
    const redirectHandler = (e) => {
        e.PreventDefault();
        navigate("/");
    }
    return (
        <>
        <h1 className="tect-centre"> Page not Found </h1>
        <Button variant="Primary"> Redirect to Dashboard </Button>
        < navigate to="/" />
        </>
      );
};

