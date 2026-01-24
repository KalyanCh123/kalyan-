import React, { useState } from "react";
import { Box, Container, Typography, Chip } from "@mui/material";

const Projects = () => {
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);

  return (
    <Box sx={{ mt: "100px" }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" color="#1976d2" gutterBottom>
          Projects
        </Typography>

        <Typography align="center" fontWeight="bold" mb={5}>
          A showcase of my technical projects and contributions.
        </Typography>

        <Box className="timeline">
          {/* PROJECT 1 */}
          <Box className="project-card">
            <Box className="timeline-dot" />

            <Typography variant="h6" fontWeight="bold">
              React Project 1: Money Tree
            </Typography>

            <Box mt={1} mb={2}>
              {["React", "Redux", "JavaScript", "HTML/CSS", "REST API"].map(
                (tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    size="small"
                    sx={{
                      mr: 1,
                      mb: 1,
                      bgcolor: "#0b3c5d",
                      color: "#4fc3f7",
                    }}
                  />
                )
              )}
            </Box>

            <Typography>
              Developed a US-based loan management platform called{" "}
              <strong>Money Tree</strong> using React and Redux. Focused on
              creating reusable components and efficient state management.
            </Typography>

            {showMore1 && (
              <Box component="ul">
                <li>Dynamic forms using React Hooks & Formik</li>
                <li>REST API integration</li>
                <li>Responsive dashboards</li>
                <li>Performance optimization</li>
                <li>Accessibility support</li>
                <li>React Router navigation</li>
              </Box>
            )}

            <Typography
              className="show-more"
              onClick={() => setShowMore1(!showMore1)}
            >
              {showMore1 ? "▲ Show Less Details" : "▼ Show More Details"}
            </Typography>
          </Box>

          {/* PROJECT 2 */}
          <Box className="project-card">
            <Box className="timeline-dot" />

            <Typography variant="h6" fontWeight="bold">
              React Project 2: Qfund11
            </Typography>

            <Box mt={1} mb={2}>
              {["React", "Redux", "HTML5", "CSS3", "REST API"].map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  sx={{
                    mr: 1,
                    mb: 1,
                    bgcolor: "#0b3c5d",
                    color: "#4fc3f7",
                  }}
                />
              ))}
            </Box>

            <Typography>
              Developed a US-based financial platform called{" "}
              <strong>Qfund11</strong> using React and Redux. Focused on
              responsive design and accessibility.
            </Typography>

            {showMore2 && (
              <Box component="ul">
                <li>Real-time form validation</li>
                <li>Loan & payment APIs</li>
                <li>Responsive dashboards</li>
                <li>Code splitting & optimization</li>
                <li>WCAG accessibility</li>
                <li>Reusable components</li>
              </Box>
            )}

            <Typography
              className="show-more"
              onClick={() => setShowMore2(!showMore2)}
            >
              {showMore2 ? "▲ Show Less Details" : "▼ Show More Details"}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
