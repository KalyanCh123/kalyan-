import React from "react";
import { Box, Button, Typography } from "@mui/material";

const tabs = [
  "Home",
  "About",
  "Experience",
  "Skills",
  "Projects",
  "Certifications",
  "Contact",
];

const Header = ({ activeTab, scrollToSection }) => {
  return (
    <Box className="header-container">
      <Typography component="h1" className="header-title">
        Kalyan . Ch
      </Typography>

      <Box className="header-tabs">
        {tabs.map((tab) => (
          <Button
            key={tab}
            disableRipple
            onClick={() => scrollToSection(tab)}
            className={`header-tab ${activeTab === tab ? "active" : ""
              }`}
          >
            {tab}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Header;
