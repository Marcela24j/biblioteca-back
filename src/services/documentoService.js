import { existsSync, unlinkSync } from "fs";
import { join, resolve } from "path";
import { __dirname } from "../util/urlHandle.js";
import sharp from "sharp";




const buscarArchivoAvatar = (nombreArhivo) => {
  return existsSync(resolve(__dirname, `../public/avatar/${nombreArhivo}`))
}




const eliminarAvatarAlmacenServicio = (file) => {
  if (existsSync(join(__dirname, `../public/avatar/${file}`))) {
    unlinkSync(join(__dirname, `../public/avatar/${file}`));
  }
};

const optimizarImagen = async (archivo, nombreArchivo) => {
  return await sharp(archivo)
    .resize(150)
    .toFormat('webp')
    .toFile(resolve(__dirname, `../public/avatar/${nombreArchivo.split('.')[0]}.webp`))
};



export {
 
  optimizarImagen,
  eliminarAvatarAlmacenServicio,
  buscarArchivoAvatar,
 
};
