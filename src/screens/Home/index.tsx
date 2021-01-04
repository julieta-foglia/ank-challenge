import React from 'react';
import {gql, useQuery} from '@apollo/client';
import {CompanyCard} from '../../components';

const COMPANIES_QUERY = gql`
  query Companies {
    companies {
      id
      name
      websiteUrl
      logoUrl
      jobs {
        id
        title
        commitment {
          title
        }
        cities {
          id
          name
        }
        countries {
          id
          name
        }
        remotes {
          id
          name
        }
      }
    }
  }
`;

const Home = () => {
  const companiesQueries = useQuery(COMPANIES_QUERY);
  
  return <CompanyCard companies={companiesQueries.loading ?  [] : companiesQueries.data.companies} />;
};

export default Home;
