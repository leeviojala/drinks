import React from "react";
import fb from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { getFirestore, collection } from "firebase/firestore";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Navigate, Route, useMatch, useNavigate } from "react-router-dom";
import Drink from "./Drink";

export default function Recepies() {
  let navigate = useNavigate();
  const firestore = getFirestore(fb);
  const recepiesRef = collection(firestore, "drinks");
  const query = recepiesRef;
  const [recepies, loading, error] = useCollection(query, {});
  if (!loading) {
    console.log(recepies.docs.map((doc) => doc.data()));
  }

  return (
    <div>
      <List>
        {recepies &&
          recepies.docs.map((doc) => (
            <ListItem
              divider={true}
              onClick={() => navigate(`/recepies/${doc.id}`)}
            >
              <ListItemAvatar>
                <Avatar src={doc.data().images[0].downloadUrl}></Avatar>
              </ListItemAvatar>
              <ListItemText primary={doc.data().name}></ListItemText>
            </ListItem>
          ))}
      </List>
    </div>
  );
}
