import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconMapper from './icon-mapper';
import { IconNames } from './icons.enum';

interface IconProps {
  name: IconNames,
  className?: string
};

export function Icon({ name, className }: IconProps) {
  return (
    <FontAwesomeIcon
      className={ className }
      icon={ IconMapper[name]}
    />
  );
}