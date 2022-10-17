import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { Building } from "../../types/Building";

type RecordCardProps = {
  building: Building;
  setSelected: (building: Building) => void;
};

export default function RecordCard(props: any) {
  useEffect(() => {
    console.log("RecordCard");
    console.log("PROPS", props);
  }, [props]);

  return (
    <Card
      sx={{ height: "100%", display: "flex", flexDirection: "column" }}
      onClick={() => props.setSelected(props.building)}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" image={props.building.image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.building.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* architect: {props.building.architect.name} */}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
