function Card(props){
    return <div className="card p-0" style={{width: "24rem"}}>
            <img src={props.img} className="img-fluid card-img-top" alt="..." />
            <div className="card-body text-start px-4 py-5 mb-3">
              <h4 className="card-title text-secondary">{props.title}</h4>
              <p className="card-text fs-1 text-dark fw-bold">{props.name}</p>
              <a href={props.link} className="button fs-4 text-secondary">Watch Now</a>
            </div>
          </div>
}

export default Card;