import Head from "next/head";
import Image from "next/image";
import { Flex, Box, HStack, useBreakpointValue } from "@chakra-ui/react";
import logoImg from "../assets/logo.png";
import backgroundImg from "../assets/background.png";
import airplaneImg from "../assets/airplane.png";

export default function Home() {
  const imageSizes = useBreakpointValue({
    base: { width: 81, height: 20 },
    md: {
      width: 184.06,
      height: 45.92,
    },
  });

  const showAirPlane = useBreakpointValue({
    base: "none",
    md: "block",
  });
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Flex w="100vw" h="100vh" flexDirection="column">
        <Flex
          as="header"
          justify="center"
          align="center"
          h={["3.150em", "5em", "5.8em"]}
        >
          <Image
            src={logoImg}
            width={imageSizes?.width}
            height={imageSizes?.height}
          ></Image>
        </Flex>
        <Flex>
          <Box position="absolute">
            <Image src={backgroundImg}></Image>
          </Box>
          <Box position="relative">
            <Flex
              width="100vw"
              flexDirection="row"
              align="center"
              justify="space-around"
              margin={["0.3em", "0.6em", "1em"]}
              overflow="visible"
            >
              <Box color="#F5F8FA" marginTop={showAirPlane && "1em"}>
                <Box fontSize={["1em", "1.2em", "1.6em", "2em"]} as="h1">
                  5 Continentes,
                  <br /> infinitas possibilidades
                </Box>
                <Box fontSize={["0.7em", "0.9em", "1.2em"]} as="h2">
                  Chegou a hora de tirar do papel a viagem que você sempre
                  sonhou
                </Box>
              </Box>
              <Box display={showAirPlane}>
                <Image src={airplaneImg}></Image>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
