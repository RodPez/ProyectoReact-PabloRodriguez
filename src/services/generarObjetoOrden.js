const generarObjetoOrden = ({
    nombre = "",
    email = "",
    telefono = "",
    cart = [],
    total = 0
}) =>{
    return {
        comprador: {
            nombre: nombre,
            email: email,
            telefono: telefono,
        },
        items: cart,
        total: total,
        creado: new Date().toLocaleString()
    }
}

export default generarObjetoOrden;