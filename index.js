const fs = require('fs');
fs.readFile('fruits.txt' , 'utf-8' , (err , text) =>{
   console.log(text);
        fs.writeFile('./output/final2.txt' ,`Latest : ${text}` , 'utf-8' ,err => {
            console.log('File has been modifed successfully through asynchronous method');
           // console.log('final.txt');
        })

    
});
console.log('Read this one first');