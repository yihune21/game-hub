import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `
            "nav"
            "main"
          `,
          md: `
            "nav main"
            "nav aside"
          `,
        }}
      >
        <GridItem gridArea="nav" bg="coral">
          Nav
        </GridItem>
        <Show above="lg">
          <GridItem gridArea="aside" bg="gold">
            Aside
          </GridItem>
        </Show>
        <GridItem gridArea="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
