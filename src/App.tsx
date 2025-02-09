import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main" bg="">
        <PlatformSelector />
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
};

export default App;
