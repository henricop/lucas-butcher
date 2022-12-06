import React from 'react';
import { CiLogout } from 'react-icons/ci';
import { HiOutlineBellAlert } from 'react-icons/hi2';
import { currentDate } from '../../Utils';
import { Container } from './styles';


const NavBar = () => {
  return (
    <Container>
      <section>
        <time>{currentDate()}</time>
        {/* <time>{new Date()}</time> */}
        <span>Henrico Piubello</span>
      </section>
      <div>
        <HiOutlineBellAlert/>
        <CiLogout/>
      </div>
    </Container>
  );
}

export default NavBar; 