import {connect} from 'mongoose';

export const connectionString='mongodb://127.0.0.1:27017/coderSession';

try{
    connect(connectionString)
    console.log("conectado a la base de datos de MongoDB");
}
catch(error){
    console.log(error);
}

