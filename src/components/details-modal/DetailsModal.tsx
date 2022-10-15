import { Card, CardContent, Modal, Typography } from "@mui/material";
import { Building } from "../../types/Building";

type DetailModalProps = {
  open: boolean;
  onclose: () => void;
  building: Building | undefined;
};

export default function DetailsModal(props: DetailModalProps) {
  return (
    <Modal open={props.open} onClose={props.onclose}>
      <Card>
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
