import React, { useEffect } from 'react';
import { Section, TemplateContent } from '../../Components/Layout';
import ButtonDefault from '../../layout/components/ButtonDefault/ButtonDefault';
import Input from '../../layout/components/Input';

import { Container } from './styles';


function ConsultaInterna(){
  return(
    <Section>
      <TemplateContent>
        <Container>
          <div className='wrapper'>
            <h1>Consulta Interna</h1>
            <section className='input-section'>
            </section>

            <div className='divisor'></div>

            <section className='input-section'>
              <p className='breaker'/>
            </section>
          </div>
        </Container>
      </TemplateContent>
    </Section>
  );
}

export default ConsultaInterna;
