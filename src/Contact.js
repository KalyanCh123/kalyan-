import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
  Modal
} from "@mui/material";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import ChatIcon from "@mui/icons-material/Chat";

const Contact = () => {
  const nameRef = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageIconClicked, setMessageIconClicked] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [pendingSuccess, setPendingSuccess] = useState(false);

  /* ---------------- VALIDATION ---------------- */
  const validateForm = () => {
    setShowErrors(true);
    if (!name || !email || !message) {
      nameRef.current?.focus();
      return false;
    }
    return true;
  };

  /* ---------------- SEND ACTIONS ---------------- */
  const handleWhatsAppSend = () => {
    if (!validateForm()) return;

    const text =
      `Hello Kalyan,%0A%0A` +
      `Name: ${name}%0A` +
      `Email: ${email}%0A` +
      `Message: ${message}`;

    window.open(`https://wa.me/917097173125?text=${text}`, "_blank");
    setPendingSuccess(true);
  };

  const handleEmailSend = () => {
    if (!validateForm()) return;

    window.location.href =
      `mailto:kalyanch692@gmail.com?subject=New Contact Message&body=` +
      `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    setPendingSuccess(true);
  };

  /* ---------------- SUCCESS AFTER RETURN ---------------- */
  useEffect(() => {
    const handler = () => {
      if (document.visibilityState === "visible" && pendingSuccess) {
        setShowSuccess(true);
        setPendingSuccess(false);
        setName("");
        setEmail("");
        setMessage("");
      }
    };
    document.addEventListener("visibilitychange", handler);
    return () => document.removeEventListener("visibilitychange", handler);
  }, [pendingSuccess]);

  const handleCloseSuccess = () => {
    setShowSuccess(false);
    setShowErrors(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ---------------- STYLES ---------------- */
  const card = {
    background: "#0f172a",
    color: "#fff",
    p: 5,
    borderRadius: "14px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.6)"
  };

  const inputStyle = (error) => ({
    width: "550px",
    mb: 2,
    p: 4,
    borderRadius: "8px",
    background: "#1e293b",
    color: "#fff",
    border: error ? "2px solid #d32f2f" : "none",
    outline: "none"
  });

  const iconHover = {
    width: 38,
    height: 38,
    transition: "0.2s",
    "&:hover": { transform: "scale(1.5)" }
  };

  /* ---------------- UI ---------------- */
  return (
    <Box sx={{ p: { xs: 2, md: 6 }, background: "#cfc6c6" }}>
      <Typography variant="h4" textAlign="center" color="#1976d2" fontWeight="bold">
        Get In Touch
      </Typography>

      <Typography textAlign="center" mt={2} mb={5} fontWeight="bold">
        Have a project in mind or want to discuss React based solutions/projects or any updates? I’d love to hear from you.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* CONTACT INFO */}
        <Grid item xs={12} md={4}>
          <Box sx={card}>
            <Typography variant="h6">Contact Information</Typography>

            <Typography mt={2}>
              📧 Email : <a href="mailto:kalyanch692@gmail.com" style={{ color: "#4fc3f7" }}>
                kalyanch692@gmail.com
              </a>
            </Typography><br />

            <Typography mt={1}>
              👤 LinkedIn : <a href="https://linkedin.com" style={{ color: "#4fc3f7" }}>
                View Profile
              </a>
            </Typography><br />

            <Typography mt={1}>🌍 Based In : India</Typography>

            <Typography mt={3}>Connect With Me</Typography>

            <Box mt={3.5} display="flex" gap={2} mb={2}>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/kalyan-chekuru-ba8829156"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ ...iconHover, background: "#0A66C2" }}
              >
                <LinkedInIcon sx={{ color: "#fff" }} />
              </IconButton>

              <IconButton
                component="a"
                href="https://wa.me/917097173125"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ ...iconHover, background: "#25D366" }}
              >
                <WhatsAppIcon sx={{ color: "#fff" }} />
              </IconButton>

              <IconButton
                component="a"
                href="https://github.com/KalyanCh123"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ ...iconHover, background: "#24292e" }}
              >
                <GitHubIcon sx={{ color: "#fff" }} />
              </IconButton>

              <IconButton
                sx={{
                  ...iconHover,
                  background:
                    messageIconClicked && !name ? "red" : "#1976d2"
                }}
                onClick={() => {
                  setMessageIconClicked(true);
                  nameRef.current?.focus();
                }}
              >
                <ChatIcon sx={{ color: "#fff" }} />
              </IconButton>

            </Box>
          </Box>
        </Grid>

        {/* MESSAGE FORM */}
        <Grid item xs={12} md={6}>
          <Box sx={card}>
            <Typography variant="h6">Send a Message to Me</Typography><br />

            <input
              ref={nameRef}
              style={{ ...inputStyle(showErrors && !name), height: 30 }}
              placeholder="  Kalyan *** ( Your Name )"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setMessageIconClicked(false);
              }}
            /><br /><br />

            <input
              style={{ ...inputStyle(showErrors && !email), height: 30 }}
              placeholder="  Kalyan *** @gmail.com ( Your Email )"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            /><br /><br />

            <textarea
              style={{ ...inputStyle(showErrors && !message), height: 100 }}
              placeholder={` I'd like to discuss a React based project ... ... ...
                                  
              ( Your Message )`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Grid container spacing={2} mt={1}>
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  onClick={handleWhatsAppSend}
                  sx={{
                    background: "#25D366",
                    width: '250px',
                    color: "#fff",
                    "&:hover": { transform: "scale(1.05)" }
                  }}
                >
                  Send WhatsApp
                </Button>
              </Grid>&nbsp;&nbsp;&nbsp;&nbsp;
              <Grid item xs={12} sm={6}>
                <Button
                  fullWidth
                  onClick={handleEmailSend}
                  sx={{
                    background: "#1976d2",
                    width: '250px',
                    color: "#fff",
                    "&:hover": { transform: "scale(1.05)" }
                  }}
                >
                  Send Email
                </Button>
              </Grid>
            </Grid>

          </Box>
        </Grid>
      </Grid>

      {/* SUCCESS MODAL */}
      <Modal open={showSuccess}>
        <Box className="modal-overlay">
          <Box className="modal-content">
            <button className="close-btn" onClick={handleCloseSuccess}>✕</button>

            <div className="check">✔</div>

            <h2>Thank You! 😊</h2>
            <p>
              Your message has been sent successfully.
              <br />
              <strong>Kalyan</strong> will get back to you shortly.
            </p>

            <button className="ok-btn" onClick={handleCloseSuccess}>
              Okay
            </button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Contact;
