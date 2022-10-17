import React from "react";
import { useQuery, gql } from "@apollo/client";

export const BUILDINGS_QUERY = gql`
  {
    users_buildings {
      building {
        description
        id
        image
        name
        place
        style
        architect {
          name
        }
      }
    }
  }
`;
