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
import COMPANIES from '../data/companies';

function CompanyCard({company, color}) { 
  return (
    <Link className="card" to={company} key={company}>
      <Box textAlign="center" p={5} sx={{ borderRadius: 5 }} color="white" bg={color}>
        <Text fontSize={[ 3, 3, 4 ]}>
          {company}
        </Text>
      </Box>
    </Link>
  );
}

function Home() {
  return (
    <Box
      color="white"
      bg="black"
      px={[5, 4, 6]}
      py={4}
    >
      <Flex
        flexDirection={["column-reverse", "row"]}
        alignItems="center"
        justifyContent="space-around"
        py={[4, 4, 6]}
      >
        <Box width={1/2} textAlign={["center", "left"]}>
          <Heading variant='display'>
            OffsetList
          </Heading>
          <Text mt={3}>
            Companies that have committed to offsetting their carbon emissions
          </Text>
        </Box>
        <Box width={1/2} textAlign="center">
          <Image src={require('../images/tree.png')} alt="Tree" width={500} />
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
