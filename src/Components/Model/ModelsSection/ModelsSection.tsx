import * as React from 'react';

import { Container } from './styles';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string
  overlayNode:React.ReactNode
};

const ModelsSection: React.FC<Props> = ({ modelName, overlayNode,children, ...props }: Props) => {
  return (
    <Container>

    </Container>
  );
};

export default React.memo(ModelsSection);