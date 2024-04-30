import Carousel from 'react-bootstrap/Carousel';
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://ep1.pinkbike.org/p6pb14786131/p6pb14786131.jpg"
          alt="First slide"
        ></img>
        <Carousel.Caption>
          <h3 >Santa Cruz Nomad</h3>
          <p>Diseñada para enfrentar terrenos difíciles con eficiencia de suspensión y geometría adaptada al descenso agresivo. Con recorridos generosos tanto en la suspensión trasera como en la horquilla delantera, ofrece control y capacidad de absorción de impactos en terrenos escarpados, siendo una opción popular para ciclistas que buscan versatilidad en diferentes condiciones de senderos de enduro.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://montenbaik.com/wp-content/uploads/2016/09/TallboyPlus.jpg"
          alt="Second slide"
        ></img>
        <Carousel.Caption>
          <h3>Santa Cruz Tallboy</h3>
          <p>Diseñada específicamente para el cross-country (XC), una disciplina de ciclismo de montaña que se enfoca en recorridos rápidos y técnicos con ascensos y descensos pronunciados. La Tallboy es conocida por su eficiencia en la pedalada, su ligereza y su geometría optimizada para la velocidad y la agilidad en terrenos variados.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://nsmb.com/media/images/scb-v10-tim-coleman-seymour-cove-130619-ajbarla.original_2Ec7Hts.jpg"
          alt="Third slide"
        ></img>
        <Carousel.Caption>
          <h3>Santa Cruz V10</h3>
          <p>Diseñada para conquistar los terrenos más exigentes y técnicos del ciclismo de montaña en DH(DownHill). Con su construcción robusta y su suspensión de largo recorrido, la V10 ofrece una plataforma sólida y estable para enfrentar descensos extremos a altas velocidades.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}
export default UncontrolledExample;