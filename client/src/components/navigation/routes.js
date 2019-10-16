import React from 'react';
import Home from '../content/home/Home';
import About from '../content/about/About';
import TheClub from '../content/about/TheClub';
import ExecutiveComittee from '../content/about/ExecutiveComittee';
import Races from '../content/races/Races';
import Upcoming from '../content/races/Upcoming';
import Results from '../content/races/Results';
import Safety from '../content/safety/Safety';
import ModifyExec from '../content/modifyExec/modifyExecPageContainer';
import PrivacyPolicy from '../content/privacyPolicy/PrivacyPolicy';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import RowingIcon from '@material-ui/icons/Rowing';
import CreateIcon from '@material-ui/icons/Create';

export default [
  {
    name: 'Home',
    path: '/',
    icon: <HomeIcon />,
    component: Home,
    requiresMember: false,
    requiresExec: false,
    requiresCaptain: false,
  },
  {
    name: 'About',
    path: '/about',
    icon: <InfoIcon />,
    component: About,
    requiresMember: false,
    requiresExec: false,
    requiresCaptain: false,
    subRoutes: [
      {
        name: 'The Club',
        path: '/about/club',
        component: TheClub,
        requiresMember: false,
        requiresExec: false,
        requiresCaptain: false,
      },
      {
        name: 'Executive Comittee',
        path: '/about/executiveComittee',
        component: ExecutiveComittee,
        requiresMember: false,
        requiresExec: false,
        requiresCaptain: false,
      }
    ]
  },
  {
    name: 'Races',
    path: '/races',
    icon: <RowingIcon />,
    component: Races,
    requiresMember: false,
    requiresExec: false,
    requiresCaptain: false,
    subRoutes: [
      {
        name: 'Upcoming',
        path: '/races/upcoming',
        component: Upcoming,
        requiresMember: false,
        requiresExec: false,
        requiresCaptain: false,
      },
      {
        name: 'Results',
        path: '/results',
        component: Results,
        requiresMember: false,
        requiresExec: false,
        requiresCaptain: false,
      }
    ]
  },
  {
    name: 'Safety',
    path: '/safety',
    icon: <VerifiedUserOutlinedIcon />,
    component: Safety,
    requiresMember: false,
    requiresExec: false,
    requiresCaptain: false,
  },
  {
    name: 'Update Executive Comittee',
    path: '/about/executiveComittee/update',
    icon: <CreateIcon />,
    component: ModifyExec,
    requiresMember: false,
    requiresExec: false,
    requiresCaptain: true,
  },
  {
    name: 'Privacy',
    path: '/privacy',
    icon: null,
    component: PrivacyPolicy,
    requiresMember: false,
    requiresExec: false,
    requiresCaptain: false,
  },
];