import Slider from "../components/Slider"
import ServiceCard from "../components/ServiceCard"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"

const Home = () => {
  return (
    <>
      <Slider />



      <Grid container spacing={2}>
      <Grid item xs={12}>
      <Typography variant="h4" color={"CaptionText"} textAlign='center' padding={3}>
        Services
      </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <ServiceCard
            src={"../assets/3.avif"}
            content={
              "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
            }
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ServiceCard
            src={"../assets/3.avif"}
            content={
              "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
            }
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <ServiceCard
            src={"../assets/3.avif"}
            content={
              "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
            }
          />
        </Grid>
      </Grid>
    </>
  )
}
export default Home
