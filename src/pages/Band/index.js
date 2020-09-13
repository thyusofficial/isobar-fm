import React, { useEffect, useState, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';

import { MdAdd, MdClose, MdKeyboardArrowLeft } from 'react-icons/md';
import api from '../../services/api';
import logoImg from '../../assets/logo.png';

import { Header, Title, About, Albums, AlbumCard } from './styles';

function Band() {
  const { id } = useParams();
  const [band, setBand] = useState({});
  const [albums, setAlbums] = useState([]);
  const [openBiography, setOpenBiography] = useState(false);

  const numPlayFormatter = useCallback(numPlays => {
    const formatter = new Intl.NumberFormat();

    return formatter.format(numPlays);
  }, []);

  useEffect(() => {
    api.get(`/bands/${id}`).then(response => {
      setBand(response.data);
    });
    api.get(`/albums/`).then(response => {
      setAlbums(response.data.filter(album => album.band === id));
    });
  }, [id]);
  return (
    <>
      <Header>
        <Link to="/">
          <MdKeyboardArrowLeft size={20} />
        </Link>
        <Link to="/">
          <img src={logoImg} alt="Logo" />
        </Link>
      </Header>

      <Title background={band.image}>
        <h1>{band.name}</h1>
      </Title>

      <About openBiography={openBiography}>
        <div>
          <strong>{band.genre}</strong>
          <img src={band.image} alt={band.name} />
          <strong>{numPlayFormatter(band.numPlays)} plays</strong>
        </div>
        <p>{band.biography}</p>
        <button type="button" onClick={() => setOpenBiography(!openBiography)}>
          <span />
          {!openBiography ? <MdAdd /> : <MdClose />}
          <span />
        </button>
      </About>

      <Albums>
        <h4>Albuns</h4>

        <div>
          {albums.map(album => (
            <AlbumCard key={album.name}>
              <img src={album.image} alt={album.name} />
              <div>
                <span>{album.name}</span>
              </div>
            </AlbumCard>
          ))}
        </div>
      </Albums>
    </>
  );
}

export default Band;
