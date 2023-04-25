// pages/posts/[id].js
import Image from "next/image";
import { slugify } from "@/utils/slugify";
import { Product as ProductModel } from "../index";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  AspectRatio,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { RateStar } from "@/components/RateStar";
import { FaShareAlt } from "react-icons/fa";

// Generates `/posts/1` and `/posts/2`
type Props = {
  product: ProductModel;
};

export default function Product({
  product: { id, title, price, image, rating, category, description },
}: Props) {
  return (
    <>
      <Box bg="gray.100" padding="1rem">
        <Container>
          <Flex alignItems={"center"} justifyContent={"space-between"}>
            <Flex
              as={UnorderedList}
              listStyleType={"none"}
              gap={"0.5rem"}
              fontSize={"sm"}
            >
              <ListItem textTransform={"capitalize"}>
                <Link href="/">Home</Link>
                <ListIcon
                  as={ChevronRightIcon}
                  ml={"0.5rem"}
                  w={18}
                  h={18}
                ></ListIcon>
              </ListItem>
              <ListItem textTransform={"capitalize"}>
                <Link href="{`${category}`}">{category}</Link>
                <ListIcon
                  as={ChevronRightIcon}
                  ml={"0.5rem"}
                  w={18}
                  h={18}
                ></ListIcon>
              </ListItem>
              <ListItem textTransform={"capitalize"}>
                <Link href="">{title}</Link>
              </ListItem>
            </Flex>
            <Button
              leftIcon={<FaShareAlt width={18} height={18} />}
              iconSpacing={"1rem"}
              variant={"ghost"}
              color={"#ab40c0"}
            >
              Share
            </Button>
          </Flex>
          <Heading
            as="h1"
            fontSize={"2xl"}
            textAlign={"center"}
            margin={"1rem"}
          >
            {title}
          </Heading>

          <Flex
            gap={"0.5rem"}
            justifyContent={"space-between"}
            alignItems={"baseline"}
          >
            <Box>
              <p>
                <Flex gap={"0.3rem"}>
                  <RateStar rate={rating.rate} />
                  <Text fontSize={"sm"}>/ {rating.count} reviews</Text>
                </Flex>
              </p>
            </Box>
            <Flex gap={"1rem"}>
              <Text fontSize={"sm"}>
                SKU : <span>{id}</span>
              </Text>
              <Text fontSize={"sm"}>Disponible</Text>
            </Flex>
          </Flex>
        </Container>
      </Box>
      <AspectRatio position="relative" ratio={1} maxWidth="100%">
        <Image
          src={image}
          alt=""
          fill={true}
          style={{ objectFit: "contain" }}
        ></Image>
      </AspectRatio>
    </>
  );
}
export async function getStaticPaths() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  const slugs: string[] = products.map((product: ProductModel) => {
    return `${slugify(product.title)}-${product.id}`;
  });
  console.log(slugs);
  return {
    // paths: [{ params: { slug: "1" } }, { params: { slug: "2" } }],
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: { params: { slug: string } }) {
  const id = context.params.slug.split("-").pop();

  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => res.json()
  );

  return {
    // Passed to the page component as props
    props: {
      product,
    },
  };
}
