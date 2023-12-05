import { styles } from "./Portfolio.styles"
import { Typography, Grid, Container } from "@mui/material"
import { teamInfo, dreamTeamTitle } from "./Portfolio.constants"
import PortfolioCard from "../PortfolioCard/PortfolioCard"

const Portfolio = () => {
  return (
    <Container sx={styles.wrapper} maxWidth='lg'>
      <Typography variant="h4" sx={styles.title}>
        {dreamTeamTitle}
      </Typography>
      <Grid container spacing={2}>
        {teamInfo.map((teamMember, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <PortfolioCard
              photo={teamMember.photo}
              initials={teamMember.initials}
              position={teamMember.position}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Portfolio
