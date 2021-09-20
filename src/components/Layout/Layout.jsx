import React from 'react';
import useGenius from '../../hooks/genius-hooks';
import { Header } from '../index';
import { NoSearch } from '../NoSearch';

import * as S from './styled';

const Layout = ({ children }) => {
  const { geniusState } = useGenius();

  return (
    <S.WrapperLayout>
      <Header />
      {geniusState.hasUser ? (
        <>{geniusState.loading ? <p>Loading</p> : <>{children}</>}</>
      ) : (
        <NoSearch />
      )}
    </S.WrapperLayout>
  );
};

export default Layout;
