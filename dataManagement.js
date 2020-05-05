class DataManagement{
    constructor(){
    }

    loadJSONFile = (path, name) =>{
        let rawdata = fs.readFileSync(window.path + '/map/map1.json');
        let parsedData = JSON.parse(rawdata);
        return parsedData;
    }
    saveJSONFile = (path, name, content) =>{
        window.fs.writeFile(window.path + path + name +'json', content, function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        }); 
    }
}

// let rawdata = fs.readFileSync(window.path + '/map/map1.json');
// let student = JSON.parse(rawdata);

// window.fs.writeFile(window.path + '/map/map2.json', "Hey there!", function(err) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log("The file was saved!");
// }); 

// window.fs.writeFileSync(window.path + '/map/map2.json', 'Hey there!');

// rawdata = fs.readFileSync(window.path + '/map/map2.json');
// student = rawdata;
// console.log(student);