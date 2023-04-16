import { FunctionComponent, SVGProps } from 'react';
import { IconType } from 'react-icons';

interface IconWrapperProps {
  icon: FunctionComponent<SVGProps<SVGSVGElement>> | undefined;
}

export const IconWrapper = ({ icon: Icon }: IconWrapperProps) => {
  if (!Icon) {
    return null;
  }

  return <Icon />;
};