import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

function Section({ id, title, text }) {
  return (
    <Container
      id={id}
      component={motion.div}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      sx={{ py: 10, minHeight: "100vh" }}
    >
      <Typography variant="h4" color="primary" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" whiteSpace="pre-line">
        {text}
      </Typography>
    </Container>
  );
}

export default Section;
