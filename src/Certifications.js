import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Modal,
  Button
} from "@mui/material";

const certificates = [
  {
    title: "React Certified Developer",
    year: "React 2025",
    description:
      "Validates skills in developing custom applications using React, including component-based architecture and state management.",
    ribbon: "React - Developer",
    border: "#1c73a5ff",
    ribbonBg: "#648390ff",
    instructor: "Jane Smith",
    date: "Dec 20, 2025"
  },
  {
    title: "Web/Front-End Based Certification",
    year: "React 2024",
    description:
      "Demonstrates foundational React knowledge, including navigating the framework and component basics.",
    ribbon: "Web / Front-End",
    border: "#c0c0c0",
    ribbonBg: "#c0c0c0",
    instructor: "Mark Taylor",
    date: "Dec 15, 2024"
  },
  {
    title: "Sales Expert Certification",
    year: "Sales 2022-2023",
    description:
      "Validates expertise in sales strategies, CRM, and achieving performance targets.",
    ribbon: "Sales - Specialist",
    border: "#ffa500",
    ribbonBg: "#ddaf16ff",
    instructor: "Sarah Johnson",
    date: "Dec 20, 2023"
  }
];

export default function Certifications() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const handleOpen = (cert) => {
    setActive(cert);
    setOpen(true);
  };

  return (
    <Box sx={{ padding: "100px 60px", background: "#cfc6c6" }}>
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight="bold"
        color="#1976d2"
      >
        Certifications
      </Typography>

      <Typography
        textAlign="center"
        mt={2}
        mb={6}
        fontWeight="bold"
        color="#363637fe"
      >
        Professional credentials that validate my expertise in React and related
        technologies and sales.
      </Typography>

      {/* Cards */}
      <Grid container spacing={4} justifyContent="center">
        {certificates.map((cert, i) => (
          <Grid item key={i}>
            <Box
              sx={{
                width: 340,
                minHeight: 260,
                background: "#0f172a",
                color: "white",
                padding: "25px",
                borderRadius: "14px",
                boxShadow: "0 8px 25px rgba(0,0,0,0.6)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <Box>
                <Typography fontSize={20} fontWeight="bold">
                  {cert.title}
                </Typography>
                <Typography mt={1} color="#4fc3f7" fontSize={14}>
                  {cert.year}
                </Typography>
                <Typography mt={2} fontSize={15}>
                  {cert.description}
                </Typography>
              </Box>

              <Typography
                mt={3}
                textAlign="center"
                fontWeight="bold"
                color="#ffd700"
                sx={{ cursor: "pointer" }}
                onClick={() => handleOpen(cert)}
              >
                View Certificate
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Footer text */}
      <Typography
        textAlign="center"
        mt={6}
        fontWeight="bold"
        color="red"
      >
        * * * Continuously expanding my knowledge and skills through
        certifications and professional development. * * *
      </Typography>

      {/* MODAL */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 820,
            background: "#fff",
            borderRadius: "18px",
            border: `15px solid ${active?.border}`,
            padding: "50px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.8)",
            fontFamily: "Georgia, serif"
          }}
        >
          {/* Ribbon */}
          <Box
            sx={{
              position: "absolute",
              top: -30,
              left: "50%",
              transform: "translateX(-50%) rotate(-18deg)",
              background: active?.ribbonBg,
              color: "#fff",
              padding: "8px 30px",
              fontWeight: "bold"
            }}
          >
            {active?.ribbon}
          </Box>

          <Typography
            variant="h3"
            textAlign="center"
            fontWeight="bold"
            color="#1976d2"
            mb={3}
          >
            Certificate of Completion
          </Typography>

          <Typography textAlign="center" fontSize={18}>
            This certificate is proudly presented to
          </Typography>

          <Typography
            textAlign="center"
            fontSize={32}
            fontWeight="bold"
            color="#0d47a1"
            mt={2}
            mb={3}
          >
            Chekuru Kalyan
          </Typography>

          <Typography textAlign="center" fontSize={18}>
            For successfully completing the{" "}
            <strong>{active?.title}</strong> program.
          </Typography>

          <Grid container mt={6} justifyContent="space-between">
            <Grid item textAlign="center">
              <Box sx={{ borderTop: "2px solid #1976d2", width: 220 }} />
              <Typography fontFamily="cursive">
                {active?.instructor}
              </Typography>
              <Typography fontWeight="bold">Instructor</Typography>
            </Grid>

            <Grid item textAlign="center">
              <Box sx={{ borderTop: "2px solid #1976d2", width: 220 }} />
              <Typography fontFamily="cursive">
                {active?.date}
              </Typography>
              <Typography fontWeight="bold">Date</Typography>
            </Grid>
          </Grid>

          <Box textAlign="center" mt={6}>
            <Button
              variant="contained"
              sx={{ padding: "10px 30px", fontWeight: "bold" }}
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
