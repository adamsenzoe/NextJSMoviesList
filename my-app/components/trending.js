import { Card, Col, Container, Row,Image } from 'react-bootstrap';


const Trending = () => {
   return(
<Container>
   <Row>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage1'>
        <Image src="../assets/images/1_greenbull.jpg" alt="card image 1"  height="250px" width="100px"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text> One Piece : Red Film </Card.Text>
         <Card.Text>Bagus 3.8/4.0</Card.Text>
         </div>
      </Card>
      </Col>
      
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage2'>
         <Image src='movie2.JPG' alt="card image 2"  height="250px" width="100px"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Xmen Days of Future Past</Card.Text>
         <Card.Text>Bagus 3.8/4.0</Card.Text>
         </div>
       </Card>
       </Col>

       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage3'>
         <Image src='2.jpg' alt="card image 3"  height="250px" width="100px"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Xmen Days of Future Past</Card.Text>
         <Card.Text>Bagus 3.8/4.0</Card.Text>
         </div>
       </Card>
       </Col>

       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage4'>
         <Image src='3.jpg' alt="card image 4"  height="250px" width="100px"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Xmen Days of Future Past</Card.Text>
         <Card.Text>Bagus 3.8/4.0</Card.Text>
         </div>
       </Card>
       </Col>

       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage1'>
        <Image src="../assets/images/trending2.jpg" alt="card image 5"  height="250px" width="100px"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text> One Piece : Red Film </Card.Text>
         <Card.Text>Bagus 3.8/4.0</Card.Text>
         </div>
      </Card>
      </Col>

      <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage1'>
        <Image src="../assets/images/trending2.jpg" alt="card image 6"  height="250px" width="100px"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text> One Piece : Red Film </Card.Text>
         <Card.Text>Bagus 3.8/4.0</Card.Text>
         </div>
      </Card>
      </Col>

       

   </Row>
</Container>

   )
}
export default Trending
