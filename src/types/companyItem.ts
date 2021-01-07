import { JobItem } from './jobItem';

export interface CompanyItem {
    id: string;
    name: string;
    websiteUrl: string;
    logoUrl: string;
    jobs: JobItem[];
}
