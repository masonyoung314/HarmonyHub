import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface CardBaseProps {
  songTitle?: string;
  artist?: string;
  description?: string;
}

export default function OutlinedCard({
  songTitle,
  artist,
  description,
}: CardBaseProps) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <React.Fragment>
          <CardContent>
            <Typography variant="h5" component="div">
              {songTitle}
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 1.5 }}>
              {artist}
            </Typography>
            <Typography variant="body2">{description}</Typography>
          </CardContent>
          <CardActions>
            <Button sx={{ color: "#04AA6D" }} size="small">
              Update
            </Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
