// Paquete para manejar la conexion con el indicador de la bascula
const SerialPort = require("serialport");

class Puerto  {
    // propiedad para manejo de la conexion con el puerto
    port = null;

    constructor(puertoCom) {
        if(!this.port) {
            // ajustes del puerto y su codificacion para entender los valores recibidos por el indicador
            this.port = new SerialPort(puertoCom,
                {
                    baudRate: 9600,
                    dataBits: 8,
                    parity: 'none',
                    stopBits: 1,
                    rtscts: false
                },
                null
            ).setEncoding('utf8');

            // Apertura del puerto
            this.port.on('open', () => {
                console.log('Port open...');
            });
        }
        else {
            return this.port;
        }

    }

    // metodo para obtener el valor de lo que pesa el indicador matrix one
    obtenerPesoIndicador() {
        return new Promise((resolve, reject) => {
            let peso = 0;
            this.port.on('data', (data) => {
                console.log(data);
                peso = data.split(' ')[1];
                this.port.pause();
                this.port.close();
                resolve(peso);
            });
        });
    }

    obtenerPesoIndicadorFenix() {
        let peso = 0;
        this.port.on('data', (data) => {
            console.log(data);
            peso = data.split(' ')[1];
            // this.port.pause();
            // this.port.close(); }
            console.log(peso);
        });
    }

    // Obtengo todos los puertos COM del sistema
    listarPuertos = async () => {
        return await SerialPort.list();
    }

}

module.exports = Puerto;
