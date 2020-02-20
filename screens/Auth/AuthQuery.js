import gql from "graphql-tag";

//import { gql } from "graphql.macro";

export const LOG_IN = gql`
    mutation requestSecret($email: String!) {
        requestSecret(email: $email)
    }
`;
