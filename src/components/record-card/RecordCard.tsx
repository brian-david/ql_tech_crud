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
import { Building } from "../../types/Building";

type RecordCardProps = {
  building: Building;
};

export default function RecordCard(props: RecordCardProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require("../../images/HAC_photo_by_Iwan_Baan_(2).jpg")}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.building.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            architect: {props.building.architectId}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          more info
        </Button>
      </CardActions>
    </Card>
  );
}
