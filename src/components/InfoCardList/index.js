import React from 'react';
import { InfoCard } from '../InfoCard';
import './InfoCardList.css';

const InfoCardList = props => {
  return (
    <div className="infoList">
      <InfoCard title="Existing Emojis" info="232"/>
      <InfoCard title="titititi" info="232"/>
      <InfoCard title="titititi" info="232"/>
    </div>
  );
};

InfoCardList.propTypes = {
  
};

export default InfoCardList;