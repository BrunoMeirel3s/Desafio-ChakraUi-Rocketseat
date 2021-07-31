import Image from "next/image";
import { Flex, useBreakpointValue, Link, Icon } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

import logoImg from "../../assets/logo.png";

interface HeaderProps {
  voltar?: boolean;
}

export default function Header({ voltar = false }: HeaderProps) {
  const imageSizes = useBreakpointValue({
    base: { width: 81, height: 20 },
    md: {
      width: 184.06,
      height: 45.92,
    },
  });
  return (
    <>
      <Flex
        as="header"
        h={["3.150em", "5em", "5.8em"]}
        marginTop="0.5em"
        marginBottom="0.5em"
        align="center"
      >
        {voltar ? (
          <Link href="http://localhost:3005" ml="2rem">
            <Icon as={ChevronLeftIcon}></Icon>
          </Link>
        ) : (
          ""
        )}
        <Link
          href="http://localhost:3005"
          _hover={{ textDecoration: "none" }}
          mr="auto"
          ml="auto"
        >
          <Image
            src={logoImg}
            width={imageSizes?.width}
            height={imageSizes?.height}
          ></Image>
        </Link>
      </Flex>
    </>
  );
}
