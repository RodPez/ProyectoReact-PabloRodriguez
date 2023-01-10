import React, {useState  } from "react"
import "./style.css"
import {BsCartDashFill, BsCartPlusFill } from "react-icons/bs";


const ItemCount = ({onAdd,initial,stockProd}) => {
    const [count , setCount] = useState(initial)

    const sumarContador = () => {
        if (count < stockProd) {
            setCount (count + 1) 
        }
    }

    const restarContador = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }
   
    return(
        <div className="contador">
            <div className="d-flex flex-row  ms-3 align-items-center">
                {
                    stockProd > 0 
                    ?<p className="fs-5 text-success">Stock disponible </p>
                    :<p className="fs-5 text-danger">Sin Stock </p>
                }
                
            </div>
            <div className="d-flex flex-row  ms-3 align-items-center ">
                <button className="btn btn-light btn-lg "  onClick={restarContador} > <BsCartDashFill/> </button>
                <h3 className="ms-4 fs-5 "> {count} </h3>
                <button className="btn btn-light btn-lg ms-4" onClick={sumarContador}> <BsCartPlusFill /> </button>
                <button className="btn btn-light ms-4 fs-5" onClick={() => onAdd(count)}>Agregar al carrito.</button>
            </div>
        </div>
    )
}

export default ItemCount;
