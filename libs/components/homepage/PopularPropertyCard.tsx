import { Box, Divider, Stack, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const PopularPropertyCard = () => {
    return (
        <Stack className="popular-card-box">
            <Box
                className={"card-img"}
                style={{
                    backgroundImage: `url("/img/banner/types/apartment.webp")`,
                }}
            >
                <div className={"status"}>
                    <img src="/img/icons/electricity.svg" alt="" />
                    <span>top</span>
                </div>

                <div className={"price"}>$880000</div>
            </Box>
            <Box className={"info"}>
                <strong className="title">Gangnam Aparment</strong>
                <p className="desc">Beauty in Seoul</p>
                <div className={"options"}>
                    <div>
                        <img src="/img/icons/bed.svg" alt="" />
                        <span>4 bed</span>
                    </div>
                    <div>
                        <img src="/img/icons/room.svg" alt="" />
                        <span>4 rooms</span>
                    </div>
                    <div>
                        <img src="/img/icons/expand.svg" alt="" />
                        <span>600 m2</span>
                    </div>
                </div>

                <Divider sx={{ mt: "15px", mb: "17px" }} />
                <div className={"bott"}>
                    <p>Rent</p>
                    <div className={"view-like-box"}>
                        <IconButton color={"default"}>
                            <RemoveRedEyeIcon />
                        </IconButton>
                        <Typography className="view-cnt">300</Typography>
                        <IconButton color={"default"}>
                            <FavoriteIcon style={{ color: "red" }} />
                        </IconButton>
                        <Typography className="view-cnt">500</Typography>
                    </div>
                </div>
            </Box>
        </Stack>
    );
};

export default PopularPropertyCard;