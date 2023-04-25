import { Flex, Link } from "@chakra-ui/react";
import { Product as ProductModel } from "../pages/index";
type Props = {
  product: ProductModel;
};

export function Breadcrumbs({
  product: { title, price, image, rating, category, description },
}: Props) {
  return (
    <Flex>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="{`${category}`}">{category}</Link>
        </li>
        <li>
          <Link href="">{title}</Link>
        </li>
      </ul>
    </Flex>
  );
}
