const router = require('express').Router();
const episodeIndex = require('./routes/episodeIndex');
const episodes = require('./routes/episodes');
const titleWord = require('./routes/titleWord');
const descWord = require('./routes/descWord');
const getImage = require('./routes/getImage');
const seasonEpisode = require('./routes/seasonEpisode');
const season = require('./routes/season');

router.get("/episodes", episodes);
router.get("/episode-index/:index", episodeIndex); 
router.get("/title-word/:word", titleWord);
router.get("/desc-word/:word", descWord);
router.get("/get-image/:season/:number", getImage);
router.get("/season-episode/:season/:number", seasonEpisode);
router.get("/season/:season", season);


module.exports = router; 
