import swolesearchPic from './assets/swolesearch.png'
import stars from './assets/stars.svg'
import turnupPic from './assets/turnup.png'
import gigsharePic from './assets/gigshare.png'
import babybutterflycartelPic from './assets/babybutterflycartel.png'
import acePic from './assets/ace.png'

import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ButtonBase from '@mui/material/ButtonBase'

import UnstyledLink from './components/UnstyledLink'
import PrimaryImage from './components/PrimaryImage'
import SiteLinkButton from './components/SiteLinkButton'

import { useRef } from 'react'

const projects: Project[] = [
  {
    name: 'TurnUp',
    description: "Venue & event management. Create an account, own venues and create events! Save your favorites to keep up to date.",
    image: turnupPic,
    link: 'https://iod-capstone-turn-up-client.vercel.app/',
    tech: ['ReactJS', 'MUI', 'ExpressJS', 'MongoDB', 'AWS Elastic Beanstalk']
  },
  {
    name: 'GigShare',
    description: 'Share your experiences at events. Add artists, friends and songs to your posts!',
    image: gigsharePic,
    link: 'https://mini-project-1-gig-share-social-app.vercel.app/',
    tech: ['HTML', 'JS', 'CSS', 'Bootstrap']
  },
  {
    name: 'Butterfly NFT',
    description: 'Connect your wallet, approve your BTRFLY token allowance, then mint NFTs and manage your rewards!',
    image: babybutterflycartelPic,
    link: 'https://baby-butterfly-cartel-site-v01.vercel.app/',
    tech: ['ReactJS', 'Wagmi + Rainbowkit', 'CSS', 'Solidity']
  },
  {
    name: 'ACE Tutoring',
    description: 'Site for Achieve Centers for Education. Find information about tuition and login/enrol to the student portal.',
    image: acePic,
    link: 'http://www.acetutoring.co.nz/',
    tech: ['HTML', 'CSS', 'PHP', 'Wordpress', 'Bootstrap']
  },
  {
    name: 'SwoleSearch',
    description: 'Search, filter and save exercises to help you reach your full potential!',
    image: swolesearchPic,
    link: 'https://mini-project-2-swole-search-exercise-finder.vercel.app/',
    tech: ['ReactJS', 'MUI']
  }
]

type Project = {
  name: string
  description: string
  image: string
  link: string
  tech: string[]
}

interface ProjectPage {
  project: Project
  index: number
  page: React.MutableRefObject<IParallax>
}

function NamePage({ page }: { page: React.MutableRefObject<IParallax> }) {
  return (
    <ParallaxLayer speed={0.1}>
      <Container maxWidth='lg' sx={{ height: '100%' }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          position: 'relative'
        }}>

          <Stack spacing={8}>

            <Box>
              <Box display='flex' alignItems='center' mb={1}>
                <Typography variant='h3' component='h1'>
                  Hi 👋
                </Typography>
                <Stack direction='row' ml='auto' spacing={1} alignItems='center'>
                  <UnstyledLink href='https://github.com/MazzomesClone'><GitHubIcon sx={{ fontSize: '58px' }} /></UnstyledLink>
                  <UnstyledLink href='https://www.linkedin.com/in/luke-barker-a0405b277/'><LinkedInIcon sx={{ fontSize: '70px' }} /></UnstyledLink>
                </Stack>
              </Box>
              <Typography variant='h3' component='h2'>
                My name is Luke Barker
              </Typography>
            </Box>

            <Typography fontSize='1.8rem'>
              Here are some of my projects
            </Typography>

          </Stack>

          <ButtonBase
            sx={{
              bottom: '0px',
              position: 'absolute',
              transition: 'color 0.3s',
              '.browse-text': {
                transition: 'transform 0.3s'
              },
              ":hover": {
                color: 'white',
                '.browse-text': {
                  transition: 'transform 0.3s',
                  transform: 'translateY(-7px)'
                }
              }
            }}
            onClick={() => page.current.scrollTo(1)}>
            <Stack alignItems='center'>
              <Typography className='browse-text'>Click to browse</Typography>
              <KeyboardArrowDownIcon sx={{ fontSize: '40px' }} />
            </Stack>
          </ButtonBase>

        </Box>
      </Container>
    </ParallaxLayer>
  )
}

function ProjectPage({ project, index, page }: ProjectPage) {
  return (
    <ParallaxLayer offset={index + 1} speed={0.5}>
      <Container maxWidth='lg' style={{ height: '100%' }}>
        <Box
          width='100%'
          height='100%'
          display='flex'
          flexDirection='column'
          alignItems='center'
          justifyContent='space-between'
        >

          <IconButton color='inherit' onClick={() => page.current.scrollTo(index)}>
            <KeyboardArrowUpIcon sx={{ fontSize: '40px' }} />
          </IconButton>

          <Box>
            <Box width='100%' display='flex' flexWrap='wrap' mb={3}>
              <Typography variant='h3' display='inline' mr='auto'>
                {project.name}
              </Typography>
              <Box>
                <a href={project.link} target='blank' rel='noreferrer'>
                  <SiteLinkButton>
                    <OpenInNewIcon sx={{ mr: 1 }} />
                    Visit
                  </SiteLinkButton>
                </a>
              </Box>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6.5}>
                <PrimaryImage src={project.image} />
              </Grid>
              <Grid item xs={12} sm={5.5}>
                <Typography fontSize='1.2rem' mb={2}>
                  {project.description}
                </Typography>
                <Typography fontSize='1.2rem' component='ul'>
                  {project.tech.map((item, index) => <li key={index}>{item}</li>)}
                </Typography>
              </Grid>
            </Grid>
          </Box>

          {index + 1 < projects.length ?
            <IconButton color='inherit' onClick={() => page.current.scrollTo(index + 2)}>
              <KeyboardArrowDownIcon sx={{ fontSize: '40px' }} />
            </IconButton>
            :
            <Box></Box>
          }

        </Box>
      </Container>
    </ParallaxLayer >
  )
}

function App() {

  const page = useRef<IParallax>(null!)

  const ProjectPages = projects.map((project, index) =>
    <ProjectPage project={project} index={index} key={index} page={page} />
  )

  const totalPages = ProjectPages.length + 1

  return (
    <Parallax ref={page} pages={totalPages}>
      <ParallaxLayer
        style={{
          backgroundImage: `url(${stars})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'repeat'
        }}
        factor={totalPages} />

      <NamePage page={page} />

      {ProjectPages}

    </Parallax>
  )
}

export default App
