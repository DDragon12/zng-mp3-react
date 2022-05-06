import { Col, Row } from 'antd';
import clsx from 'clsx';
import { Link, NavLink, Route, Routes, useMatch, useResolvedPath } from 'react-router-dom';
import PersonalArtistList from '../components/PersonalArtistList';
import PersonalOverview from '../components/PersonalOverview';
import PersonalSongList from '../components/PersonalSongList';

const tabList = [
  {
    title: 'TỔNG QUAN',
    url: '',
  },
  {
    title: 'BÀI HÁT',
    url: 'bai-hat',
  },
  {
    title: 'NGHỆ SĨ',
    url: 'artists',
  },
  {
    title: 'PLAYLIST',
    url: 'playlist',
  },
];

export default function PersonalPage() {
  const user = {}; // fetch from API using pure axios w/ custom hooks or useQuery

  const {
    thumbnailUrl = 'https://i.scdn.co/image/ab6761610000e5ebaad54b2cf9044587eac7acdf',
    fullName: personalName = 'Nguyễn Hoàng Nguyên',
  } = user;

  return (
    <div className="personal-page">
      <Row>
        <Col span={24} className="zm-column">
          <div className="personal-page__header">
            <div className="personal-page__avatar">
              <img src={thumbnailUrl} alt={personalName} />
            </div>
            <h3 className="personal-page__profile-name zm-title">{personalName}</h3>
          </div>

          <div className="personal-page__tab-bar">
            <div className="zm-tab-bar">
              {tabList.map((tab) => (
                <NavLink to={tab.url} className={({ isActive }) => clsx('zm-tab-bar__item', { active: isActive })} end>
                  {tab.title}
                </NavLink>
              ))}
            </div>
          </div>
        </Col>
      </Row>

      <Routes>
        <Route index element={<PersonalOverview />} />
        <Route path="bai-hat" element={<PersonalSongList />} />
        <Route path="artists" element={<PersonalArtistList />} />
        {/* <Route path='playlist' /> */}
      </Routes>
    </div>
  );
}