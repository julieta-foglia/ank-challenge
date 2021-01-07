import { City } from "./city";
import { Country } from "./country";
import { Remote } from "./remote";
  
export interface JobItem {
    id: string;
    title: string;
    cities: City[];
    countries: Country[];
    commitment: {
        title: string;
    };
    remotes: Remote[];
}