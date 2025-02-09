import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";


export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}
const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // 小屏幕：nav 在上，main 在下
        lg: `"nav nav" "aside main"`, // 大屏幕：nav 在上，aside 和 main 横向排布
      }}
      templateColumns={{
        base: "1rf",
        lg: "200px",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      {/* 在大屏幕显示 aside，且小屏幕隐藏 */}
      <Show above="lg">
        <GridItem area="aside" bg="" paddingX={"5"}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}
          />
        </GridItem>
      </Show>
      <GridItem area="main" bg="">
        <HStack spacing={5} paddingLeft={2} marginBottom={5} >
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) => setGameQuery({...gameQuery,platform})}
          /> 
          <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=> setGameQuery({...gameQuery,sortOrder})} />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
