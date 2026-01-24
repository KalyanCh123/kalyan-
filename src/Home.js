import React from "react";
import { Box, Typography } from "@mui/material";

const content = {
  Home: `Experienced React Developer with a strong background in building dynamic, responsive, and high-
performance web applications. Proficient in modern JavaScript (ES6+), React.js, Redux, and component-
based architecture. Skilled in creating scalable front-end solutions with a focus on clean code, reusability,
and optimal user experience. Adept at integrating APIs, managing state effectively, and using testing
frameworks like Jest and React Testing Library to ensure application reliability.`,
};

const Home = () => {
  return (
    <Box id="home">
      {/* SCROLL TEXT */}
      <Box className="scroll-wrapper">
        <Typography component="div" className="scroll-text">
          Welcome to Ch . Kalyan&apos;s portfolio
        </Typography>
      </Box>

      {/* MAIN CONTENT */}
      <Box className="home-content">
        <Box className="home-text">
          <Typography component="h1" style={{ textAlign: 'center',marginBottom: '80px',marginLeft: '300px' }}>Home</Typography>
          <Typography component="h1" style={{marginBottom: '30px'}}>
            Kalyan Chekuru
          </Typography>
          {content.Home.split("\n").map((line, i) => (
            <Typography component="p" key={i}>
              {line}
            </Typography>
          ))}
        </Box>
        <Box className="home-image-wrapper">
          <img
            src="/kalyan.jpeg"
            alt="kalyan"
            className="profile-image"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
