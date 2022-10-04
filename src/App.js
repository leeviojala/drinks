import "./App.css";
import Login from "./components/Login";
import { Container } from "@mui/system";
import { Snackbar } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import React from "react";
import Home from "./components/Home";
import Drink from "./components/Drink";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  // useEffect(() => {
  //   let authToken = sessionStorage.getItem("Auth token");

  //   if (authToken !== null) {
  //     navigate("/recepies");
  //   }
  // }, []);

  const handleAction = (id) => {
    const autentication = getAuth();
    if (id === 1) {
      signInWithEmailAndPassword(autentication, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          sessionStorage.setItem("Auth token", user.uid);
          navigate("/recepies");
          // ...
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          setOpen(true);
        });
    }
    if (id === 2) {
      createUserWithEmailAndPassword(autentication, email, password).then(
        (res) => {
          console.log(res);
          navigate("/recepies");
          sessionStorage.setItem("Auth token", res._tokenResponse.refreshToken);
        }
      );
    }
  };
  return (
    <Container>
      <Routes>
        <Route
          path="/login"
          element={
            <Login
              title={"login"}
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(1)}
              sx={{ maxWidth: 300 }}
            ></Login>
          }
        />
        <Route
          path="/Register"
          element={
            <Login
              title={"register"}
              setEmail={setEmail}
              setPassword={setPassword}
              handleAction={() => handleAction(2)}
              sx={{ maxWidth: 300 }}
            ></Login>
          }
        />
        <Route path="/recepies" element={<Home></Home>}></Route>
        <Route path="/recepies/:id" element={<Drink></Drink>}></Route>
      </Routes>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        message={errorMessage}
        onClose={() => setOpen(false)}
      ></Snackbar>
    </Container>
  );
}

export default App;
