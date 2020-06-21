import React, { RefAttributes, HTMLProps } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { LinkProps } from './Link.props';

type LinkExtendedProps = LinkProps & RefAttributes<HTMLAnchorElement> & HTMLProps<HTMLAnchorElement>;

export function Link({ to, ...props }: LinkExtendedProps) {
  return (
    <RouterLink
      to={to}
      {...props}
    >
      { props.children }
    </RouterLink>
  )
}