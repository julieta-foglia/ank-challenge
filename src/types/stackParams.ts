import { JobItem } from './jobItem';

export type RootStackParamList = {
    Home: undefined;
    FavedJobs: undefined;
    JobDescription: {
        jobs: JobItem[];
        company: string;
    };
    JobApplication: { job: string };
};
