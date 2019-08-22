const express = require('express');
const moment = require('moment');
const router = express.Router();
const apiTokenGenerator = require('../apiTokenGenerator');
const authenticationEnsurer = require('../authenticationEnsurer');
const config = require('../../config');
const Video = require('../../models/video');
const VideoStatistic = require('../../models/videostatistic');
const loader = require('../../models/sequelizeLoader');
const Sequelize = loader.Sequelize;
const Op = Sequelize.Op;
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

router.get('/', authenticationEnsurer, (req, res, next) => {
  let email = '';
  let apiToken = '';
  if (req.user) {
    email = req.user.email;
    apiToken = apiTokenGenerator(req.user.userId, 60 * 60 * 24);
  }

  res.render('my/videos/index', {
    email: email,
    apiToken: apiToken,
    config: config,
    user: req.user
  });
});

router.get(
  '/:videoId',
  authenticationEnsurer,
  csrfProtection,
  (req, res, next) => {
    const videoId = req.params.videoId;
    Video.findOne({
      where: {
        [Op.or]: [
          {
            videoId: videoId,
            videoStatus: 'Published'
          },
          {
            videoId: videoId,
            videoStatus: 'Encoded'
          }
        ]
      }
    }).then(video => {
      if (video && (req.user.isAdmin || video.userId === req.user.userId)) {
        let email = '';
        if (req.user) {
          email = req.user.email;
        }

        const formattedCreatedAt = moment(video.createdAt).format(
          'YYYY/MM/DD HH:mm'
        );

        const formattedUpdatedAt = moment(video.updatedAt).format(
          'YYYY/MM/DD HH:mm'
        );

        res.render('my/videos/edit', {
          email: email,
          config: config,
          video: video,
          formattedCreatedAt: formattedCreatedAt,
          formattedUpdatedAt: formattedUpdatedAt,
          user: req.user,
          csrfToken: req.csrfToken()
        });
      } else {
        res.render('notfoundvideo', {
          config: config,
          user: req.user
        });
      }
    });
  }
);

module.exports = router;
