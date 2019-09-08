'use strict';

import 'bootstrap';
import * as Pixi from 'pixi.js';
import React from 'react';
import ReactDOM from 'react-dom';
import Uploader from './uploader.js';
import MyVideoTable from './myVideoTable.js';
import VideoPlayer from './videoPlayer.js';
import CommentPoster from './commentPoster.js';

const uploaderDivided = document.getElementById('dropbox-container');
if (uploaderDivided) {
  ReactDOM.render(
    <Uploader
      apiToken={uploaderDivided.dataset.apiToken}
      mediaserverUrlRoot={uploaderDivided.dataset.mediaserverUrlRoot}
    />,
    uploaderDivided
  );
}

const myVideoTableDivided = document.getElementById('my-video-table');
if (myVideoTableDivided) {
  ReactDOM.render(
    <MyVideoTable apiToken={myVideoTableDivided.dataset.apiToken} />,
    myVideoTableDivided
  );
}

const videoContainerDivided = document.getElementById('video-containar');
if (videoContainerDivided) {
  ReactDOM.render(
    <VideoPlayer
      width={videoContainerDivided.dataset.width}
      height={videoContainerDivided.dataset.height}
      videoPlayerId={videoContainerDivided.dataset.videoPlayerId}
      mpdUrl={videoContainerDivided.dataset.mpdUrl}
      apiToken={videoContainerDivided.dataset.apiToken}
    />,
    videoContainerDivided
  );
}

const commentPosterDivided = document.getElementById('comment-poster');
if (commentPosterDivided) {
  ReactDOM.render(
    <CommentPoster
      videoId={commentPosterDivided.dataset.videoId}
      videoPlayerId={commentPosterDivided.dataset.videoPlayerId}
      apiToken={commentPosterDivided.dataset.apiToken}
    />,
    commentPosterDivided
  );
}
