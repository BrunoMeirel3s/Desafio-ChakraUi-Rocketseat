import Head from "next/head";
import {
  Flex,
  Box,
  useBreakpointValue,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

import CardCidade from "../../components/CardCidade";
import Header from "../../components/Header";

export default function Details() {
  const layout = useBreakpointValue({
    sm: true,
    md: false,
  });

  return (
    <>
      <Head>
        <title>Continent name</title>
      </Head>
      <Flex w="100vw" h="100vh" flexDirection="column">
        <Header />
        <Flex
          style={{
            background:
              "url(https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          h={["10em", "15em", "18em", "23em"]}
        >
          <Box
            color="#F5F8FA"
            fontSize={["2rem", "2.2rem", "2.5rem"]}
            marginLeft={["2rem", "3rem", "4rem", "6rem"]}
            marginTop={["6rem", "10rem", "14rem", "18rem"]}
          >
            Europa
          </Box>
        </Flex>
        <Flex
          flexDirection={layout ? "column" : "row"}
          justify="space-around"
          align="center"
          margin="3em"
        >
          <Box width="26em">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Box>
          <Flex>
            <Flex align="center" flexDirection="column" mr="1em">
              <Box
                fontSize="1.6em"
                fontWeight="bold"
                color="#FFBA08"
                mb="-0.2em"
              >
                50
              </Box>
              países
            </Flex>
            <Flex align="center" flexDirection="column" mr="1em">
              <Box
                fontSize="1.6em"
                fontWeight="bold"
                color="#FFBA08"
                mb="-0.2em"
              >
                60
              </Box>
              línguas
            </Flex>
            <Flex align="center" flexDirection="column">
              <Box
                fontSize="1.6em"
                fontWeight="bold"
                color="#FFBA08"
                mb="-0.2em"
              >
                24
              </Box>
              cidades +100
            </Flex>
          </Flex>
        </Flex>
        <Flex ml="4em" mb="4em" flexDirection="column">
          <Box color="headingsText" mb="0.8em" fontSize="1.8em">
            Cidades +100
          </Box>

          <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={"2em"}>
            <Box w={"256px"} h={"279px"} backgroundColor="hightlight50">
              <Box
                w="auto"
                h="176px"
                backgroundImage="url(https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)"
                style={{
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></Box>

              <Flex justify="space-around" mt="1.5em" align="center">
                <Flex flexDirection="column">
                  <Box
                    fontSize="1.5em"
                    color="headingsText"
                    fontWeight="medium"
                  >
                    Paris
                  </Box>
                  <Box color="info">França</Box>
                </Flex>
                <Box>
                  <Image src="https://www.countryflags.io/gb/flat/64.png" />
                </Box>
              </Flex>
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}
