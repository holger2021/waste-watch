export const queriesIndicadorBascula  = {
    findIndicadorBasculaById: "SELECT id, nombre_bascula, observacion FROM indicador_bascula WHERE id = @idBascula",
    getRegistrosIndicador: "SELECT nombre_producto, peso, fecha_registro, nombre_area, nombre_site FROM productos, areas, sites, productos_basula WHERE productos.id = productos_bascula.id_producto AND areas.id = productos_bascula.id_area AND sites.id = productos_bascula.id_site AND id_indicador_bascula = @id_indicador_bascula"
}
