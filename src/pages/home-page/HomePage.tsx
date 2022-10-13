import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { useState } from "react";

export default function HomePage() {
  const [buildingslist, setBuildingsList] = useState([
    "house 1",
    "house 2",
    "house 3",
  ]);

  return (
    <Stack spacing={2}>
      {buildingslist.map((building: string) => {
        return (
          <Card sx={{ minWidth: 275 }}>
            <CardContent>{building}</CardContent>
          </Card>
        );
      })}
    </Stack>
  );
}
