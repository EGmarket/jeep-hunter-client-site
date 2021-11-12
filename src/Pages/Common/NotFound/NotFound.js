import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';

const NotFound = () => {

    const [banners, setBanners] = useState([])

    useEffect(() => {
      fetch("https://shrouded-waters-34651.herokuapp.com/common")
        .then((res) => res.json())
        .then((data) => setBanners(data));
    }, []);
    return (
        <Container>
            <h2>This is not found page</h2>
            {banners.map(banner => <div>
                <img src={banner.bnr1} alt="" srcset="" />
            </div>)}
        </Container>
    );
};

export default NotFound;