import { Box, Stack } from "@mui/material";

const TopAgentsCard = () => {
    return (
        <Stack className="top-card-box">
            <Box className={"card-img"}>
                <img className={"card-img-agent"} src="/img/profile/agent.png" alt="" />
            </Box>
            <Box className={"info"}>
                <strong className="title">SAM</strong>
                <p className="desc">Agent</p>
            </Box>
        </Stack>
    );
};

export default TopAgentsCard;