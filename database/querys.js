export const queries  = {
    // consultas productos
    getAllProducts: "SELECT * FROM products",
    addNewProduct: "INSERT INTO products (producto, precio) VALUES(@producto, @precio)",
    getProductoById: "SELECT * FROM products WHERE id = @id",
    deleteProductoById: "DELETE FROM products WHERE id = @id",
    getTotalProductos: "SELECT COUNT(*) FROM products",
    updateProductById: "UPDATE products SET producto = @producto, precio = @precio WHERE id = @id",
    // consultas login
    addUser: "INSERT INTO usuarios (username, email, password) VALUES(@username, @email, @password)",
    findUserById: "SELECT identificacion, nombres, apellidos, usuario, password FROM usuarios WHERE identificacion = @identificacion",
    // usuarios
    findUser: "SELECT * FROM usuarios WHERE identificacion = @identificacion",
    // consultas productos
    getAllProductos: "SELECT id, nombre_producto, id_categoria, observacion FROM productos",
    getAllAreas: "SELECT areas.id, areas.nombre_area, areas.id_site, sites.js.nombre_site FROM areas, sites.js, usuarios WHERE usuarios.id = areas.id_usuario AND areas.id_site = sites.js.id AND usuarios.identificacion = @identificacion",
    //getAllAreasByUsuario: "SELECT areas.id AS idArea, areas.nombre_area AS nombreArea, sites.js.nombre_site AS nombreSite, operaciones.nombre_operacion AS nombreOperacion FROM areas, sites.js, operaciones WHERE areas.id_site = sites.js.id AND sites.js.id_operacion = operaciones.id AND areas.id_usuario = @identificacion"
    addProductoBascula: "INSERT INTO productos_bascula (id_producto, peso, fecha_registro, id_area, id_site, id_usuario) VALUES(@id_producto, @peso, @fecha_registro, @id_area, @id_site, @id_usuario)",
}
