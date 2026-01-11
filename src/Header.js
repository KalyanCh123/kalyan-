import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { tabs } from "./Data";

function Header({ activeTab, onTabClick }) {
  return (
    <AppBar position="sticky" color="default">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h5" fontWeight="bold" color="primary">
          Kalyan . Ch
        </Typography>

        <div>
          {tabs.map((tab) => (
            <Button
              key={tab}
              onClick={() => onTabClick(tab)}
              variant={activeTab === tab ? "contained" : "text"}
              sx={{ mx: 0.5 }}
            >
              {tab}
            </Button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
