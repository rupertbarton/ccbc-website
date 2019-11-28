import React from 'react';
import InformationPage from '../content/informationPage/informationPageContainer';
import ModifyExec from '../content/modifyExec/modifyExecPageContainer';
import ModifyContent from '../content/modifyContent/modifyContentPageContainer';
import CalendarPage from '../content/calendar/CalendarPage';
import PrivacyPolicy from '../content/privacyPolicy/PrivacyPolicy';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import RowingIcon from '@material-ui/icons/Rowing';
import CreateIcon from '@material-ui/icons/Create';
import PeopleIcon from '@material-ui/icons/People';

export default [
  {
    name: 'Home',
    path: '/',
    icon: <HomeIcon />,
    component: InformationPage,
    requiresMember: false,
    requiresExec: false,
    requiresCaptain: false,
  },
  {
    name: 'About',
    path: '/about',
    icon: <InfoIcon />,
    component: InformationPage,
    requiresMember: false,
    requiresExec: false,
    requiresCaptain: false,
    subRoutes: [
      {
        name: 'The Club',
        path: '/about/club',
        component: InformationPage,
        requiresMember: false,
        requiresExec: false,
        requiresCaptain: false,
      },
      {
        name: 'Executive Comittee',
        path: '/about/executiveComittee',
        component: InformationPage,
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
    component: InformationPage,
    requiresMember: false,
    requiresExec: false,
    requiresCaptain: false,
    subRoutes: [
      {
        name: 'Upcoming',
        path: '/races/upcoming',
        component: InformationPage,
        requiresMember: false,
        requiresExec: false,
        requiresCaptain: false,
      },
      {
        name: 'Results',
        path: '/results',
        component: InformationPage,
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
    component: InformationPage,
    requiresMember: false,
    requiresExec: false,
    requiresCaptain: false,
  },
  {
    name: 'Update Executive Comittee',
    path: '/about/executiveComittee/update',
    icon: <PeopleIcon />,
    component: ModifyExec,
    requiresMember: false,
    requiresExec: false,
    requiresCaptain: true,
  },
  {
    name: 'Update Page Content',
    path: '/updateContent',
    icon: <CreateIcon />,
    component: ModifyContent,
    requiresMember: true,
    requiresExec: true,
    requiresCaptain: false,
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