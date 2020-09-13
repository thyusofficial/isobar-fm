import React, { useCallback, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { MdClose, MdSearch, MdSwapVert } from 'react-icons/md';
import api from '../../services/api';
import logoImg from '../../assets/logo.png';
import noResultsImg from '../../assets/no_results.png';

import {
  Header,
  ControlsContainer,
  Controls,
  BandList,
  Band,
  EmptyResults,
} from './styles';

function Dashboard() {
  const history = useHistory();
  const [bandsFiltered, setBandsFiltered] = useState([]);
  const [bands, setBands] = useState([]);
  const [bandName, setBandName] = useState('');
  const [openOrderBy, setOpenOrderBy] = useState(false);

  const handleAlphabeticalSort = useCallback(() => {
    const sorted = [...bands].sort((a, b) => (a.name > b.name ? 1 : -1));

    setBands(sorted);
    setOpenOrderBy(false);
  }, [bands]);

  const handlePopularitySort = useCallback(() => {
    const sorted = [...bands].sort((a, b) =>
      a.numPlays < b.numPlays ? 1 : -1,
    );

    setBands(sorted);
    setOpenOrderBy(false);
  }, [bands]);

  const numPlayFormatter = useCallback(numPlays => {
    const formatter = new Intl.NumberFormat();

    return formatter.format(numPlays);
  }, []);

  useEffect(() => {
    api.get('/bands').then(response => {
      setBands(response.data);
      setBandsFiltered(response.data);
    });
  }, []);

  useEffect(() => {
    const results = bands.filter(band =>
      band.name.toLowerCase().includes(bandName),
    );
    setBandsFiltered(results);
  }, [bands, bandName]);

  return (
    <>
      <Header>
        <div>
          <button type="button" onClick={() => setBandName('')}>
            <MdClose />
          </button>
          <input
            type="text"
            value={bandName}
            onChange={event => setBandName(event.target.value)}
          />
          <button type="button" disabled>
            <MdSearch size={20} />
          </button>
        </div>

        <Link to="/">
          <img src={logoImg} alt="" />
        </Link>
      </Header>

      <ControlsContainer>
        <Controls openOrderBy={openOrderBy}>
          <span>{bandsFiltered.length} resultados</span>

          <nav>
            <button type="button" onClick={() => setOpenOrderBy(!openOrderBy)}>
              <MdSwapVert />
            </button>

            <div>
              <button type="button" onClick={() => handleAlphabeticalSort()}>
                ordem alfabética
              </button>
              <button type="button" onClick={() => handlePopularitySort()}>
                popularidade
              </button>
            </div>
          </nav>
        </Controls>
      </ControlsContainer>

      {bandsFiltered.length ? (
        <BandList>
          {bandsFiltered.map(band => (
            <Band
              key={band.id}
              onClick={() => history.push(`/band/${band.id}`)}
            >
              <img src={band.image} alt="Band name" />

              <div>
                <strong>{band.name}</strong>
                <span>{numPlayFormatter(band.numPlays)} plays</span>
              </div>
            </Band>
          ))}
        </BandList>
      ) : (
        <EmptyResults>
          <h2>Sem resultados...</h2>
          <div>
            <img src={noResultsImg} alt="Sem resultados" />
          </div>
        </EmptyResults>
      )}
    </>
  );
}

export default Dashboard;
