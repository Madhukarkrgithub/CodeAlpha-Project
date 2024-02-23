import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import {Center, Image, SimpleGrid} from "@chakra-ui/react";
import "./style.css"
export const Github = () => {
  return (
    <div id="Github" className="git">
      <h1
        className="SectionTitle"
        style={{ "margin-top": "72px", "margin-bottom": "0.5rem" }}
      >
        Github
      </h1>
      <div className="github">
        <Center>
          <GitHubCalendar username="Madhukarkrgithub" />
        </Center>
        <SimpleGrid
          w={"95%"}
          margin="auto"
          alignItems="center"
          columns={[3]}
          gap="15px"
          marginTop={"40px"}
        >
          <Center>
            <Image id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=Madhukarkrgithub&count_private=true&show_icons=true&theme=radical" />
          </Center>
          <Center>
            <Image id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com/?user=Madhukarkrgithub" />
          </Center>
          <Center>
            <Image id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs?username=Madhukarkrgithub&show_icons=true&locale=en&layout=compact" />
          </Center>
        </SimpleGrid>
      </div>
    </div>
  );
}