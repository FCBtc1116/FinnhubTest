import React, { useState } from 'react';
import { 
  Card, 
  CardBody, 
  Text,
  CircularProgress, 
  CircularProgressLabel,
  FormControl,
  FormLabel,
  Input,
  Button,
  Divider,
  Center
} from '@chakra-ui/react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  fetchAsync,
  getFetch,
} from './fetchSlice';

export function Main() {
  const fetchData = useAppSelector(getFetch);
  const dispatch = useAppDispatch();
  const [symbol, setSymbol] = useState('AAPL');

  return (
    <Center h="calc(100vh)">
      <Card width="50%">
        <CardBody>
          {
            fetchData.status === 'loading' ? 
            <CircularProgress isIndeterminate color='green.300' size='200px' thickness='4px'>
              <CircularProgressLabel fontSize='2xl'>Loading</CircularProgressLabel>
            </CircularProgress>
            :
            <div>
              {
                fetchData.price === -1 ? <Text fontSize='4xl' color='red'>Symbol Name Incorrect</Text>
                : fetchData.price === -2 ? <Text fontSize='4xl' color='red'>Try Again</Text>
                :
                <div>
                  <Center>
                    <Text fontSize='3xl'>Current Price : </Text>
                    <Text fontSize='3xl' fontWeight="bold">{fetchData.price}</Text>
                  </Center>
                  <Center>
                    <Text fontSize='3xl'>Change Percentage :</Text>
                    <Text fontSize='3xl' fontWeight="bold">{fetchData.percent}%</Text>
                  </Center>
                </div>
              }
            </div>
          }
          <Divider marginY="20px" />
          <FormControl>
            <FormLabel>Type Symbol</FormLabel>
            <Input 
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)} />
            <Button
              mt={4}
              colorScheme='teal'
              onClick={() => dispatch(fetchAsync(symbol))}
            >
              Fetch
            </Button>
          </FormControl>
        </CardBody>
      </Card>
    </Center>
  );
}
