import React from 'react';

export type HeaderProps = {
  activeDate: Date
};

export type Header = (props: HeaderProps) => React.ReactElement;