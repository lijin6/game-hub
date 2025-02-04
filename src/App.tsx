import { Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // 小屏幕 移动设备 上：nav 在上，main 在下
        lg: `"nav nav" "aside main"`, // 大屏幕上：nav 上面，aside 在左，main 在右
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>

      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
