import { memo } from 'react';
import LogoSvg from '@assets/Logo.svg';

import styles from './Nav.module.css';

function NavComponent() {
  return (
    <div className={styles.nav}>
      <div className="container">
        <img src={LogoSvg} alt="Logo" />
      </div>
    </div>
  );
}

export const Nav = memo(NavComponent);
NavComponent.displayName = 'Nav';
