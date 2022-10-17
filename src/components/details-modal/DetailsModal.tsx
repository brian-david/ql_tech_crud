import { Card, CardContent, Modal, Typography } from "@mui/material";
import { Building } from "../../types/Building";

type DetailModalProps = {
  open: boolean;
  onclose: () => void;
  building: Building | undefined;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  boxShadow: 24,
  p: 4,
  flexGrow: 1,
};

export default function DetailsModal(props: DetailModalProps) {
  return (
    <Modal open={props.open} onClose={props.onclose}>
      <Card sx={style}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.building?.name}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            {props.building?.description}
          </Typography>
        </CardContent>
      </Card>
    </Modal>
  );
}
