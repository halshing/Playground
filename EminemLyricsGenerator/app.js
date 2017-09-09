//var natural = require("natural");
var fs = require("fs");
let GenerateLyrics = function () {

    // Get a random number in a range
    const getRandNum = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    // Get the contents of a file
    const getFileContents = _ => {
        return new Promise((resolve, reject) => {
            fs.readFile("_dbEminemSongs.txt", "utf8", (err, data) => {
                resolve(data);
            });
        });
    };

    // Format and clean up the data from the data source
    // Output is an array of strings representing lines of songs
    const formatData = data => {
        return new Promise((resolve, reject) => {
            // Remove lines containing only brackets with text. i.e. [Hook] or [Verse: Eminem]
            var cleanUp = val => {
                var open = val.indexOf("[");
                var keep = open < 0 || open != 0
                return val && keep;
            }
            data = data
                // Clean up the markup
                .replace(/(<s>|<\/s>)|(\(|\))|!|\:/g, "") // I need better parsing
                // Match lines that start and end with brackets
                //.replace(/^\[(\S|\D)*\]$/,"") // For some reason this hangs forever and doesn't complete... why??
                // Separate each line
                .split(/<l>|<\/l>/g)
                // Do more clean up (this really should be a regular expression...)
                .filter(cleanUp);
            resolve(data);
        });
    };

    // Loop through the song lyrics to generate the ngrams
    const processLyrics = lyrics => {
        return new Promise((resolve, promise) => {
            var dict = {};
            for (var i = 0; i < lyrics.length; i++) {
                var line = lyrics[i];
                dict = processLine(line, dict);
            }
            resolve(dict);
        });
    };

    // For each word in the line, associate its adjacent word
    // Add the word assications to the dictionary
    const processLine = (line, dict) => {
        var words = line.split(/\s/);
        for (var i = 0; i < words.length; i++) {
            if (!words[i + 1]) continue;
            var nextWord = words[i + 1].toLowerCase();
            var word = words[i].toLowerCase();
            if (dict.hasOwnProperty(word))
                dict[word].push(nextWord);
            else
                dict[word] = [nextWord];
        }
        return dict;
    };

    // Get a random word (property) from the dictionary
    // The output represents a random gram from the dictionary
    const getRandomGram = dict => {
        var words = Object.getOwnPropertyNames(dict);
        var randIndex = getRandNum(0, words.length);
        return words[randIndex];
    };

    // Generate a new lyric!
    const createLine = dict => {
        return new Promise((resolve, reject) => {
            var iterations = 24;
            var line = getRandomGram(dict);
            var inputWord;
            var getNextWord = word => {
                if (dict.hasOwnProperty(word)) {
                    var randIndex = getRandNum(0, dict[word].length);
                    return ` ${dict[word][randIndex]}`;
                }
                return ` ${getRandomGram(dict)}`;
            };
            for (var i = 0; i < iterations - 1; i++) {
                inputWord = line.split(/\s/);
                inputWord = inputWord[inputWord.length - 1];
                line += getNextWord(inputWord);
            }
            resolve(line);
        });
    };

    // Initialize app
    this.init = _ => {
        return new Promise((resolve, reject) => {
            getFileContents()
                .then(formatData)
                .then(processLyrics)
                .then(createLine)
                .then(resolve)
        });
    }
};

var app = new GenerateLyrics();
app.init().then(console.log);