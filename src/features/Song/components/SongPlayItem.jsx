import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { common } from '@/constants';
import clsx from 'clsx';

/**
 *
 * @param {any} _props
 */
export default function SongMediaItem({ song = {} }) {
  const {
    thumbnailUrl = 'https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96',
    songName = 'Never Gonna Give You Up (500)',
    authorName = 'Rick Atsley',
    songId = -1,
    authorId = 69,
    isFavorite = false,
    isActive = false,
    isPlaying = false,
  } = song;

  const [playing, setPlaying] = useState(isPlaying || false);

  const handleClickPlayButton = () => {
    // this is for UI testing
    if (!isActive) {
      return;
    }

    setPlaying(!playing);
  };

  return (
    <div className={clsx('play-item', { active: isActive })}>
      <div className="play-item__content">
        <div className="play-item__thumbnail">
          <img src={thumbnailUrl} alt={songName} />
          <button className="zm-button" onClick={handleClickPlayButton}>
            {playing ? <img src={common.SOUND_PLAYING_GIF} alt="" /> : <i className="fa-solid fa-play"></i>}
          </button>
        </div>
        <div className="play-item__info">
          <div className="play-item__name">{songName}</div>
          <div className="play-item__author">
            <a href={`/author/${authorId}`}>{authorName}</a>
          </div>
        </div>
      </div>
      <div className="play-item__actions">
        <button className="zm-button">
          {isFavorite ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
        </button>
        <button className="zm-button">
          <i className="fa-solid fa-ellipsis"></i>
        </button>
      </div>
    </div>
  );
}
