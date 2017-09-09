const osmosis = require("osmosis");
const fs = require("fs");

let updateFile = content => {
    return new Promise((resolve, reject) => {
        let datestamp = new Date();
        let filePath = `_dbEminemSongs.txt`;
        fs.appendFile(filePath, content, err => {
            if (err)
                reject(err)
            else
                resolve("Done!");
        });
    });
};

let getSongTitles = _ => {
    return new Promise((resolve, reject) => {
        let url = "https://www.spin.com/2014/10/eminem-every-song-ranked/";
        let results = [];
        osmosis
            .get(url)
            .find(".article-content p strong a")
            .set("song")
            .data(result => {
                result = result.song.replace(/[^a-zA-Z\d\s:]/g, "").replace(/\s/g, "-");
                result = `eminem-${result.toLowerCase()}-lyrics`;
                results.push(result);
            })
            .done(_ => resolve(results))
            .error(err => reject(err));
    });
};

let getSongLyrics = url => {
    return new Promise((resolve, reject) => {
        let results = "";
        osmosis
            .get(url)
            .find(".lyrics p")
            .set("lyrics")
            .data(result => {
                result = result.lyrics.replace(/[\n]{2,}/g,"\n").replace(/\n/g,"</l><l>");
                results += `<s><l>${result}</l></s>`;
            })
            .done(_ => resolve(results))
            .error(err => reject(err));
    });
};

let processSongTitles = titles => {
    return new Promise((resolve, reject) => {
        let allSongLyrics = [];
        let getLyrics = i => {
            i = i || 0;
            if (i < titles.length) {
                let url = `https://genius.com/${titles[i]}`;
                getSongLyrics(url)
                    .then(lyrics => {
                        allSongLyrics.push(lyrics);
                        getLyrics(i + 1);
                    })
                    .catch(_ => getLyrics(i + 1));
            } else {
                console.log(`${allSongLyrics.length} songs retrieved...`);
                resolve(allSongLyrics.join(""));
            }
        };
        getLyrics();
    });
};

let init = _ => {
    return new Promise((resolve, reject) => {
        getSongTitles()
        .then(processSongTitles)
        .then(result => resolve(result));
    });
};

init()
    .then(updateFile)
    .then(console.log)