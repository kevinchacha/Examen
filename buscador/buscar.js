const fs = require('fs');
//cre una variable que se llame data
let guardar = (archivo,pais,year,name) => {
    return new Promise((resolve, reject) => {
        if (!Number(year)){
            reject(`Valor ${year} no es numero`)
            return;
        }
        let data = 'algo'; 
        fs.writeFile(`archivostxt/archivo-${name}.txt`, data, (err) => {
            if (err) 
                reject(err);
            else
                resolve(`archivo-${name}.txt`);
        });
    })
}
let mostrar = (archivo,pais,year) => {
    return new Promise((resolve, reject) => {
        if (!Number(year)){
            reject(`Valor ${year} no es numero`)
            return;
        }
    const csv = require('csv-parser');
    const fs = require('fs');
    fs.createReadStream(`${archivo}.csv`)
    .pipe(csv())
    .on('data', (row) => {
        if(row[1]==pais){
            console.log(`Datos :${row[2]}\n Pais:${row[40]}`);
        }
    
    })
    .on('end', () => {
    console.log('CSV file successfully processed');
  });        

    })
}

module.exports = {
    //Se puede dar un nombre de propiedad por ejemplo crearArchivo: crearArchivo
    guardar,
    publicar
};