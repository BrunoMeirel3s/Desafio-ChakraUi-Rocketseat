import Head from "next/head";
import Image from "next/image";
import { Flex, Box } from "@chakra-ui/react";
import logoImg from "../assets/logo.png";

import { useBreakpointValue } from "@chakra-ui/react";
export default function Home() {
  const imageSizes = useBreakpointValue({
    base: { width: 81, height: 20 },
    md: {
      width: 147.25,
      height: 45.54,
    },
  });
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Flex w="100vw" h="100vh">
        <Flex
          as="header"
          justify="center"
          align="center"
          flex="1"
          h={["3.150em", "5em", "5.8em"]}
        >
          <Image
            src={logoImg}
            width={imageSizes?.width}
            height={imageSizes?.height}
          ></Image>
        </Flex>
        <Flex flex="1" align="center" justify="space-betwenn"></Flex>
      </Flex>
    </>
  );
}
