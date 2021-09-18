export const queriesProductos  = {
    productosByArea: "SELECT productos.id, productos.nombre_producto FROM productos, productos_area, areas WHERE productos.id = productos_area.id_producto AND productos_area.id_area = areas.id And productos_area.id_area = @idArea",
}
