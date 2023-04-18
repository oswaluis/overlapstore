import { Box, Flex } from "@chakra-ui/react";
import React from "react";

interface CategoryLabelProps {
  children: React.ReactNode;
}

export const CenteredLabel: React.FunctionComponent<CategoryLabelProps> = ({
  children,
}) => {
  return (
    <Box
      bg="white"
      zIndex="10"
      position="relative"
      padding="1rem 1rem"
      width="fit-content"
      textTransform="uppercase"
      fontWeight="bold"
      borderRadius="0.25rem"
      textAlign="center"
    >
      {children}
    </Box>
  );
};
