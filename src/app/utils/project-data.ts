import { DevloggerData } from "./data/devlogger.data"
import { ClientpanelData } from "./data/clientpanel.data"
import { CrudJavaData } from "./data/crud-java.data"
import { environment } from 'src/environments/environment';
import { testUniqueness } from './utils';
import { IProject } from './IProject';

const getAllProject = () => {
    const projects = [
        DevloggerData,   
        CrudJavaData,
        ClientpanelData    
    ];

    if (!environment.production) {
        const result = testUniqueness(projects, project => project.id);

        if (result.error) {
            const errorLog = [];
            result.duplicates.forEach((project: IProject) => {
                errorLog.push(`Duplicate E-id ${project.id} of ${project.name}`);
            });
            throw new Error(JSON.stringify(errorLog));
        }
    }
    return projects;
}

export const ALL_PROJECT_DATA = getAllProject();

