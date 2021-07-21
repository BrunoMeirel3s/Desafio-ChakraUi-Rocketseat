import Head from "next/head";
import Image from "next/image";
import {
  Flex,
  Box,
  HStack,
  Link,
  useBreakpointValue,
  Circle,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Navigation, Parallax, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([Parallax, Pagination, Navigation]);

import logoImg from "../assets/logo.png";
import backgroundImg from "../assets/background.png";
import airplaneImg from "../assets/airplane.png";

import glassImg from "../assets/vector.png";
import beachImg from "../assets/group.png";
import buildingImg from "../assets/building.png";
import museumImg from "../assets/museum.png";
import hearthImg from "../assets/earth.png";

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

  const showImages = useBreakpointValue({
    base: false,
    md: true,
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
          marginTop="0.5em"
          marginBottom="0.5em"
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
        <SimpleGrid
          w="80vw"
          marginLeft="10vw"
          marginRight="10vw"
          marginTop="4em"
          marginBottom="4em"
          spacing={["4", "6"]}
          minChildWidth="150px"
        >
          <Link>
            <Flex flexDirection={showImages ? "column" : "row"} align="center">
              {showImages ? (
                <Image layout="fixed" src={glassImg}></Image>
              ) : (
                <Circle size="1em" bg="highlight"></Circle>
              )}
              Vida noturna
            </Flex>
          </Link>
          <Link>
            <Flex flexDirection={showImages ? "column" : "row"} align="center">
              {showImages ? (
                <Image layout="fixed" src={beachImg}></Image>
              ) : (
                <Circle size="1em" bg="highlight"></Circle>
              )}
              Praia
            </Flex>
          </Link>
          <Link>
            <Flex flexDirection={showImages ? "column" : "row"} align="center">
              {showImages ? (
                <Image layout="fixed" src={buildingImg}></Image>
              ) : (
                <Circle size="1em" bg="highlight"></Circle>
              )}
              Moderno
            </Flex>
          </Link>
          <Link>
            <Flex flexDirection={showImages ? "column" : "row"} align="center">
              {showImages ? (
                <Image layout="fixed" src={museumImg}></Image>
              ) : (
                <Circle size="1em" bg="highlight"></Circle>
              )}
              Clássico
            </Flex>
          </Link>
          <Link>
            <Flex flexDirection={showImages ? "column" : "row"} align="center">
              {showImages ? (
                <Image layout="fixed" src={hearthImg}></Image>
              ) : (
                <Circle size="1em" bg="highlight"></Circle>
              )}
              E mais...
            </Flex>
          </Link>
        </SimpleGrid>
        <Flex justify="center" marginBottom="1em">
          <Divider color="black" width="4em" />
        </Flex>
        <Flex
          fontSize={["1em", "1.5em", "2em"]}
          flexDirection="column"
          align="center"
          marginBottom="1.2em"
        >
          <Box>Vamos nessa?</Box>
          <Box>Então escolha seu continente</Box>
        </Flex>
        <Flex w="80vw" marginLeft="10vw" marginRight="10vw">
          <Swiper
            style={{
              "--swiper-navigation-color": "#FFBA08",
              "--swiper-pagination-color": "#fff",
              height: "24rem",
              margin: "0 0 2rem 0",
            }}
            speed={600}
            parallax={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className="mySwiper"
            loop={true}
          >
            <div
              slot="container-start"
              className="parallax-bg"
              data-swiper-parallax="-23%"
            ></div>
            <SwiperSlide
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGV1cm9wZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Flex
                flexDirection="column"
                align="center"
                justify="center"
                mt="4rem"
              >
                <Box fontSize="3em" color="white" fontWeight="bold">
                  Europa
                </Box>
                <Box fontSize="1em" color="white" fontWeight="bold">
                  O continente mais antigo.
                </Box>
              </Flex>
            </SwiperSlide>
            <SwiperSlide
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1596337231519-894df47ad02b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Flex
                flexDirection="column"
                align="center"
                justify="center"
                mt="4rem"
              >
                <Box fontSize="3em" color="white" fontWeight="bold">
                  América
                </Box>
                <Box fontSize="1em" color="white" fontWeight="bold">
                  A continente das oportunidades.
                </Box>
              </Flex>
            </SwiperSlide>
            <SwiperSlide
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1528277342758-f1d7613953a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGFmcmljYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Flex
                flexDirection="column"
                align="center"
                justify="center"
                mt="4rem"
              >
                <Box fontSize="3em" color="white" fontWeight="bold">
                  África
                </Box>
                <Box fontSize="1em" color="white" fontWeight="bold">
                  O continente da ancestralidade e belezas naturais
                </Box>
              </Flex>
            </SwiperSlide>
            <SwiperSlide
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1502099530544-2b61cbaed85c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Flex
                flexDirection="column"
                align="center"
                justify="center"
                mt="4rem"
              >
                <Box fontSize="3em" color="white" fontWeight="bold">
                  Ásia
                </Box>
                <Box fontSize="1em" color="white" fontWeight="bold">
                  O continente das inovações e tradições
                </Box>
              </Flex>
            </SwiperSlide>
            <SwiperSlide
              style={{
                background:
                  "url(https://images.unsplash.com/photo-1622732692901-0a53ca7a2e61?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG9jZWFuaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=60)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Flex
                flexDirection="column"
                align="center"
                justify="center"
                mt="4rem"
              >
                <Box fontSize="3em" color="white" fontWeight="bold">
                  Oceania
                </Box>
                <Box fontSize="1em" color="white" fontWeight="bold">
                  O novo mundo
                </Box>
              </Flex>
            </SwiperSlide>
          </Swiper>
        </Flex>
      </Flex>
    </>
  );
}
