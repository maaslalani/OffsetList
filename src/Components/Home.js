import React from 'react';
import {
  Link,
} from 'react-router-dom';
import {
  Text,
  Heading,
  Box,
  Flex,
  Image
} from 'rebass';
import COMPANIES from '../Data/companies';

function CompanyCard({company, color}) { 
  return (
    <Link to={company} key={company}>
      <Box p={5} color="white" bg={color}>
        <Text fontSize={[ 3, 3, 4 ]}>
          {company}
        </Text>
      </Box>
    </Link>
  );
}

function Home() {
  return (
    <Box color="white" bg="black" px={[3, 5, 6]} py={3}>
      <Flex alignItems="center" p={[3, 3, 6]} >
        <Box width={[3/4, 1/2, 1/2]}>
          <Heading variant='display'>
            OffsetList
          </Heading>
          <Text mb={4}>
            Companies that have committed to offsetting their carbon emissions
          </Text>
        </Box>
        <Box>
          <Image src={require('../Images/tree.png')} alt="Tree" width={500} />
        </Box>
      </Flex>
      <Box
        py={6}
        display="grid"
        sx={{
        gridGap: 4,
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
        }}
      >
        {COMPANIES.map(CompanyCard)}
      </Box>
      <Box pb={5} textAlign="center">
        <code>Made with <span role="img" aria-label="tree">🌳</span> by Maas and Adam</code>
      </Box>
    </Box>
  );
}

export default Home;
