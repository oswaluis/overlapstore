import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import aceite from "public/aceite.jpg";
import motor from "public/vw.jpg";

export function RegistrationSection() {
  return (
    <Container
      background={"linear-gradient(180deg, #f3f2f2 0%, #46BBC0 100%)"}
      m={{
        base: "8.75rem 0 0",
        md: "2rem auto",
      }}
      p={{
        base: "1.5rem",
        md: "3.5rem",
      }}
      maxW="100%"
      position={"relative"}
    >
      <Box
        position={"absolute"}
        right={{
          base: "0",
          md: "50%",
        }}
        top={{
          base: "-100",
          md: "initial",
        }}
        width={{
          base: "200px",
          md: "400px",
        }}
        height={{
          base: "128px",
          md: "300px",
        }}
        transform={{ md: "translateX(620px)" }}
      >
        <Image src={motor} alt="" fill={true}></Image>
      </Box>
      <Box
        position={"absolute"}
        left={{
          base: "0",
          md: "50%",
        }}
        top={{
          base: "-100",
          md: "initial",
        }}
        width={{
          base: "200px",
          md: "400px",
        }}
        height={{
          base: "128px",
          md: "300px",
        }}
        transform={{ md: "translateX(-630px)" }}
      >
        <Image src={aceite} alt="" fill={true}></Image>
      </Box>
      <Box as="article" bgColor="#FFF" p="2rem" maxW="33rem" margin="auto">
        <Grid maxW="22rem" margin="auto" textAlign="center" gap="2rem">
          <header>
            <Heading size="xs" textTransform="uppercase" color="#46BBC0">
              Promo usuario nuevo
            </Heading>
            <Heading size="xl" textTransform="uppercase">
              Registrate y obten
              <Text as="span" color="red">
                10% en tu primera compra
              </Text>
            </Heading>
          </header>
          <Grid as="form" action="" gap="1.5rem">
            <FormControl>
              <Input
                height="4rem"
                type="email"
                placeholder="Email"
                textAlign="inherit"
                borderRadius="0"
                bgColor="gray.100"
              ></Input>
            </FormControl>
            <Button size="xl" width="100%" h="4rem">
              Registrate
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
