export default function ItemCard(props) {
    return(
        <>
          <div className="item-card">
            <img src="../../public/cpu.png" alt=""></img>
            <div className="card-container">
              <p className="itemName">{props.name}</p>
              <p className="itemPrice">$ {props.price}</p>
              <p className="itemDetails">{props.frequency}, {props.nCores} cores, {props.nmArch}</p>
            </div>
          </div>
        </>
    )
}