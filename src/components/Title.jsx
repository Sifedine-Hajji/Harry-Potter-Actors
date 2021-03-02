import { Heading } from "@chakra-ui/react";
import "../sass/App.scss";

export default function Title() {
  return (
    <Heading
      fontFamily="HarryPotter"
      variant="h1"
      textAlign="center"
      fontSize="40px"
      margin="0"
      bgColor="#111111"
      color="yellow.500"
      width="100%"
      fontSize="70px"
      position="fixed"
    >
      Harry Potter Actors
    </Heading>
  );
}
