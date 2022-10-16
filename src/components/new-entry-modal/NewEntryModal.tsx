import { Button, Modal, TextField } from "@mui/material";
import { Box } from "@mui/system";
import Grid from "@mui/material/Unstable_Grid2";

type NewEntryModalProps = {
  open: boolean;
  onclose: () => void;
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

export default function NewEntryModal(props: NewEntryModalProps) {
  return (
    <Modal open={props.open} onClose={props.onclose}>
      <Box component="form" sx={style}>
        <Grid display="flex" justifyContent="center" container spacing={2}>
          <Grid md={6}>
            <TextField
              id="building-name"
              label="Building name"
              variant="outlined"
            />
          </Grid>
          <Grid md={6}>
            <TextField
              id="building-style"
              label="Architectural style"
              variant="outlined"
            />
          </Grid>
          <Grid md={6}>
            <TextField
              id="building-year"
              label="building name"
              variant="outlined"
            />
          </Grid>
          <Grid md={6}>
            <TextField
              id="building-name"
              label="building name"
              variant="outlined"
            />
          </Grid>
          <Grid md={6}>
            <TextField
              id="building-name"
              label="building name"
              variant="outlined"
            />
          </Grid>
          <Grid md={6}>
            <TextField
              id="building-name"
              label="building name"
              variant="outlined"
            />
          </Grid>
          <Button variant="contained" color="success">
            Success
          </Button>
        </Grid>
      </Box>
    </Modal>
  );
}
