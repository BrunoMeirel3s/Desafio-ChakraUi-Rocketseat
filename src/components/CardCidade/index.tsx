import { Flex, Box, Image } from "@chakra-ui/react";

interface CardCidadeProps {
  cidade: {
    picture: string;
    name: string;
    country: string;
    flag: string;
  };
}
export default function CardCidade({ cidade }: CardCidadeProps) {
  return (
    <>
      <Box w={"256px"} h={"279px"} backgroundColor="hightlight50">
        <Box
          w="auto"
          h="176px"
          backgroundImage={cidade.picture}
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>

        <Flex justify="space-around" mt="1.5em" align="center">
          <Flex flexDirection="column">
            <Box fontSize="1.5em" color="headingsText" fontWeight="medium">
              {cidade.name}
            </Box>
            <Box color="info">{cidade.country}</Box>
          </Flex>
          <Box>
            <Image src={cidade.flag} />
          </Box>
        </Flex>
      </Box>
    </>
  );
}
