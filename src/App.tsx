import { Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // 小屏幕：nav 在上，main 在下
        lg: `"nav nav" "aside main"`, // 大屏幕：nav 在上，aside 和 main 横向排布
      }}
    >
      <GridItem area="nav">
        <NavBar />
        
      </GridItem>

      {/* 在大屏幕显示 aside，且小屏幕隐藏 */}
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      {/* 在小屏幕显示 main，且隐藏 aside */}
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
};

export default App;
