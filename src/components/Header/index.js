import React, { useContext, useEffect, useMemo, useState } from 'react';
import { AppContext } from '../../context/AppContext'
import pin from '../../assets/pin.svg';
import profile from '../../assets/profile.svg';
import "./styles.scss";

export function Header() {
  const { user } = useContext(AppContext);
  const [tela, setTela] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setTela(window.innerWidth)
    })
  }, []);
  const widthExperienceBar = tela > 900 ? 670 : 500;
  const xp = useMemo(() => user.experience * widthExperienceBar / user.maxExperience, [user.experience, user.maxExperience, widthExperienceBar]);
  return (
    <main className="header-container">
      <section className="header-container__user-data">
        <img src={profile} alt="" />
        {/* <img src={user.image || profile} alt="" /> */}
        <div>
          <span className="header-container__user-data__name">{user.name}</span>
          <span>{user.email}</span>
        </div>
      </section>
      <section className="header-container__exp">
        <div className="header-container__exp__top-labels">
          <div>
            <img src={pin} alt="pin" />
            <span>Casual</span>
          </div>
          <div>
            <img src={pin} alt="pin" />
            <span>Competitiva</span>
          </div>
        </div>
        <div className="header-container__exp__bar-container">
          <div style={{ width: xp }} className="header-container__exp__bar-container__xp"></div>
        </div>
        <div className="header-container__exp__bottom-labels">
          <div>
            <span>Amador</span>
            <img src={pin} alt="pin" />
          </div>
          <div>
            <span>Pro</span>
            <img src={pin} alt="pin" />
          </div>
        </div>
      </section>
    </main>
  );
}
