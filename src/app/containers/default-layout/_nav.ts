import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    // badge: {
    //   color: 'info',
    //   text: 'NEW'
    // }
  },
  {
    name: 'Tournaments',
    title: true
  },
  {
    name: 'Cities',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Karachi',
        url: '/base/accordion'
      },
      {
        name: 'Lahore',
        url: '/base/breadcrumbs'
      },
      {
        name: 'Islamabad',
        url: '/base/cards'
      },
    ]
  },
  {
    name: 'Games',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Fooseball',
        url: '/buttons/buttons'
      },
      {
        name: 'Cricket',
        url: '/buttons/button-groups'
      },
      {
        name: 'Table Tennis',
        url: '/buttons/dropdowns'
      },
      {
        name: 'Ludo',
        url: '/buttons/dropdowns'
      },
    ]
  },
  {
    name: 'Teams',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Fooseball',
        url: '/forms/form-control'
      },
      {
        name: 'Cricket',
        url: '/forms/select'
      },
      {
        name: 'Ludo',
        url: '/forms/checks-radios'
      },
      {
        name: 'Table Tennis',
        url: '/forms/range'
      },
    ]
  },
  {
    name: 'New Teams',
    url: '/charts',
    iconComponent: { name: 'cil-chart-pie' },
    children: [
      {
        name: 'Fooseball',
        url: '/forms/form-control'
      },
      {
        name: 'Cricket',
        url: '/forms/select'
      },
      {
        name: 'Ludo',
        url: '/forms/checks-radios'
      },
      {
        name: 'Table Tennis',
        url: '/forms/range'
      },
    ]
  },
];
