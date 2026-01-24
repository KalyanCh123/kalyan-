import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const reactSkills = [
  { name: "React.js", value: "90%" },
  { name: "JavaScript (ES6+)", value: "85%" },
  { name: "React Hooks", value: "85%" },
  { name: "Redux Toolkit", value: "80%" },
  { name: "HTML5 & CSS3", value: "85%" },
  { name: "Testing (Jest & RTL)", value: "75%" },
  { name: "Git", value: "80%" },
];

const uiSkills = [
  { name: "Material UI (MUI) & Icons", value: "80%" },
  { name: "Formik", value: "85%" },
  { name: "REST API Integration", value: "80%" },
  { name: "Responsive Design", value: "85%" },
  { name: "Flexbox & CSS Grid", value: "85%" },
  { name: "Browser DevTools", value: "78%" },
  { name: "UI Debugging", value: "75%" },
];

const Skills = () => {
  return (
    <Box
      id="skills"
      sx={{
        padding: "20px 0",
        backgroundColor: "#1a1a2e",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        marginTop: "150px",
      }}
    >
      {/* TITLE */}
      <Typography sx={{ color: "#1976d2", fontSize: "2.5em", mb: 1 }}>
        Technical Skills
      </Typography>

      <Typography sx={{ color: "#b0b0b0", mb: 3 }}>
        A showcase of my expertise in React development and related technologies.
      </Typography>

      {/* TECH SKILLS */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "0 auto",
          mb: "40px",
        }}
      >
        {/* React Ecosystem */}
        <Box
          sx={{
            flex: 1,
            padding: "30px",
            background: "#0f0f1a",
            borderRadius: "10px",
            margin: "0 10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            textAlign: "left",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.2em",
              fontWeight: "bold",
              color: "#00d4ff",
              mb: "25px",
            }}
          >
            React Ecosystem
          </Typography>

          {reactSkills.map((skill) => (
            <Box
              key={skill.name}
              sx={{ display: "flex", alignItems: "center", mb: "14px" }}
            >
              <Typography sx={{ flex: 2, fontSize: "0.9em", color: "#d0d0d0" }}>
                {skill.name}
              </Typography>

              <Box
                sx={{
                  flex: 6,
                  height: "10px",
                  backgroundColor: "#333",
                  borderRadius: "5px",
                  overflow: "hidden",
                  mx: "10px",
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    backgroundColor: "#00d4ff",
                    width: skill.value,
                    borderRadius: "5px",
                    transition: "width 0.3s ease",
                  }}
                />
              </Box>

              <Typography
                sx={{
                  flex: 1,
                  fontSize: "0.9em",
                  color: "#00d4ff",
                  textAlign: "right",
                }}
              >
                {skill.value}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Frontend UI */}
        <Box
          sx={{
            flex: 1,
            padding: "20px",
            background: "#0f0f1a",
            borderRadius: "10px",
            margin: "0 10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            textAlign: "left",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.2em",
              fontWeight: "bold",
              color: "#00d4ff",
              mb: "15px",
            }}
          >
            Frontend UI & Tools
          </Typography>

          {uiSkills.map((skill) => (
            <Box
              key={skill.name}
              sx={{ display: "flex", alignItems: "center", mb: "10px" }}
            >
              <Typography sx={{ flex: 2, fontSize: "0.9em", color: "#d0d0d0" }}>
                {skill.name}
              </Typography>

              <Box
                sx={{
                  flex: 6,
                  height: "10px",
                  backgroundColor: "#333",
                  borderRadius: "5px",
                  overflow: "hidden",
                  mx: "10px",
                }}
              >
                <Box
                  sx={{
                    height: "100%",
                    backgroundColor: "#00d4ff",
                    width: skill.value,
                  }}
                />
              </Box>

              <Typography
                sx={{
                  flex: 1,
                  fontSize: "0.9em",
                  color: "#00d4ff",
                  textAlign: "right",
                }}
              >
                {skill.value}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* SOFT SKILLS */}
      <Typography sx={{ color: "#1976d2", fontSize: "2.5em", mb: 1 }}>
        Soft Skills
      </Typography>

      <Typography sx={{ color: "#b0b0b0", mb: 3 }}>
        Key interpersonal skills that support effective frontend development.
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          maxWidth: "1200px",
          margin: "0 auto",
          gap: "20px",
        }}
      >
        {[
          {
            title: "UI Problem Solving",
            text:
              "Strong ability to analyze UI issues, debug frontend bugs, and implement clean, user-friendly solutions using React and modern web practices.",
          },
          {
            title: "Communication & Requirement Understanding",
            text:
              "Effective at understanding UI requirements, discussing features with team members, and translating designs into functional and responsive interfaces.",
          },
          {
            title: "Team Collaboration",
            text:
              "Comfortable working with designers, backend developers, and QA teams to build consistent, scalable, and maintainable frontend solutions.",
          },
          {
            title: "Time Management & Code Discipline",
            text:
              "Skilled at managing tasks efficiently, meeting deadlines, and maintaining clean, readable code with proper structure and documentation.",
          },
        ].map((skill) => (
          <Box
            key={skill.title}
            sx={{
              flex: "1 1 calc(50% - 20px)",
              minWidth: "300px",
              padding: "20px",
              background: "#0f0f1a",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              textAlign: "left",
            }}
          >
            <Typography sx={{ fontSize: "1.2em", color: "#00d4ff", mb: 1 }}>
              {skill.title}
            </Typography>
            <Typography sx={{ fontSize: "0.9em", color: "#d0d0d0" }}>
              {skill.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
