import * as React from 'react';

import './InfoPanel.scss';

interface InfoPanelProps {
  left?: any;
  right?: any;
}

export const InfoPanel: React.FC<InfoPanelProps> = ({ left, right }) => (
  <div className="info-panel">
    <div className="info-panel__left">{left}</div>
    <div className="info-panel__right">{right}</div>
  </div>
);
