import * as React from 'react';
import DefaultOverley from '../Components/DefaultOverley';
import { ModelsSection, ModelsWrapper } from '../Components/Model';

import { Container } from './styles';



const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          <ModelsSection
          modelName="Model one"
          overlayNode={
            <DefaultOverley
              label= "Model One"
              descripion='Order Online for Delivery'
            />
          }
          />
            
        </div>
      </ModelsWrapper>
    </Container>
  );
};

export default Page