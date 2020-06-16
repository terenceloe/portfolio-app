import { IProject } from '../IProject';

export const MymessageData: IProject = {
    id: '006',
    name: 'MyMessage',
    description: 
     'A simple web application built with Angular (Frontend), and NodeJS & Express as Backend',
     projectLink: 'https://github.com/terenceloe/mean-app',
     liveUrl: 'http://meanapp-env.eba-rragwzi6.us-east-2.elasticbeanstalk.com/',
     isFeatured: true,
     features: [
         'Simple web application where logged in user can post, edit, and delete text & image',
         'MongoDB, NodeJS, Express as Backend',
         'Hosting with AWS Elastic Beanstalk',
         'The app was built to learn MEAN Stack(MongoDB, Express, Angular, NodeJS)'
     ],
     tags: ['NodeJS', 'Angular', 'Typescript', 'MongoDB'],
     techStuff: [
         'Angular 9',
         'Mongo DB',
         'Node JS & Express',
         'Amazon Web Service Hosting (Elastic Beanstalk)'
     ],
     additionalData: []
}