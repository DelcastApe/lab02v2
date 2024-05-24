import Cletas from './data/cletas.json'
import "./styles.css";

const Single= () => {
    const slug= window.location.pathname
    const cleta = Cletas.find(it=>slug.includes( it.slug))
    return <>
    <h1>{cleta.name}</h1>
    <div className='caja'><img className='img-thumbnail' src={cleta.image} ></img></div>
    
    <p> 
        {cleta.desc}
    </p>
    </>
}

export default Single;