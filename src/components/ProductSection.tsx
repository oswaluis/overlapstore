import { ProductCard } from "@/components/ProductCard";
import { Props } from "@/pages";
import { slugify } from "@/utils/slugify";
import { Box, Grid } from "@chakra-ui/react";
import Link from "next/link";

export function ProductSection({ products }: Props) {
  return (
    <Grid
      gap="1.85rem"
      gridTemplateColumns={{
        base: "repeat(auto-fit, 255px)",
        md: "repeat(auto-fit, minmax(255px, 1fr))",
      }}
      gridAutoColumns="255px"
      gridAutoFlow={{
        base: "column",
        md: "row",
      }}
      alignItems="stretch"
      gridAutoRows="1fr"
      overflowX={{
        base: "scroll",
        md: "hidden",
      }}
      scrollSnapType="x mandatory"
      scrollSnapStop="always"
    >
      {products.map((product, i) => {
        const slug = slugify(product.title);
        return (
          <Box
            key={product.id}
            marginLeft={{
              base: i === 0 ? "1rem" : "0",
              md: "0",
            }}
            border="solid 1px"
            borderColor={"#46BBC0"}
            scrollSnapAlign={"center"}
          >
            <Link href={`/products/${slug}-${product.id}`}>
              <ProductCard {...product} />
            </Link>
          </Box>
        );
      })}
    </Grid>
  );
}
