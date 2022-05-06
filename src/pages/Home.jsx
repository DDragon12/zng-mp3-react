import ZMediaCarousel from '@/components/ZComponents/ZMediaCarousel';
import AuthorItem from '@/features/Author/components/AuthorItem';
import AuthorList from '@/features/Author/components/AuthorList';
import SongMediaList from '@/features/Song/components/SongMediaList';
import getRandomSongs from '@/features/Song/utils/getRandomSongs';
import { SAMPLE_AUTHOR } from '@/types';
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';

/**
 * @typedef {import('@/types').Author} Author
 */
/**
 * @typedef {import('@/components/ZComponents/ZMediaCarousel').SliderItem<Author>} AuthorSliderItem
 */

/**
 * @param {string} imageUrl
 * @returns {AuthorSliderItem}
 */
function createSliderItem(imageUrl) {
  return {
    id: nanoid(),
    data: {
      ...SAMPLE_AUTHOR,
      thumbnailUrl: imageUrl,
    },
  };
}

export default function Home() {
  const authorSlideList = [
    createSliderItem('https://i.scdn.co/image/ab6761610000e5eb2aa26cfdf3b785f171a4795c'),
    createSliderItem('https://i.scdn.co/image/ab6761610000e5ebc02d416c309a68b04dc94576'),
    createSliderItem('https://i.scdn.co/image/ab6761610000e5eb37db62ee361f796bef5b49a6'),
    createSliderItem('https://i.scdn.co/image/ab6761610000e5eb015af0621865cd5cd5046c2c'),
    createSliderItem('https://i.scdn.co/image/ab6761610000e5eb2d530c07b6c9f629e3327175'),
    createSliderItem('https://i.scdn.co/image/ab6761610000e5eb2af8bbb74cb106ac91d31c9a'),
    createSliderItem('https://i.scdn.co/image/ab6761610000e5eb33b1cf2b7b544840b727865b'),
  ];

  return (
    <div className="home-page">
      <div className="home__artists-slider">
        <ZMediaCarousel
          dataSource={authorSlideList}
          renderItem={(author) => (
            <Link to={`/author/${author.id}`}>
              <img src={author.thumbnailUrl} alt={author.name} />
            </Link>
          )}
        />
      </div>

      <div className="home__media-list">
        <h3 className="zm-title">Nhạc mới mỗi ngày</h3>

        <SongMediaList type="card" songList={getRandomSongs(5)} />
      </div>

      <div className="home__media-list">
        <AuthorList authorList={authorSlideList.map(({ data: author }) => author)} />
      </div>

      {renderHomeMediaList()}
      {renderHomeMediaList()}
      {renderHomeMediaList()}
      {renderHomeMediaList()}
    </div>
  );
}

function renderHomeMediaList() {
  return (
    <div className="home__media-list">
      <h3 className="zm-title">Nhạc mới mỗi ngày</h3>

      <SongMediaList type="card" songList={getRandomSongs(5)} />
    </div>
  );
}
