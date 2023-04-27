import {
  Box,
  Container,
  Flex,
  ListItem,
  ListIcon,
  UnorderedList,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { RateStar } from "@/components/RateStar";
import { FaShareAlt } from "react-icons/fa";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Product } from "@/pages";

type Props = {
  product: Product;
};
export function PDPHeader({
  product: { id, title, price, image, rating, category, description },
}: Props) {
  return (
    <Box bg="gray.100" padding="1rem">
      <Container>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Flex
            as={UnorderedList}
            listStyleType={"none"}
            gap={"0.5rem"}
            fontSize={"sm"}
          >
            <ListItem textTransform={"capitalize"} whiteSpace={"nowrap"}>
              <Link href="/">Home</Link>
              <ListIcon
                as={ChevronRightIcon}
                ml={"0.5rem"}
                w={18}
                h={18}
              ></ListIcon>
            </ListItem>
            <ListItem textTransform={"capitalize"} whiteSpace={"nowrap"}>
              <Link href="{`${category}`}">{category}</Link>
              <ListIcon
                as={ChevronRightIcon}
                ml={"0.5rem"}
                w={18}
                h={18}
              ></ListIcon>
            </ListItem>
            <ListItem textTransform={"capitalize"}>
              <Link href="">
                <Text noOfLines={1}>{title}</Text>
              </Link>
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
        <Heading as="h1" fontSize={"2xl"} textAlign={"center"} margin={"1rem"}>
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
  );
}
