import React from 'react';
import { SvgXml } from 'react-native-svg';

const LocationDot = () => {
  const svgMarkup = `<svg class="svg-icon" style="width: 1em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M511.927479 574.368272m-449.631728 0a449.631728 449.631728 0 1 0 899.263456 0 449.631728 449.631728 0 1 0-899.263456 0Z" fill="#2B67ED" opacity=".34" />
    <path d="M347.884419 381.606799L511.927479 0l164.188102 381.606799" fill="#2B67ED" />
    <path d="M511.927479 574.368272m-261.22153 0a261.22153 261.22153 0 1 0 522.443059 0 261.22153 261.22153 0 1 0-522.443059 0Z" fill="#4381EF" />
    <path d="M511.927479 835.734844a261.076487 261.076487 0 1 1 261.076487-261.076487 261.076487 261.076487 0 0 1-261.076487 261.076487z m0-493.144476a232.067989 232.067989 0 1 0 232.067988 232.067989 232.067989 232.067989 0 0 0-232.067988-232.648159z" fill="#FFFFFF" />
  </svg>`;
  const SvgImage = () => <SvgXml xml={svgMarkup} width="24" height="24" />;

  return <SvgImage />;
};

export default LocationDot;