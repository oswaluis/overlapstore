import Image from "next/image";
import banner1 from "/public/pic-categories-mens-clothing.jpg";
import banner2 from "/public/pic-categories-jewelery.jpg";
import { CenteredLabel } from "@/components/CenteredLabel";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";

export function BannerSection() {
  return (
    <SimpleGrid
      minChildWidth="320px"
      spacing={{
        base: "1rem",
        md: "2rem",
      }}
    >
      <Box position="relative">
        <Image src={banner1} alt="" />
        <Box
          position="absolute"
          left={"50%"}
          top="50%"
          transform="translate(-50%, -50%)"
        >
          <CenteredLabel>
            <Text fontSize="sm" color="#46BBC0">
              Nuevos Productos
            </Text>
          </CenteredLabel>
        </Box>
      </Box>
      <Box position="relative">
        <Image src={banner2} alt="" />
        <Box
          position="absolute"
          left={"50%"}
          top="50%"
          transform="translate(-50%, -50%)"
        >
          <CenteredLabel>
            <Text fontSize="xs" color="#46BBC0">
              Ofertas
            </Text>
            <Text>Hasta 6 cuotas sin interes</Text>
          </CenteredLabel>
        </Box>
      </Box>
    </SimpleGrid>
  );
}
