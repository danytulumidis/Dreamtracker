/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateDreamsInput = {
  id: number;
  name: string;
  description: string;
  goals: string;
};

export type UpdateDreamsInput = {
  id: number;
  name?: string | null;
  description?: string | null;
  goals?: string | null;
};

export type DeleteDreamsMutation = {
  __typename: "Dreams";
  id: number;
  name: string;
  description: string;
  goals: string;
};

export type CreateDreamsMutation = {
  __typename: "Dreams";
  id: number;
  name: string;
  description: string;
  goals: string;
};

export type UpdateDreamsMutation = {
  __typename: "Dreams";
  id: number;
  name: string;
  description: string;
  goals: string;
};

export type GetDreamsQuery = {
  __typename: "Dreams";
  id: number;
  name: string;
  description: string;
  goals: string;
};

export type ListDreamssQuery = {
  __typename: "Dreams";
  id: number;
  name: string;
  description: string;
  goals: string;
};

export type OnCreateDreamsSubscription = {
  __typename: "Dreams";
  id: number;
  name: string;
  description: string;
  goals: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async DeleteDreams(id: number): Promise<DeleteDreamsMutation> {
    const statement = `mutation DeleteDreams($id: Int!) {
        deleteDreams(id: $id) {
          __typename
          id
          name
          description
          goals
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDreamsMutation>response.data.deleteDreams;
  }
  async CreateDreams(
    createDreamsInput: CreateDreamsInput
  ): Promise<CreateDreamsMutation> {
    const statement = `mutation CreateDreams($createDreamsInput: CreateDreamsInput!) {
        createDreams(createDreamsInput: $createDreamsInput) {
          __typename
          id
          name
          description
          goals
        }
      }`;
    const gqlAPIServiceArguments: any = {
      createDreamsInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDreamsMutation>response.data.createDreams;
  }
  async UpdateDreams(
    updateDreamsInput: UpdateDreamsInput
  ): Promise<UpdateDreamsMutation> {
    const statement = `mutation UpdateDreams($updateDreamsInput: UpdateDreamsInput!) {
        updateDreams(updateDreamsInput: $updateDreamsInput) {
          __typename
          id
          name
          description
          goals
        }
      }`;
    const gqlAPIServiceArguments: any = {
      updateDreamsInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDreamsMutation>response.data.updateDreams;
  }
  async GetDreams(id: number): Promise<GetDreamsQuery> {
    const statement = `query GetDreams($id: Int!) {
        getDreams(id: $id) {
          __typename
          id
          name
          description
          goals
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDreamsQuery>response.data.getDreams;
  }
  async ListDreamss(): Promise<Array<ListDreamssQuery>> {
    const statement = `query ListDreamss {
        listDreamss {
          __typename
          id
          name
          description
          goals
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListDreamssQuery>>response.data.listDreamss;
  }
  OnCreateDreamsListener: Observable<OnCreateDreamsSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateDreams {
        onCreateDreams {
          __typename
          id
          name
          description
          goals
        }
      }`
    )
  ) as Observable<OnCreateDreamsSubscription>;
}
