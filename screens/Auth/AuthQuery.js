import gql from "graphql-tag";

//import { gql } from "graphql.macro";

export const LOG_IN = gql`
    mutation requestSecret($email: String!) {
        requestSecret(email: $email)
    }
`;

export const CONFIRM_SECRET = gql`
    mutation confirmSecret($secret: String!, $email: String!) {
        confirmSecret(secret: $secret, email: $email)
    }
`;
