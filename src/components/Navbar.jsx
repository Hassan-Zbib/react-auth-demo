import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import { useSelector, useDispatch } from "react-redux"
import { logout, reset } from "../features/auth/authSlice"
import { Link as UiLink } from "@mui/material"

const Navbar = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate("/")
  }

  const title = "ReactAuth"

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* small navbar size */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            {title}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {!user ? (
              <>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    component={UiLink}
                    href="#slider"
                  >
                    <Typography textAlign="center">Slider</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    component={UiLink}
                    href="#services"
                  >
                    <Typography textAlign="center">Services</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    component={UiLink}
                    href="#about-us"
                  >
                    <Typography textAlign="center">About Us</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    component={UiLink}
                    href="#contact-us"
                  >
                    <Typography textAlign="center">Contact Us</Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                              <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    component={Link}
                    to={'/'}
                  >
                    <Typography textAlign="center">Home</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={handleCloseNavMenu}
                    component={Link}
                    to={'/Dashboard'}
                  >
                    <Typography textAlign="center">Dashboard</Typography>
                  </MenuItem>
                </Menu>
              </>
            )}
          </Box>

          {/* big navbar size */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            {title}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {!user ? (
              <>
                <Button
                  component={UiLink}
                  sx={{ my: 2, color: "white", display: "block" }}
                  href="#slider"
                >
                  <Typography textAlign="center" fontSize={"small"}>
                    Slider
                  </Typography>
                </Button>
                <Button
                  component={UiLink}
                  sx={{ my: 2, color: "white", display: "block" }}
                  href="#services"
                >
                  <Typography textAlign="center" fontSize={"small"}>
                    Services
                  </Typography>
                </Button>
                <Button
                  component={UiLink}
                  sx={{ my: 2, color: "white", display: "block" }}
                  href="#about-us"
                >
                  <Typography textAlign="center" fontSize={"small"}>
                    About Us
                  </Typography>
                </Button>
                <Button
                  component={UiLink}
                  sx={{ my: 2, color: "white", display: "block" }}
                  href="#contact-us"
                >
                  <Typography textAlign="center" fontSize={"small"}>
                    Contact Us
                  </Typography>
                </Button>
              </>
            ) : (
              <>
                <Button
                  component={Link}
                  sx={{ my: 2, color: "white", display: "block" }}
                  to={'/'}
                >
                  <Typography textAlign="center" fontSize={"small"}>
                    Home
                  </Typography>
                </Button>
                <Button
                  component={Link}
                  sx={{ my: 2, color: "white", display: "block" }}
                  to={'/Dashboard'}
                >
                  <Typography textAlign="center" fontSize={"small"}>
                  Dashboard
                  </Typography>
                </Button>
              </>
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <Button sx={{ my: 2, color: "white" }} onClick={onLogout}>
                Logout
              </Button>
            ) : (
              <>
                <Button
                  sx={{ my: 2, color: "white" }}
                  component={Link}
                  to={"/Login"}
                >
                  Login
                </Button>
                <Button
                  sx={{ my: 2, color: "white" }}
                  component={Link}
                  to={"/Signup"}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Navbar
