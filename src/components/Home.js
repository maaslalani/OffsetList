import React from 'react';
import {
  Text,
  Heading,
  Box,
  Flex,
  Link,
} from 'rebass';
import COMPANIES from '../data/companies';

function CompanyCard({name, color, url}) {
  return (
    <Link key={name + color + Math.floor(Math.random() * 100)} className="card" target="_blank" rel="noopener noreferrer" href={url} >
      <Box textAlign="center" py={5} sx={{ borderRadius: 5 }} color="white" bg={color}>
        <Text fontSize={4}>
          {name}
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
      minWidth={300}
      px={[4, 4, 6]}
      py={5}
    >
      <Flex
        flexDirection={["column-reverse", "row"]}
        alignItems="center"
        justifyContent="space-around"
        py={[2, 4, 6]}
      >
        <Box width={[1, 1/2]} textAlign={["center", "left"]}>
          <Heading variant='display'>
            Offset List
          </Heading>
          <Text mt={3} fontSize={24}>
            Companies that have committed to offsetting their carbon emissions
          </Text>
        </Box>
        <Box width={[1, 1/2, 1/2]} height={450} textAlign="center">
          <model-viewer
            style={{width: "100%", height: "450px", outline: "none"}}
            src="earth.glb"
            alt="3D model of the earth"
            camera-controls
            auto-rotate
            auto-rotate-delay={100}
            interaction-prompt-threshold={20000}
            interaction-policy="allow-when-focused"
            background-color="black">
          </model-viewer>
        </Box>
      </Flex>
      <Box
        py={6}
        display="grid"
        sx={{
        gridGap: 4,
        gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))'
        }}
      >
        {COMPANIES.map(CompanyCard)}
      </Box>
      <Box pb={5} textAlign="center">
        <code>
          Made with <span role="img" aria-label="tree">🌳</span> by <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/maaslalani">Maas</a> and <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/gonenadam">Adam</a>. </code>
          <code><span role="img" aria-label="earth">🌍</span> from <a href="https://poly.google.com/view/88CP80Kgb-u">Poly</a></code>
        </Box>
      </Box>
  );
}

export default Home;
