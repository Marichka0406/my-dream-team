import { styles } from "./PortfolioCard.styles"
import { Card, CardMedia, CardContent, Typography } from "@mui/material"

const PortfolioCard = ({ photo, initials, position }) => {
  return (
    <Card sx={styles.cardWrapper}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {initials}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {position}
        </Typography>
      </CardContent>
      <CardMedia sx={styles.image} image={photo} />
    </Card>
  );
};

export default PortfolioCard
