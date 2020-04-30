/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateDreamInput = {
  dreamID: number;
  name: string;
  description: string;
  private?: number | null;
  userID: string;
  upvotes?: number | null;
  created?: string | null;
};

export type UpdateDreamInput = {
  dreamID: number;
  name?: string | null;
  description?: string | null;
  private?: number | null;
  userID?: string | null;
  upvotes?: number | null;
  created?: string | null;
};

export type CreateFriendshipInput = {
  userA: string;
  userB: string;
  created?: string | null;
  status?: string | null;
};

export type UpdateFriendshipInput = {
  userA: string;
  userB: string;
  created?: string | null;
  status?: string | null;
};

export type CreateGoalInput = {
  goalID: number;
  name: string;
  description: string;
  dreamID: number;
  finished?: number | null;
  created?: string | null;
};

export type UpdateGoalInput = {
  goalID: number;
  name?: string | null;
  description?: string | null;
  dreamID?: number | null;
  finished?: number | null;
  created?: string | null;
};

export type CreateUpvoteInput = {
  userID: string;
  dreamID: number;
};

export type UpdateUpvoteInput = {
  userID: string;
  dreamID: number;
};

export type CreateUserInput = {
  userID: string;
  name: string;
  description: string;
  jobTitle?: string | null;
  profilePictureURL?: string | null;
  created?: string | null;
};

export type UpdateUserInput = {
  userID: string;
  name?: string | null;
  description?: string | null;
  jobTitle?: string | null;
  profilePictureURL?: string | null;
  created?: string | null;
};

export type CreateUserSettingInput = {
  settingID: number;
  settingName: string;
  settingValue: string;
  userID: string;
};

export type UpdateUserSettingInput = {
  settingID: number;
  settingName?: string | null;
  settingValue?: string | null;
  userID?: string | null;
};

export type DeleteDreamMutation = {
  __typename: "Dream";
  dreamID: number;
  name: string;
  description: string;
  private: number | null;
  userID: string;
  upvotes: number | null;
  created: string | null;
};

export type CreateDreamMutation = {
  __typename: "Dream";
  dreamID: number;
  name: string;
  description: string;
  private: number | null;
  userID: string;
  upvotes: number | null;
  created: string | null;
};

export type UpdateDreamMutation = {
  __typename: "Dream";
  dreamID: number;
  name: string;
  description: string;
  private: number | null;
  userID: string;
  upvotes: number | null;
  created: string | null;
};

export type DeleteFriendshipMutation = {
  __typename: "Friendship";
  userA: string;
  userB: string;
  created: string | null;
  status: string | null;
};

export type CreateFriendshipMutation = {
  __typename: "Friendship";
  userA: string;
  userB: string;
  created: string | null;
  status: string | null;
};

export type UpdateFriendshipMutation = {
  __typename: "Friendship";
  userA: string;
  userB: string;
  created: string | null;
  status: string | null;
};

export type DeleteGoalMutation = {
  __typename: "Goal";
  goalID: number;
  name: string;
  description: string;
  dreamID: number;
  finished: number | null;
  created: string | null;
};

export type CreateGoalMutation = {
  __typename: "Goal";
  goalID: number;
  name: string;
  description: string;
  dreamID: number;
  finished: number | null;
  created: string | null;
};

export type UpdateGoalMutation = {
  __typename: "Goal";
  goalID: number;
  name: string;
  description: string;
  dreamID: number;
  finished: number | null;
  created: string | null;
};

export type DeleteUpvoteMutation = {
  __typename: "Upvote";
  userID: string;
  dreamID: number;
};

export type CreateUpvoteMutation = {
  __typename: "Upvote";
  userID: string;
  dreamID: number;
};

export type UpdateUpvoteMutation = {
  __typename: "Upvote";
  userID: string;
  dreamID: number;
};

export type DeleteUserMutation = {
  __typename: "User";
  userID: string;
  name: string;
  description: string;
  jobTitle: string | null;
  profilePictureURL: string | null;
  created: string | null;
};

export type CreateUserMutation = {
  __typename: "User";
  userID: string;
  name: string;
  description: string;
  jobTitle: string | null;
  profilePictureURL: string | null;
  created: string | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  userID: string;
  name: string;
  description: string;
  jobTitle: string | null;
  profilePictureURL: string | null;
  created: string | null;
};

export type DeleteUserSettingMutation = {
  __typename: "UserSetting";
  settingID: number;
  settingName: string;
  settingValue: string;
  userID: string;
};

export type CreateUserSettingMutation = {
  __typename: "UserSetting";
  settingID: number;
  settingName: string;
  settingValue: string;
  userID: string;
};

export type UpdateUserSettingMutation = {
  __typename: "UserSetting";
  settingID: number;
  settingName: string;
  settingValue: string;
  userID: string;
};

export type GetDreamQuery = {
  __typename: "Dream";
  dreamID: number;
  name: string;
  description: string;
  private: number | null;
  userID: string;
  upvotes: number | null;
  created: string | null;
};

export type ListDreamsQuery = {
  __typename: "Dream";
  dreamID: number;
  name: string;
  description: string;
  private: number | null;
  userID: string;
  upvotes: number | null;
  created: string | null;
};

export type GetFriendshipQuery = {
  __typename: "Friendship";
  userA: string;
  userB: string;
  created: string | null;
  status: string | null;
};

export type ListFriendshipsQuery = {
  __typename: "Friendship";
  userA: string;
  userB: string;
  created: string | null;
  status: string | null;
};

export type GetGoalQuery = {
  __typename: "Goal";
  goalID: number;
  name: string;
  description: string;
  dreamID: number;
  finished: number | null;
  created: string | null;
};

export type ListGoalsQuery = {
  __typename: "Goal";
  goalID: number;
  name: string;
  description: string;
  dreamID: number;
  finished: number | null;
  created: string | null;
};

export type GetUpvoteQuery = {
  __typename: "Upvote";
  userID: string;
  dreamID: number;
};

export type ListUpvotesQuery = {
  __typename: "Upvote";
  userID: string;
  dreamID: number;
};

export type GetUserQuery = {
  __typename: "User";
  userID: string;
  name: string;
  description: string;
  jobTitle: string | null;
  profilePictureURL: string | null;
  created: string | null;
};

export type ListUsersQuery = {
  __typename: "User";
  userID: string;
  name: string;
  description: string;
  jobTitle: string | null;
  profilePictureURL: string | null;
  created: string | null;
};

export type GetUserSettingQuery = {
  __typename: "UserSetting";
  settingID: number;
  settingName: string;
  settingValue: string;
  userID: string;
};

export type ListUserSettingsQuery = {
  __typename: "UserSetting";
  settingID: number;
  settingName: string;
  settingValue: string;
  userID: string;
};

export type OnCreateDreamSubscription = {
  __typename: "Dream";
  dreamID: number;
  name: string;
  description: string;
  private: number | null;
  userID: string;
  upvotes: number | null;
  created: string | null;
};

export type OnCreateFriendshipSubscription = {
  __typename: "Friendship";
  userA: string;
  userB: string;
  created: string | null;
  status: string | null;
};

export type OnCreateGoalSubscription = {
  __typename: "Goal";
  goalID: number;
  name: string;
  description: string;
  dreamID: number;
  finished: number | null;
  created: string | null;
};

export type OnCreateUpvoteSubscription = {
  __typename: "Upvote";
  userID: string;
  dreamID: number;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  userID: string;
  name: string;
  description: string;
  jobTitle: string | null;
  profilePictureURL: string | null;
  created: string | null;
};

export type OnCreateUserSettingSubscription = {
  __typename: "UserSetting";
  settingID: number;
  settingName: string;
  settingValue: string;
  userID: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async DeleteDream(dreamID: number): Promise<DeleteDreamMutation> {
    const statement = `mutation DeleteDream($dreamID: Int!) {
        deleteDream(dreamID: $dreamID) {
          __typename
          dreamID
          name
          description
          private
          userID
          upvotes
          created
        }
      }`;
    const gqlAPIServiceArguments: any = {
      dreamID
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDreamMutation>response.data.deleteDream;
  }
  async CreateDream(
    createDreamInput: CreateDreamInput
  ): Promise<CreateDreamMutation> {
    const statement = `mutation CreateDream($createDreamInput: CreateDreamInput!) {
        createDream(createDreamInput: $createDreamInput) {
          __typename
          dreamID
          name
          description
          private
          userID
          upvotes
          created
        }
      }`;
    const gqlAPIServiceArguments: any = {
      createDreamInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDreamMutation>response.data.createDream;
  }
  async UpdateDream(
    updateDreamInput: UpdateDreamInput
  ): Promise<UpdateDreamMutation> {
    const statement = `mutation UpdateDream($updateDreamInput: UpdateDreamInput!) {
        updateDream(updateDreamInput: $updateDreamInput) {
          __typename
          dreamID
          name
          description
          private
          userID
          upvotes
          created
        }
      }`;
    const gqlAPIServiceArguments: any = {
      updateDreamInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDreamMutation>response.data.updateDream;
  }
  async DeleteFriendship(userB: string): Promise<DeleteFriendshipMutation> {
    const statement = `mutation DeleteFriendship($userB: String!) {
        deleteFriendship(userB: $userB) {
          __typename
          userA
          userB
          created
          status
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userB
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFriendshipMutation>response.data.deleteFriendship;
  }
  async CreateFriendship(
    createFriendshipInput: CreateFriendshipInput
  ): Promise<CreateFriendshipMutation> {
    const statement = `mutation CreateFriendship($createFriendshipInput: CreateFriendshipInput!) {
        createFriendship(createFriendshipInput: $createFriendshipInput) {
          __typename
          userA
          userB
          created
          status
        }
      }`;
    const gqlAPIServiceArguments: any = {
      createFriendshipInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFriendshipMutation>response.data.createFriendship;
  }
  async UpdateFriendship(
    updateFriendshipInput: UpdateFriendshipInput
  ): Promise<UpdateFriendshipMutation> {
    const statement = `mutation UpdateFriendship($updateFriendshipInput: UpdateFriendshipInput!) {
        updateFriendship(updateFriendshipInput: $updateFriendshipInput) {
          __typename
          userA
          userB
          created
          status
        }
      }`;
    const gqlAPIServiceArguments: any = {
      updateFriendshipInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFriendshipMutation>response.data.updateFriendship;
  }
  async DeleteGoal(goalID: number): Promise<DeleteGoalMutation> {
    const statement = `mutation DeleteGoal($goalID: Int!) {
        deleteGoal(goalID: $goalID) {
          __typename
          goalID
          name
          description
          dreamID
          finished
          created
        }
      }`;
    const gqlAPIServiceArguments: any = {
      goalID
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteGoalMutation>response.data.deleteGoal;
  }
  async CreateGoal(
    createGoalInput: CreateGoalInput
  ): Promise<CreateGoalMutation> {
    const statement = `mutation CreateGoal($createGoalInput: CreateGoalInput!) {
        createGoal(createGoalInput: $createGoalInput) {
          __typename
          goalID
          name
          description
          dreamID
          finished
          created
        }
      }`;
    const gqlAPIServiceArguments: any = {
      createGoalInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateGoalMutation>response.data.createGoal;
  }
  async UpdateGoal(
    updateGoalInput: UpdateGoalInput
  ): Promise<UpdateGoalMutation> {
    const statement = `mutation UpdateGoal($updateGoalInput: UpdateGoalInput!) {
        updateGoal(updateGoalInput: $updateGoalInput) {
          __typename
          goalID
          name
          description
          dreamID
          finished
          created
        }
      }`;
    const gqlAPIServiceArguments: any = {
      updateGoalInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateGoalMutation>response.data.updateGoal;
  }
  async DeleteUpvote(dreamID: number): Promise<DeleteUpvoteMutation> {
    const statement = `mutation DeleteUpvote($dreamID: Int!) {
        deleteUpvote(dreamID: $dreamID) {
          __typename
          userID
          dreamID
        }
      }`;
    const gqlAPIServiceArguments: any = {
      dreamID
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUpvoteMutation>response.data.deleteUpvote;
  }
  async CreateUpvote(
    createUpvoteInput: CreateUpvoteInput
  ): Promise<CreateUpvoteMutation> {
    const statement = `mutation CreateUpvote($createUpvoteInput: CreateUpvoteInput!) {
        createUpvote(createUpvoteInput: $createUpvoteInput) {
          __typename
          userID
          dreamID
        }
      }`;
    const gqlAPIServiceArguments: any = {
      createUpvoteInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUpvoteMutation>response.data.createUpvote;
  }
  async UpdateUpvote(
    updateUpvoteInput: UpdateUpvoteInput
  ): Promise<UpdateUpvoteMutation> {
    const statement = `mutation UpdateUpvote($updateUpvoteInput: UpdateUpvoteInput!) {
        updateUpvote(updateUpvoteInput: $updateUpvoteInput) {
          __typename
          userID
          dreamID
        }
      }`;
    const gqlAPIServiceArguments: any = {
      updateUpvoteInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUpvoteMutation>response.data.updateUpvote;
  }
  async DeleteUser(userID: string): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($userID: String!) {
        deleteUser(userID: $userID) {
          __typename
          userID
          name
          description
          jobTitle
          profilePictureURL
          created
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userID
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreateUser(
    createUserInput: CreateUserInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($createUserInput: CreateUserInput!) {
        createUser(createUserInput: $createUserInput) {
          __typename
          userID
          name
          description
          jobTitle
          profilePictureURL
          created
        }
      }`;
    const gqlAPIServiceArguments: any = {
      createUserInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    updateUserInput: UpdateUserInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($updateUserInput: UpdateUserInput!) {
        updateUser(updateUserInput: $updateUserInput) {
          __typename
          userID
          name
          description
          jobTitle
          profilePictureURL
          created
        }
      }`;
    const gqlAPIServiceArguments: any = {
      updateUserInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUserSetting(
    settingID: number
  ): Promise<DeleteUserSettingMutation> {
    const statement = `mutation DeleteUserSetting($settingID: Int!) {
        deleteUserSetting(settingID: $settingID) {
          __typename
          settingID
          settingName
          settingValue
          userID
        }
      }`;
    const gqlAPIServiceArguments: any = {
      settingID
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserSettingMutation>response.data.deleteUserSetting;
  }
  async CreateUserSetting(
    createUserSettingInput: CreateUserSettingInput
  ): Promise<CreateUserSettingMutation> {
    const statement = `mutation CreateUserSetting($createUserSettingInput: CreateUserSettingInput!) {
        createUserSetting(createUserSettingInput: $createUserSettingInput) {
          __typename
          settingID
          settingName
          settingValue
          userID
        }
      }`;
    const gqlAPIServiceArguments: any = {
      createUserSettingInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserSettingMutation>response.data.createUserSetting;
  }
  async UpdateUserSetting(
    updateUserSettingInput: UpdateUserSettingInput
  ): Promise<UpdateUserSettingMutation> {
    const statement = `mutation UpdateUserSetting($updateUserSettingInput: UpdateUserSettingInput!) {
        updateUserSetting(updateUserSettingInput: $updateUserSettingInput) {
          __typename
          settingID
          settingName
          settingValue
          userID
        }
      }`;
    const gqlAPIServiceArguments: any = {
      updateUserSettingInput
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserSettingMutation>response.data.updateUserSetting;
  }
  async GetDream(dreamID: number): Promise<GetDreamQuery> {
    const statement = `query GetDream($dreamID: Int!) {
        getDream(dreamID: $dreamID) {
          __typename
          dreamID
          name
          description
          private
          userID
          upvotes
          created
        }
      }`;
    const gqlAPIServiceArguments: any = {
      dreamID
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDreamQuery>response.data.getDream;
  }
  async ListDreams(userID: string): Promise<Array<ListDreamsQuery>> {
    const statement = `query ListDreams($userID: String!) {
        listDreams(userID: $userID) {
          __typename
          dreamID
          name
          description
          private
          userID
          upvotes
          created
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userID
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <Array<ListDreamsQuery>>response.data.listDreams;
  }
  async GetFriendship(userB: string): Promise<GetFriendshipQuery> {
    const statement = `query GetFriendship($userB: String!) {
        getFriendship(userB: $userB) {
          __typename
          userA
          userB
          created
          status
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userB
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFriendshipQuery>response.data.getFriendship;
  }
  async ListFriendships(): Promise<Array<ListFriendshipsQuery>> {
    const statement = `query ListFriendships {
        listFriendships {
          __typename
          userA
          userB
          created
          status
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListFriendshipsQuery>>response.data.listFriendships;
  }
  async GetGoal(goalID: number): Promise<GetGoalQuery> {
    const statement = `query GetGoal($goalID: Int!) {
        getGoal(goalID: $goalID) {
          __typename
          goalID
          name
          description
          dreamID
          finished
          created
        }
      }`;
    const gqlAPIServiceArguments: any = {
      goalID
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetGoalQuery>response.data.getGoal;
  }
  async ListGoals(): Promise<Array<ListGoalsQuery>> {
    const statement = `query ListGoals {
        listGoals {
          __typename
          goalID
          name
          description
          dreamID
          finished
          created
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListGoalsQuery>>response.data.listGoals;
  }
  async GetUpvote(dreamID: number): Promise<GetUpvoteQuery> {
    const statement = `query GetUpvote($dreamID: Int!) {
        getUpvote(dreamID: $dreamID) {
          __typename
          userID
          dreamID
        }
      }`;
    const gqlAPIServiceArguments: any = {
      dreamID
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUpvoteQuery>response.data.getUpvote;
  }
  async ListUpvotes(): Promise<Array<ListUpvotesQuery>> {
    const statement = `query ListUpvotes {
        listUpvotes {
          __typename
          userID
          dreamID
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListUpvotesQuery>>response.data.listUpvotes;
  }
  async GetUser(userID: string): Promise<GetUserQuery> {
    const statement = `query GetUser($userID: String!) {
        getUser(userID: $userID) {
          __typename
          userID
          name
          description
          jobTitle
          profilePictureURL
          created
        }
      }`;
    const gqlAPIServiceArguments: any = {
      userID
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(): Promise<Array<ListUsersQuery>> {
    const statement = `query ListUsers {
        listUsers {
          __typename
          userID
          name
          description
          jobTitle
          profilePictureURL
          created
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListUsersQuery>>response.data.listUsers;
  }
  async GetUserSetting(settingID: number): Promise<GetUserSettingQuery> {
    const statement = `query GetUserSetting($settingID: Int!) {
        getUserSetting(settingID: $settingID) {
          __typename
          settingID
          settingName
          settingValue
          userID
        }
      }`;
    const gqlAPIServiceArguments: any = {
      settingID
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserSettingQuery>response.data.getUserSetting;
  }
  async ListUserSettings(): Promise<Array<ListUserSettingsQuery>> {
    const statement = `query ListUserSettings {
        listUserSettings {
          __typename
          settingID
          settingName
          settingValue
          userID
        }
      }`;
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListUserSettingsQuery>>response.data.listUserSettings;
  }
  OnCreateDreamListener: Observable<OnCreateDreamSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateDream {
        onCreateDream {
          __typename
          dreamID
          name
          description
          private
          userID
          upvotes
          created
        }
      }`
    )
  ) as Observable<OnCreateDreamSubscription>;

  OnCreateFriendshipListener: Observable<
    OnCreateFriendshipSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateFriendship {
        onCreateFriendship {
          __typename
          userA
          userB
          created
          status
        }
      }`
    )
  ) as Observable<OnCreateFriendshipSubscription>;

  OnCreateGoalListener: Observable<OnCreateGoalSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateGoal {
        onCreateGoal {
          __typename
          goalID
          name
          description
          dreamID
          finished
          created
        }
      }`
    )
  ) as Observable<OnCreateGoalSubscription>;

  OnCreateUpvoteListener: Observable<OnCreateUpvoteSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUpvote {
        onCreateUpvote {
          __typename
          userID
          dreamID
        }
      }`
    )
  ) as Observable<OnCreateUpvoteSubscription>;

  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          userID
          name
          description
          jobTitle
          profilePictureURL
          created
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnCreateUserSettingListener: Observable<
    OnCreateUserSettingSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateUserSetting {
        onCreateUserSetting {
          __typename
          settingID
          settingName
          settingValue
          userID
        }
      }`
    )
  ) as Observable<OnCreateUserSettingSubscription>;
}
