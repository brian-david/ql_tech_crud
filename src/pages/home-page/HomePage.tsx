import { Container, CssBaseline, Fab, Grid } from "@mui/material";
import NavBar from "../../components/nav-bar/NavBar";
import RecordCard from "../../components/record-card/RecordCard";
import { Building } from "../../types/Building";
import "./HomePage.scss";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import DetailsModal from "../../components/details-modal/DetailsModal";

const buildings = [
  {
    id: 1,
    architectId: 1,
    style: "Modern",
    yearOfCompletion: new Date("1959-01-01"),
    place: "New York City",
    name: "The Guggenheim",
    descrcription:
      "Guggenheim Museum is arguably the most important building of Wright's late career. A monument to modernism, the unique architecture of the space, with its spiral ramp riding to a domed skylight, continues to thrill visitors and provide a unique forum for the presentation of contemporary art.",
    image: "",
  },
  {
    id: 2,
    architectId: 2,
    style: "Deconstructivism",
    yearOfCompletion: new Date("1996-01-01"),
    place: "Prague",
    name: "The Dancing House",
    descrcription:
      "he Dancing House is designed around the metaphor of a dancing couple, with two central pillars representing the distinct polarities of static and dynamic movement. One tapered glass tower is cinched in the middle and bells out at the bottom, representing the dynamic, feminine movement",
    image: "",
  },
];

export default function HomePage() {
  const [showDetailsModal, setShowDetailsModal] = useState<boolean>(false);
  const [selectedBuilding, setSelectedBuilding] = useState<Building>();

  useEffect(() => {
    console.log("selected building", selectedBuilding);
    if (selectedBuilding !== undefined) {
      setShowDetailsModal(true);
    }
  }, [selectedBuilding]);

  return (
    <>
      <CssBaseline />
      <NavBar />
      <Container>
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {buildings.map((item) => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <RecordCard
                    setSelected={setSelectedBuilding}
                    building={{
                      id: item.id,
                      architectId: item.architectId,
                      style: item.style,
                      year: item.yearOfCompletion,
                      place: item.place,
                      name: item.name,
                      description: item.descrcription,
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Container>
        <Fab
          color="secondary"
          aria-label="add"
          sx={{ position: "absolute", bottom: "40px", right: "40px" }}
        >
          <AddIcon />
        </Fab>
      </Container>
      <DetailsModal
        open={showDetailsModal}
        onclose={() => setShowDetailsModal(false)}
        building={selectedBuilding}
      />
    </>
  );
}
