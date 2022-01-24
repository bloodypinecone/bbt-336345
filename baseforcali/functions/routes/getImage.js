const bbt = require('big-bang-theory');

const getImage = (req, res) => {
  const check = bbt._embedded.episodes.filter(function(episode){
    return episode.season == req.params.season && episode.number == req.params.number;
  })

  const img = check.filter(function(image){
    return check.image
  })
  
    res.status(200).json({
        success: true,
        season: req.params.season,
        episode: req.params.number,
        image: img
      })
}

module.exports = getImage;