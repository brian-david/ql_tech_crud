import { Box, Card, CardContent, Fab, Stack, Typography } from "@mui/material";
import { useState } from "react";
import RecordCard from "../../components/record-card/RecordCard";
import "./HomePage.scss";

export default function HomePage() {
  const [buildingslist, setBuildingsList] = useState([
    "house 1",
    "house 2",
    "house 3",
  ]);

  return (
    <>
      <div className="container">
        <Stack spacing={2}>
          {buildingslist.map((building: string) => {
            return <RecordCard image={""} title={building} architect={""} />;
          })}
        </Stack>
      </div>
      <Fab>+</Fab>
    </>
  );
}
