import { gql } from '@apollo/client';

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

export default COMPANIES_QUERY;