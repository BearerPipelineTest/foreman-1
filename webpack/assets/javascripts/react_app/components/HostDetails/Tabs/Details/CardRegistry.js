import React from 'react';
import { addGlobalFill } from '../../../common/Fill/GlobalFill';
import Properties from '../Details/Cards/SystemProperties';
import OperatingSystem from '../Details/Cards/OperatingSystem';

const cards = [
  { key: '[core]-properties-card', Component: Properties, weight: 4000 },
  { key: '[core]-os-card', Component: OperatingSystem, weight: 3000 },
];

export const registerCoreCards = () => {
  cards.forEach(({ key, Component, weight }) => {
    addGlobalFill(
      'host-tab-details-cards',
      key,
      <Component key={key} />,
      weight
    );
  });
};
