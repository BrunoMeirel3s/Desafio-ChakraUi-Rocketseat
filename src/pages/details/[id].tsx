import Head from "next/head";
import {
  Flex,
  Box,
  useBreakpointValue,
  SimpleGrid,
  Button,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import { ParsedUrlQuery } from "querystring";
import { GetServerSideProps } from "next";
import axios from "axios";

import CardCidade from "../../components/CardCidade";
import Header from "../../components/Header";

interface IParams extends ParsedUrlQuery {
  id: string;
}

interface ContinentProps {
  continent: {
    name: string;
    imageBackground: string;
    description: string;
    countries: string;
    languages: string;
    amountCities100: string;
    cities100: Array<{
      picture: string;
      name: string;
      country: string;
      flag: string;
    }>;
  };
}

export default function Details({ continent }: ContinentProps) {
  const layout = useBreakpointValue({
    sm: true,
    md: false,
  });

  return (
    <>
      <Head>
        <title>{continent.name}</title>
      </Head>
      <Flex w="100vw" h="100vh" flexDirection="column">
        <Header voltar={true} />
        <Flex
          style={{
            background: `url(${continent.imageBackground})`,
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
            {continent.name}
          </Box>
        </Flex>
        <Flex
          flexDirection={layout ? "column" : "row"}
          justify="space-around"
          align="center"
          margin="3em"
        >
          <Box width="26em">{continent.description}</Box>
          <Flex>
            <Flex align="center" flexDirection="column" mr="1em">
              <Box
                fontSize="1.6em"
                fontWeight="bold"
                color="#FFBA08"
                mb="-0.2em"
              >
                {continent.countries}
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
                {continent.countries}
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
                {continent.amountCities100}
              </Box>
              <Flex align="center">
                cidades +100
                <Popover>
                  <PopoverTrigger>
                    <Button size="2rem" ml="0.2rem" padding="0">
                      <Icon as={InfoOutlineIcon}></Icon>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Cidades mais visitas!</PopoverHeader>
                    <PopoverBody>
                      Este continente possui {continent.amountCities100} das 100
                      cidades mais visitadas do mundo!
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex ml="4em" mb="4em" flexDirection="column">
          <Box color="headingsText" mb="0.8em" fontSize="1.8em">
            Cidades +100
          </Box>

          <SimpleGrid columns={[1, 1, 2, 3, 4]} spacing={"2em"}>
            {continent.cities100.map((city) => {
              return <CardCidade cidade={city} />;
            })}
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const { id } = params as IParams;

  const continent = await axios
    .get(`http://localhost:3000/continents/${id}`)
    .then((response) => response.data);

  return {
    props: { continent },
  };
};
