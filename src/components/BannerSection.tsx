import banner1 from "/public/pic-categories-mens-clothing.jpg";
import banner2 from "/public/pic-categories-jewelery.jpg";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { PromoBanner } from "./PromoBanner";

export function BannerSection() {
  return (
    <SimpleGrid
      minChildWidth="320px"
      spacing={{
        base: "1rem",
        md: "2rem",
      }}
    >
      <PromoBanner image={banner1}>
        <Text fontSize="sm" color="#46BBC0">
          Nuevos Productos
        </Text>
      </PromoBanner>
      <PromoBanner image={banner2}>
        <Text fontSize="xs" color="#46BBC0">
          Ofertas
        </Text>
        <Text>Hasta 6 cuotas sin interes</Text>
      </PromoBanner>
    </SimpleGrid>
  );
}
