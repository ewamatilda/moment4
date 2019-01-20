// Skriven av Matilda Viklund 
// Moment 4 i kursen DT173G 
// 2019-01-12 


declare function require(name: string); 


class FilePublisher{

    private file: string; 
    public data: string; 

    private fs = require('fs');


    /* Konstruktor som kör när en ny fil skapats */ 
    constructor(public fileName: string) {
        this.file = fileName;
        this.showFile();
    }; 


    showFile(){ 
        let reg:RegExp = /\W+/g; // Strip of all new lines and blanks
        this.data = this.fs.readFileSync(this.file, 'utf8', function(err, filedata) { 
            if (err) throw err;
            console.log(filedata); 
            return filedata;
        });
    }; 

wordCounter(): string[] {
    let reg =  /\W+/g; 
    let clean = this.data.split(reg); 
    
    let count = {}; 
    for(let i of clean){
        count[i] = (count[i]||0) + 1; 

    }
    var sorted= []; 
    
    for (let key in count) sorted.push([key, count[key]]); 
    sorted.sort(function (a, b) { return a[1] - b[1] }); 
 
    return sorted.reverse(); 

}
        
  printCounter(numWords: number){
      console.log(this.wordCounter().slice(0,numWords));
  }
   
}  

var myText = new FilePublisher('hitch.txt'); 
myText.printCounter(10); 


