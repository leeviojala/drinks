import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Recepies from "./Recepies";

export default function Home() {
  const handleLogout = () => {
    sessionStorage.removeItem("Auth token");
    navigate("/Login");
  };
  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth token");
    if (authToken === null) {
      navigate("/login");
    }
    // if (authToken !== null) {
    //   navigate("/recepies");
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
      <Recepies></Recepies>
    </div>
  );
}
