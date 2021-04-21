import React from 'react';
import Button from '../Button';

import { Container } from './styles';

const Message: React.FC = () => {
  return (
    <Container>
      <h1>I have bad news for you</h1>
      <p>The page you are looking for might be removed or is temporarily unavailable</p>

      <Button>Back to homepage</Button>
    </Container>
  )
}

export default Message;