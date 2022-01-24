const bbt = require('big-bang-theory');

const seasonEpisode = (req, res) => {
  const check = bbt._embedded.episodes.filter(function(episode){
    return episode.season == req.params.season && episode.number == req.params.number;

  })
  
    res.status(200).json({
        success: true,
        season: req.params.season,
        episode: req.params.number,
        data: check
      })
}

module.exports = seasonEpisode;