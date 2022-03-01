import Slider from "../components/Slider"
import ServiceCard from "../components/ServiceCard"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import ContactUs from "../components/ContactUs"

const Home = () => {
  return (
    <>
      <Slider />

      <div id="services">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" color={"CaptionText"} padding={3}>
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
      </div>

      <div id="about-us">
        <section className="heading">
          <h1>About Us</h1>

          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </section>
      </div>

      <ContactUs />
    </>
  )
}
export default Home
