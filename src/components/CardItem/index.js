import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`card-details-container ${className}`}>
      <div>
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
      </div>
      <img className="img" src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
