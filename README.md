# mongoose_tp

## El siguiente diagrama *saleSchema* representa un modelo embebido de un empleado y el producto que vendio

## Explicacion: *saleSchema*

### El usuario requiere ingresar su email (`email`) y contraseña (`password`) para autenticar sus credenciales y registrar su venta.

### Posteriormente al usuario se le requerira registrar el nombre del (`nameProduct`) que vendio y el monto de la venta (`amountSold`)

#### `idProduct` corresponde a el id del producto vendido (Este id esta alojado en otro documento)

#### `idSale` es un id autoincremental para cada venta

## La elección de un sistema embebido proviene de la sencillez y unicidad del proceso. El manejo de pocos datos facilita el colocarlos todos en un solo Schema evitando errores y codigos muy largos para buscar campos