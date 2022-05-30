import * as React from 'react';

import { Container,Heanding, Button } from './styles';

interface Props  {
  label: string
  descripion: string
  
};

const DefaultOverley: React.FC <Props> = ({
 label, descripion 
})=> {
  return (
        <Container>
          <Heanding>
           <h1> {label} </h1>
           <h2>{descripion}</h2>
          </Heanding>
          <Button>
            <button>Custom Order</button>
            <button className='white'>Exiting Invatory</button>
          </Button>

        </Container>
  );
};

export default React.memo(DefaultOverley);
