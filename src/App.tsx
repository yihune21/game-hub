import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenerList from "./components/GenerList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `
            "nav"
            "main"
          `,
          lg: ` "nav nav" "aside main"`,
        }}
      >
        <GridItem gridArea="nav">
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem gridArea="aside">
            <GenerList></GenerList>
          </GridItem>
        </Show>
        <GridItem gridArea="main">
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
