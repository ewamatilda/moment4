// Skriven av Matilda Viklund 
// Moment 4 i kursen DT173G 
// 2019-01-12 
var FilePublisher = /** @class */ (function () {
    /* Konstruktor som kör när en ny fil skapats */
    function FilePublisher(fileName) {
        this.fileName = fileName;
        this.fs = require('fs');
        this.file = fileName;
        this.showFile();
    }
    ;
    FilePublisher.prototype.showFile = function () {
        var reg = /\W+/g; // Strip of all new lines and blanks
        this.data = this.fs.readFileSync(this.file, 'utf8', function (err, filedata) {
            if (err)
                throw err;
            console.log(filedata);
            return filedata;
        });
    };
    ;
    FilePublisher.prototype.wordCounter = function () {
        var reg = /\W+/g;
        var clean = this.data.split(reg);
        var count = {};
        for (var _i = 0, clean_1 = clean; _i < clean_1.length; _i++) {
            var i = clean_1[_i];
            count[i] = (count[i] || 0) + 1;
        }
        var sorted = [];
        for (var key in count)
            sorted.push([key, count[key]]);
        sorted.sort(function (a, b) { return a[1] - b[1]; });
        return sorted.reverse();
    };
    FilePublisher.prototype.printCounter = function (numWords) {
        console.log(this.wordCounter().slice(0, numWords));
    };
    return FilePublisher;
}());
var myText = new FilePublisher('hitch.txt');
myText.printCounter(10);
