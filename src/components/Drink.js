import React, { useEffect } from "react";
import fb from "../firebase";
import { doc, getFirestore } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { useDocument } from "react-firebase-hooks/firestore";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  ListItem,
  ListItemText,
  Typography,
  List,
  IconButton,
  Slide,
} from "@mui/material";

export default function Drink() {
  const navigate = useNavigate();
  const [visible, setVisible] = React.useState(false);
  let { id } = useParams();
  console.log(id);
  const firestore = getFirestore(fb);
  const [value, loading] = useDocument(doc(firestore, "drinks", id), {});
  useEffect(() => {
    setVisible(true);

    return () => {
      setVisible(false);
    };
  }, []);

  //LAITA URLIIN ID JA HAE TÄSTÄ TIEDOT
  loading ? console.log("loading") : console.log(value.data());
  return !loading ? (
    <Slide direction="right" in={visible} mountOnEnter unmountOnExit>
      <div>
        <IconButton onClick={() => navigate("/recepies")}>
          <ArrowBackIcon></ArrowBackIcon>
        </IconButton>
        <Card>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={value.data().images[0].downloadUrl}
          ></CardMedia>
          <CardContent>
            <Typography variant="h5">{value.data().name}</Typography>
            <List>
              {value.data().ingredients.map((ingredient) => {
                return (
                  <ListItem key={ingredient.ingredientName}>
                    <ListItemText
                      primary={ingredient.ingredientName}
                      secondary={ingredient.ingredientAmount}
                    ></ListItemText>
                  </ListItem>
                );
              })}
            </List>
          </CardContent>
        </Card>
      </div>
    </Slide>
  ) : (
    <div>sf</div>
  );
}
