import withLayoutMain from "@/libs/components/layout/LayoutHome";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Stack>
      <Container>
        <Stack flexDirection={"column"}>
          <Stack>
            <Stack className='container' >Popular properties</Stack>
          </Stack>
          <Stack>
            <Stack className='container' >Top Agents</Stack>
          </Stack>
          <Stack>
            <Stack className='container' >Top Properties</Stack>
          </Stack>
          <Stack>
            <Stack className='container' >Events</Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}

export default withLayoutMain(Home);
