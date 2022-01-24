const bbt = require('big-bang-theory');

const titleWord = (req, res) => {
  const result = bbt._embedded.episodes.filter(function(episode){
    return episode.name.includes(req.params.word);
  })
    res.status(200).json({
        success: true,
        testing: req.params.word,
        result: result
      })
}

module.exports = titleWord;
