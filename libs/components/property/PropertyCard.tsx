import { Box, IconButton, Stack, Typography } from "@mui/material";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Link from "next/link";


const PropertyCard = () => {
    const imagePath: string = '/img/banner/header1.svg';

    return (
        <Stack className={'card-config'}>
            <Stack className={'top'}>
                <Link
                    href={{
                        pathname: '/property/detail',
                        query: { id: 'test123sdijfsdf' },
                    }}
                >
                    <img src={imagePath} alt="" />
                </Link>
                <Box className={'top-badge'}>
                    <img src="/img/icons/electricity.svg" alt="" />
                    <Typography>Top</Typography>
                </Box>
                <Box className={'price-box'}>
                    <Typography>$579000</Typography>
                </Box>
            </Stack>
            <Stack className={'bottom'}>
                <Stack className={'name-address'}>
                    <Stack className={'name'}>
                        <Link
                            href={{
                                pathname: '/property/detail',
                                query: { id: 'test123sdijfsdf' },
                            }}>
                            <Typography>Blackstone Villa</Typography>
                        </Link>
                    </Stack>
                    <Stack className={'address'}>
                        <Typography>Jeju, Hallasan 900 - 9</Typography>
                    </Stack>
                </Stack>
                <Stack className={'options'}>
                    <Stack className={'option'}>
                        <img src="/img/icons/bed.svg" alt="" />{' '}
                        <Typography>4 beds</Typography>
                    </Stack>
                    <Stack className={'option'}>
                        <img src="/img/icons/room.svg" alt="" />{' '}
                        <Typography>8 rooms</Typography>
                    </Stack>
                    <Stack className={'option'}>
                        <img src="/img/icons/expand.svg" alt="" />{' '}
                        <Typography>200 m2</Typography>
                    </Stack>
                </Stack>
                <Stack className={'divider'}></Stack>
                <Stack className={'type-buttons'}>
                    <Stack className={'type'}>
                        <Typography sx={{ fontWeight: 500, fontSize: '13px' }}>
                            Rent
                        </Typography>
                        <Typography sx={{ fontWeight: 500, fontSize: '13px' }}>
                            Rent
                        </Typography>
                    </Stack>
                    <Stack className={'buttons'}>
                        <IconButton color={'default'}>
                            <RemoveRedEyeIcon />
                        </IconButton>
                        <Typography className={'view-cnt'}>100</Typography>
                        <IconButton color={'default'}>
                            <FavoriteIcon color='primary' />
                        </IconButton>
                        <Typography className={'view-cnt'}>20</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default PropertyCard;