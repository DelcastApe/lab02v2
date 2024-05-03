import Cletas from './data/cletas.json'

const Single= () => {
    const slug= window.location.pathname
    const cleta = Cletas.find(it=>slug.includes( it.slug))
    return <>
    <h1>{cleta.name}</h1>
    <img src={cleta.image} ></img>
    </>
}

export default Single;