import React from 'react'
import About from "../content/about/About"
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import VerifiedUserOutlinedIcon from '@material-ui/icons/VerifiedUserOutlined';
import RowingIcon from '@material-ui/icons/Rowing';

export default [
  {
    name: "Home",
    path: "/",
    icon: <HomeIcon />,
    component: About,
    requiresMember: false,
    requiresExec: false,
    requiresCaptain: false,
  },
  {
    name: "About",
    path: "/about",
    icon: <InfoIcon />,
    component: About,
    requiresMember: false,
    requiresExec: false,
    requiresCaptain: false,
    subRoutes: [
      {
        name: "The Club",
        path: "/about/club",
        component: About,
        requiresMember: false,
        requiresExec: false,
        requiresCaptain: false,
      },
      {
        name: "Executive Comittee",
        path: "/about/executiveComittee",
        component: About,
        requiresMember: false,
        requiresExec: false,
        requiresCaptain: false,
      }
    ]
  },
  {
    name: "Races",
    path: "/races",
    icon: <RowingIcon />,
    component: About,
    requiresMember: false,
    requiresExec: false,
    requiresCaptain: false,
    subRoutes: [
      {
        name: "Upcoming",
        path: "/races/upcoming",
        component: About,
        requiresMember: false,
        requiresExec: false,
        requiresCaptain: false,
      },
      {
        name: "Results",
        path: "/results",
        component: About,
        requiresMember: false,
        requiresExec: false,
        requiresCaptain: false,
      }
    ]
  },
  {
    name: "Safety",
    path: "/safety",
    icon: <VerifiedUserOutlinedIcon />,
    component: About,
    requiresMember: false,
    requiresExec: false,
    requiresCaptain: false,
  },
]