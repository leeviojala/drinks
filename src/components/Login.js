import {
  Grid,
  Paper,
  TextField,
  Button,
  Card,
  CardContent,
  Box,
  CardHeader,
} from "@mui/material";
import { Container, Stack } from "@mui/system";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import React from "react";
import firebase from "../firebase";

export default function Login({ title, setPassword, setEmail, handleAction }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ width: 300 }}>
        <CardContent>
          <CardHeader title={title}></CardHeader>
          <Stack spacing={2}>
            <TextField
              label="email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>

            <TextField
              label="password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
            <Button variant="outlined" onClick={handleAction}>
              {title}
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
