import React, { useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Flex, Box, Heading, Text, Link as ExternalLink, Button } from 'rebass';
import { drawTree } from './Tree';

import COMPANIES from '../data/companies';

function Company() {
  const { company } = useParams();
  const data = COMPANIES.find(({name}) => name === company);

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    drawTree(context, canvas.width / 2, canvas.height, -90, 9);
  }, []);

  return (
    <>
      <Box p={1} backgroundColor={data.color}></Box>
      <Box
        p={5}
        fontSize={4}
        color="white"
      >
        <Link to="/">
          <Text pb={2} fontSize={3} color="darkgray">&larr; Go back</Text>
        </Link>
        <Heading
          fontSize={6}
          fontWeight="bold"
          color="black"
        >
          {data.name}
        </Heading>
        <Text
          pt={3}
          fontSize={5}
          fontWeight="bold"
          color="black"
        >
          {data.title}
        </Text>
        <Text
          pt={3}
          pb={4}
          fontSize={4}
          color="black"
        >
          {data.subtitle}
        </Text>
        <Flex justifyContent="flex-start">
          <canvas ref={canvasRef} width={200} height={200}></canvas>
        </Flex>
        <Flex alignItems="center" flexDirection={["column", "row"]} py={4}>
          <ExternalLink color="white" target="_blank" rel="noopener noreferrer" href={data.url}>
            <Button
              style={{cursor: "pointer", outline: "none"}}
              backgroundColor={data.color}
              px={4}
              py={3}
            >
              <Text
                fontSize={3}
                fontWeight={500}
                color="white"
              >
                View Announcement
              </Text>
            </Button>
          </ExternalLink>
          <Text
            pt={[4, 0]}
            fontSize={3}
            color="black"
          >
            <ExternalLink p={4} color={data.color} target="_blank" rel="noopener noreferrer" href={data.reportLink}>Read the Report</ExternalLink>
          </Text>
        </Flex>
      </Box>
    </>
  );
}

export default Company;
