import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Container } from "@mui/material";

const PropertyDetail = () => {
    console.log('PROPERTY Detail COMPONENT - PAGES ROUTING');
    return (
        <>
            <Container>Property detail List</Container>
        </>
    )
}
export default withLayoutBasic(PropertyDetail);