import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';

// Mock product data (replace with API call in real application)
const products = [
  { id: 1, name: 'Pioneer Dj DDJ-Flx4 Controller', price: 7888, image: 'https://media.takealot.com/covers_images/51809b6549ae45a49b096e41b6ba382d/s-zoom.file' },
  { id: 2, name: 'M-Audio BX4 Studio Monitors', price: 3499, image: 'https://media.takealot.com/covers_images/dd0e10dc8e76471797abffef20d4202d/s-zoom.file' },
  { id: 3, name: 'Pioneer DJ XDJ-RX3 Digital DJ Controller', price: 50389, image: 'https://media.takealot.com/covers_images/bfb730d87936498e9f98a55ea9b5cde1/s-zoom.file' },
  { id: 4, name: 'Pioneer DJM-A9', price: 71900, image: 'https://media.takealot.com/covers_images/440758de61154467b078f1cd27ff3be2/s-zoom.file' },
  { id: 4, name: 'Stage Led Moving Head Light with 7 x 10W RGBW 4 in 1 LED', price: 848, image: 'https://media.takealot.com/covers_images/1da1c38dadf040628dbf19748a327c87/s-zoom.file' },
  { id: 4, name: 'Pioneer CDJ-3000 Professional DJ Multi Player', price: 69500, image: 'https://media.takealot.com/covers_images/29510f46f2164ac8861c23390d7fdbb4/s-zoom.file' },
  { id: 4, name: 'Hybrid PA15DSP & LS18A Combo', price: 29919, image: 'https://soundselect.co.za/pub/media/catalog/product/cache/6fcd126cabf4a3279a89f9672eb9ac6c/image/2018662af/hybrid-pa15dsp-ls18a-combo.webp' },
  { id: 4, name: 'OMNIS-DUO', price: 39999, image: 'https://soundselect.co.za/pub/media/catalog/product/cache/0967cdbab35d85d490e43484e9e4ca62/image/200249b30/omnis-duo.jpg' },
  { id: 4, name: 'Pioneer DDJ-FLX6-GT', price: 16490, image: 'https://soundselect.co.za/pub/media/catalog/product/cache/0967cdbab35d85d490e43484e9e4ca62/image/19201f331/pioneer-ddj-flx6-gt.jpg' },
  { id: 4, name: 'Pioneer DJ DDJ-REV7 2-Channel Serato DJ Pro Controller', price: 45595, image: 'https://media.takealot.com/covers_images/70b33d2d278a43fc8c8f55ff87412b20/s-zoom.file' },
  { id: 4, name: 'Pioneer Dj DDJ-Flx10', price: 40789, image: 'https://media.takealot.com/covers_images/9bcb640b16c343a2959ca9f4404419c1/s-zoom.file' },
  { id: 4, name: 'Hybrid Party Box 15', price: 7795, image: 'https://soundselect.co.za/pub/media/catalog/product/cache/0967cdbab35d85d490e43484e9e4ca62/image/1011085f8/hybrid-party-box-15.jpg' },
];

const ProductPage = () => {
  return (
    <Container className="mt-5">
      <h2>Our Products</h2>
      <Row>
        {/* Map through products and render ProductCard for each */}
        {products.map(product => (
          <Col key={product.id} xs={12} md={6} lg={3} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductPage;