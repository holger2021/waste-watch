export const queriesProductosBascula  = {
    saveProductosBascula: "INSERT INTO productos_bascula (id_producto, peso, fecha_registro, id_area, id_site, id_indicador_bascula, sector, menu, tipo) VALUES(@id_producto, @peso, @fecha_registro, @id_area, @id_site, @id_indicador_bascula, @sector, @menu, @tipo)",
    getRegistrosIndicador: "SELECT productos.nombre_producto, productos_bascula.peso, productos_bascula.fecha_registro, areas.nombre_area, sites.nombre_site FROM productos, areas, sites, productos_bascula WHERE productos.id = productos_bascula.id_producto AND areas.id = productos_bascula.id_area AND sites.id = productos_bascula.id_site AND id_indicador_bascula = @id_indicador_bascula"
}
