import { Card, CardContent } from "@mui/material";

type RecordCardProps = {
  image: string;
  title: string;
  architect: string;
};

export default function RecordCard(props: RecordCardProps) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>{props.title}</CardContent>
    </Card>
  );
}
