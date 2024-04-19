import { Carousel } from "react-responsive-carousel";

const Main = () => {
    return <main>
        <div class>
  <div class="card-body">
    <Carousel>
        <div>
            <img src="https://www.todomountainbike.net/images/articles/2019/santa-cruz-tallboy-2020.jpg"alt="ddd"/>
        </div>
        <div>
            {<img src="https://nsmb.com/media/images/nsmb_2017_gearreview_SantaCruz_n.2e16d0ba.fill-1920x1200.jpg"alt="ddd"/>}
        </div>
        <div>
            {<img src="https://nsmb.com/media/images/scb-v10-tim-coleman-seymour-cove.2e16d0ba.fill-1920x1200.jpg"alt="ddd"/>}
        </div>
        <div>
            {<img src="https://preview.redd.it/uz1bh2rs2y1z.jpg?width=640&crop=smart&auto=webp&s=e7401f82e905c901a66746524649867105b76ff5"alt="ddd"/>}
        </div>
    </Carousel>
    <h1 class="card-title">Santa Cruz Bikes</h1>
    <p class="card-text">Sumérgete en la emoción del ciclismo de montaña con Santa Cruz Bicycles, donde la calidad superior, la innovación constante y el rendimiento inigualable se combinan para ofrecerte una experiencia inigualable en cada pedalada. Al unirte a la comunidad apasionada de Santa Cruz, no solo obtienes una bicicleta de primer nivel, sino que también te unes a una red global de ciclistas que comparten tu amor por la aventura y la exploración. Con un firme compromiso con la sostenibilidad y la responsabilidad ambiental, Santa Cruz te invita a vivir aventuras épicas mientras creas recuerdos duraderos en cada ruta.</p>
    <a href="#" class="btn btn-primary">COMPRA YA</a>
  </div>
</div>
    </main>;
}

export default Main;