// pages/posts/[id].js
import Image from "next/image";
import { slugify } from "@/utils/slugify";
import { Product as ProductModel } from "../index";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Link from "next/link";
import {
  AspectRatio,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

import { RateStar } from "@/components/RateStar";
import {
  FaBalanceScale,
  FaBitcoin,
  FaCcAmex,
  FaCcMastercard,
  FaCcVisa,
  FaHeart,
  FaMailBulk,
  FaPaypal,
  FaShareAlt,
  FaTruck,
  FaUndo,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PDPHeader } from "@/components/PDPHeader";

// Generates `/posts/1` and `/posts/2`
type Props = {
  product: ProductModel;
};
function Price({ price }: { price: number }) {
  const currency = new Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "ARS",
  }).format(price);
  return <p>{currency} </p>;
}

export default function Product({ product }: Props) {
  const { price, category, description, image, id, rating, title } = product;
  return (
    <>
      <PDPHeader product={product} />
      <Container
        as={Grid}
        gridTemplateColumns={"558px 1fr"}
        gap={"2rem"}
        mt={"2rem"}
      >
        <AspectRatio position="relative" ratio={1} maxWidth="100%">
          <Image
            src={image}
            alt=""
            fill={true}
            style={{ objectFit: "contain" }}
          ></Image>
        </AspectRatio>
        <Box>
          <Text
            fontWeight={"semibold"}
            textTransform={"uppercase"}
            fontSize={"md"}
            noOfLines={2}
          >
            {title}
          </Text>
          <Text>{category}</Text>
          <Divider variant={"color"} />
          <Flex
            alignItems={"center"}
            gap={"1.5rem"}
            justifyContent={"space-between"}
            mb={"1.5rem"}
          >
            <Flex alignItems={"center"} gap={"1rem"}>
              <Text fontWeight={"bold"} fontSize={"lg"}>
                <Price price={price} />
              </Text>
              <Button>Agregar al carrito</Button>
            </Flex>
            <Flex gap={"1rem"}>
              <Link href={"#"}>
                <FaHeart color="#46BBC0" fontSize={"1.5rem"} />
              </Link>
              <Link href={"#"}>
                <FaBalanceScale color="#46BBC0" fontSize={"1.5rem"} />
              </Link>
            </Flex>
          </Flex>
          <Text textAlign={"justify"} fontSize={"md"}>
            {description}
          </Text>
          <Divider variant={"color"} />
          <Flex gap={"1rem"} justifyContent={"center"}>
            <Flex as={Link} href={"#"} gap={"0.5rem"}>
              <FaTruck fontSize={"1.5rem"} color="#46BBC0" />
              <Text>Delivery</Text>
            </Flex>
            <Flex as={Link} href={"#"} gap={"0.5rem"}>
              <FaUndo fontSize={"1.5rem"} color="#46BBC0" />
              <Text>Devolver</Text>
            </Flex>
            <Flex as={Link} href={"#"} gap={"0.5rem"}>
              <MdEmail fontSize={"1.5rem"} color="#46BBC0" />
              <Text> Consultas</Text>
            </Flex>
          </Flex>
          <Flex alignItems={"center"}>
            <Text
              textTransform={"uppercase"}
              fontWeight={"semibold"}
              whiteSpace={"nowrap"}
              pr={"0.5rem"}
            >
              Pago seguro
            </Text>
            <Divider variant="color" />
          </Flex>
          <Flex
            fontSize={"2.5rem"}
            color={"#46BBc0"}
            gap="1rem"
            justifyContent={"space-evenly"}
            my={"1rem"}
          >
            <FaPaypal />
            <FaCcAmex />
            <FaCcVisa />
            <FaCcMastercard />
            <FaBitcoin />
          </Flex>
          <Divider variant={"color"} />
        </Box>
      </Container>
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
