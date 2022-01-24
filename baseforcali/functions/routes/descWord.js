
const bbt = require('big-bang-theory');

const descWord = (req, res) => {
  const result = bbt._embedded.episodes.filter(function(episode){
    return episode.summary.includes(req.params.word);
  })
    res.status(200).json({
        success: true,
        testing: req.params.word,
        result: result
      })
}

module.exports = descWord;