import React from 'react';
import * as S from './styled';
import { Header } from '../index';

const Layout = ({ children }) => (
  <S.WrapperLayout>
    <Header />
    {children}
  </S.WrapperLayout>
);

export default Layout;
