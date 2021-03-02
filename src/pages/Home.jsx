import "../sass/App.scss";
import { Flex, Image, Badge, Box } from "@chakra-ui/react";
import React, { Component } from "react";
import Title from "../components/Title";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }
  componentDidMount() {
    fetch("https://hp-api.herokuapp.com/api/characters")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  render() {
    let { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div className="App">
        <Title />
        <Flex flexWrap="wrap" justifyContent="space-around" paddingTop="80px">
          {items.map((item) => (
            <Flex
              w="600px"
              boxShadow="sm"
              background="#111111"
              m="3"
              color="white"
            >
              <Image
                src={item.image}
                alt="photo de profil"
                width="250px"
                height="350px"
              />
              <Flex>
                <Box
                  display="flex"
                  flexDir="column"
                  width="calc(600px - 250px)"
                >
                  <Badge variant="solid" bgColor="yellow.500" px={3} p="2">
                    <strong>House:</strong> {item.house}
                  </Badge>
                  <Badge variant="solid" bgColor="red.600" px={3} p="2">
                    <strong>Name:</strong> {item.name}
                  </Badge>

                  <Flex flexDir="column" textAlign="left" fontSize="20px">
                    <p>
                      <strong>Actor:</strong> {item.actor}
                    </p>
                    <p>
                      <strong>Birth:</strong> {item.dateOfBirth}
                    </p>
                    <p>
                      <strong>Species:</strong> {item.species}
                    </p>
                    <p>
                      <strong>Gender:</strong> {item.gender}
                    </p>

                    <p>
                      <strong>Patronus:</strong> {item.patronus}
                    </p>
                  </Flex>
                </Box>
              </Flex>
            </Flex>
          ))}
          ;
        </Flex>
      </div>
    );
  }
}
export default App;
