import Cletas from './data/cletas.json'
import Carousel from 'react-bootstrap/Carousel';

const handleClick= ()=>{
  console.log("Click");
}
function UncontrolledExample() {
  return (
    <Carousel>
      {
        Cletas.map(it=>{
          return <Carousel.Item onClick={(e)=>{
            e.preventDefault();
            handleClick}}>
          <img
            className="d-block w-100"
            src={it.image}
            alt="First slide"
          ></img>
          <Carousel.Caption>
            <h3 >{it.name}</h3>
            <h5>{it.description}</h5>
          </Carousel.Caption>

        </Carousel.Item>
        })
      }
      

    </Carousel>
  );
}
export default UncontrolledExample;