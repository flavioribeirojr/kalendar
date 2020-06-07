import React from 'react';

export type HeaderProps = {
  activeDate: Date,
  changeToPreviousMonth: () => void,
  changeToNextMonth: () => void
};

export type Header = (props: HeaderProps) => React.ReactElement;