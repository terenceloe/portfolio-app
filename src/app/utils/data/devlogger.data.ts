import { IProject } from '../IProject';

export const DevloggerData: IProject = {
    id: '001',
    name: 'Devlogger',
    description: 
     'A simple web application built with Bootstrap and Angular',
     projectLink: 'https://github.com/terenceloe',
     liveUrl: 'terenceloe.github.io',
     isFeatured: true,
     features: [
         'CRUD Application (Create, Read, Update, Delete)',
         'Development Logging',
         'Store Functionality via Local Storage',
         'Responsive UI'
     ],
     tags: ['Bootstrap', 'Angular'],
     techStuff: [
         'Angular 9',
         'Bootstrap 4',
         'Jquery, popper.js, font-awesome'
     ],
     additionalData: []
}