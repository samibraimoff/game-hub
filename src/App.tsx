import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bgColor="navy">
          aside
        </GridItem>
      </Show>
      <GridItem area="main" bgColor="coral">
        main
      </GridItem>
    </Grid>
  );
};

export default App;
