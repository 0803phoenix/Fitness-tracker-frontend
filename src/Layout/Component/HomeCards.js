import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';


const HomeCards = () => {
  return (
   <> 
    <CardGroup>
     <Card className="bg-dark text-white">
      <Card.Img src="homepagecard1.jpg" alt="Card image" />
      <Card.ImgOverlay>
        {/* <Card.Title>Card Title</Card.Title> */}
        {/* <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </Card.Text> */}
      </Card.ImgOverlay>
     </Card>
     <Card>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
     </Card>  
    </CardGroup>
    <CardGroup>
    <Card>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
     </Card>  
     <Card className="bg-dark text-white">
      <Card.Img src="homepagecard1.jpg" alt="Card image" />
      <Card.ImgOverlay>
        {/* <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </Card.Text> */}
      </Card.ImgOverlay>
     </Card> 
    </CardGroup>
    
   </>  
  );
}

export default HomeCards;