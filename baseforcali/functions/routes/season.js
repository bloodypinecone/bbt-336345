const bbt = require('big-bang-theory');

const season = (req, res) => {
  const result = bbt._embedded.episodes.filter(function(episode){
    return episode.season == req.params.season;
  })

  
    res.status(200).json({
        success: true,
        season: req.params.season,
        result: result
      })
}

module.exports = season;