import Background from '../../images/headerBackground.svg';
import TopSectionTitle from '../TopSectionTitle/topSectionTitle';
import './topSection.css'
import Navigation from "../Navigation/navigation";
import React from "react";
import {useSelector} from "react-redux";
import {useState} from "react";
import {Navigate} from "react-router-dom";

const TopSection = () => {
  const userStatus = useSelector((state) => state.auth);
  const [signOut, setSignOut] = useState(false);

  return (
    <div className="header" style={{ backgroundImage: 'url(' + Background + ')' }}>
      <Navigation onClick={() => setSignOut(!signOut)} />
        <TopSectionTitle />
      {!userStatus && <Navigate to="/login" />}
    </div>
  );
};

export default TopSection;