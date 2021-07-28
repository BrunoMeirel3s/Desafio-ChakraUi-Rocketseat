import Image from "next/image";
import { Flex, useBreakpointValue } from "@chakra-ui/react";

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
    </>
  );
}
