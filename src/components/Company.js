import React from 'react';
import { useParams, } from 'react-router-dom';
import { Box, Text } from 'rebass';

import COMPANIES from '../data/companies';

function Company() {
  const { company } = useParams();
  const data = COMPANIES.find(({name}) => name === company);

  return (
    <Box
      p={5}
      fontSize={4}
      color='white'
      bg={data.color}>
      <Text
        fontSize={[ 3, 4, 5 ]}
        fontWeight='bold'
      >
        {data.name}
      </Text>
    </Box>
  );
}

export default Company;
