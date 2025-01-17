import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Stack } from "@mui/material";

const Footer = () => {
    const device = useDeviceDetect();

    if (device === 'mobile') {
        return (<Stack className={"footer-container"}>Footer Mobile</Stack>);
    } else {
        return (
            <Stack className={"footer-container"}>
                <Stack className={"main"}>
                    <Stack className={"left"}>
                        <Box component={"div"} className={"footer-box"}>
                            <img src="/img/logo/logoWhite.svg" alt="" className={"logo"} />
                        </Box>
                        <Box component={"div"} className={"footer-box"}>
                            <span>total freen customer care</span>
                            <p>+82 10 4867 5455</p>
                        </Box>
                        <Box component={"div"} className={"footer-box"}>
                            <span>nee live</span>
                            <p>kimjeon@icloud.com</p>
                            <span>Support?</span>
                        </Box>
                        <Box component={"div"} className={"footer-box"}>
                            <p>follow us social media</p>
                            <div className="media-box">
                                <InstagramIcon />
                                <FacebookOutlinedIcon />
                                <LinkedInIcon />
                                <TwitterIcon />
                            </div>
                        </Box>
                    </Stack>
                    <Stack className={"right"}>
                        <Box component={"div"} className={"top"}>
                            <strong>keep yourself up to date</strong>
                            <div>
                                <input type="text" placeholder="Your Email" />
                                <span>Subscribe</span>
                            </div>
                        </Box>
                        <Box component={"div"} className={"bottom"}>
                            <div>
                                <strong>Popular search</strong>
                                <span>Property for Rent</span>
                                <span>Property Low to hide</span>
                            </div>
                            <div>
                                <strong>Quick Links</strong>
                                <span>Terms of Use</span>
                                <span>Privacy Policy</span>
                                <span>Pricing Plans</span>
                                <span>Our Services</span>
                                <span>Contact Support</span>
                                <span>FAQs</span>
                            </div>
                            <div>
                                <strong>Discover</strong>
                                <span>Seoul</span>
                                <span>Gyeongido</span>
                                <span>Busan</span>
                                <span>Jejudo</span>
                            </div>
                        </Box>
                    </Stack>
                </Stack>
                <Stack className={"second"}>
                    <span>Nestar - All rights reserved. Nestar 2024</span>
                    <span>Privacy Terms Sitemap</span>
                </Stack>
            </Stack>
        );
    }

};

export default Footer;