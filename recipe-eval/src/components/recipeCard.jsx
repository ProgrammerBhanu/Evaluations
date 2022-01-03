import Res from './res.jpg';

function Card({title,des,time,method}){
    return <div className="card">
    <img src={Res} alt="" srcset="" />
    <h3>Title: {title}</h3>
    <h4>Description: {des}</h4>
    <h4>Cooking Time: {time}</h4>
    <h4>Cooking Method: {method}</h4>
</div>
}

export default Card;