const rebaja = 0.1
export class Compra{

    precio(precio_unitario:number){
        return precio_unitario 
    }

    cantidad(cantidad_producto:number){
        return cantidad_producto
    }

    descuento(cantidad_producto:number, precio_unitario:number){
        if (cantidad_producto >= 10 && precio_unitario > 100){
            return rebaja

        } else 
            {
            return 0
            }
    }}