import {connect} from 'mongoose';
import dotev from 'dotenv'
dotev.config()
export const connectionString=process.env.CONNECTION_LOCAL_MONGO

try{
    connect(connectionString)
    console.log("conectado a la base de datos de MongoDB");
}
catch(error){
    console.log(error);
}

