import { Dream } from '../models/dream.model';

export class DreamsService {
    dreams: Dream[] = [{
        name: 'Web Application',
        description: 'develop and deploy a Web Application!',
        goals: ['Idea for Application','Develop the Application']
    },
    {
        name: 'Finish Dreamtracker',
        description: 'Finish this application!',
        goals: ['save dreams and goals in a database','Implement OAuth2 for User sign up/in']
    }];

}