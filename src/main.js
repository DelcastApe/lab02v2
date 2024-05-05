import { Navigate, useNavigate } from 'react-router-dom';
import Cletas from './data/cletas.json'
import Carousel from 'react-bootstrap/Carousel';


function UncontrolledExample() {

  const navigate= useNavigate();

const handleClick= (slug)=>{
  navigate("/detalle/"+slug)
}

  return (
    <Carousel>
      {
        Cletas.map(it=>{
          return <Carousel.Item onClick={(e)=>{
            e.preventDefault();
            handleClick(it.slug)}}>
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