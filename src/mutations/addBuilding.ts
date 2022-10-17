import { gql } from "@apollo/client";

export const INSERT_MUTATION = (param: any) => gql`
  {
    insert_building_one(object: param) {
      building {
       architect_Id: param.archite_id,
       description: param.description,
       image: param.image,
       name: param.name,
       place: param.place,
       style: param.style,\
       year_of_completion: param.year_of_completion
      }
    }
  }
`;
