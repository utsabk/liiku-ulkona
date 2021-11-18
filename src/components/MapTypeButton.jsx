import React from 'react';
import RoundButton from './RoundButton';
import theme from '../theme';

const MapTypeButton = ({ handleMapType, mapType }) => {
  const icon = mapType === 'standard' ? 'terrain' : 'satellite';

  return (
    <RoundButton
      icon={icon}
      color={theme.colors.secondary}
      handleClick={handleMapType}
    />
  );
};

export default MapTypeButton;
