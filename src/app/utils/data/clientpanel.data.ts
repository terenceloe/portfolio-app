import { IProject } from '../IProject';

export const ClientpanelData: IProject = {
    id: '002',
    name: 'Clientpanel',
    description: 
     'Client Management Application built with Bootstrap and Angular',
     projectLink: 'https://github.com/terenceloe',
     liveUrl: 'https://clientpanelprod-87c88.web.app/',
     isFeatured: true,
     features: [
         'Clients Management (Client details, balances)',
         'Login Function',
         'Settings function',
         'Firebase as backend'
     ],
     tags: ['Bootstrap', 'Angular', 'Typescript'],
     techStuff: [
         'Angular 9',
         'Bootstrap 4',
         'Jquery, popper.js, font-awesome'
     ],
     additionalData: [
         {
             title: 'About',
             data: [
                 'This is my first project with Firebase',
                 'Actually i developed this just for my private use :)'
             ]
         }
     ]
}