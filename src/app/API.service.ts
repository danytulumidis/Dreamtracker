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
  private: number;
  userID: number;
  upvotes?: number | null;
  created: number;
};

export type UpdateDreamInput = {
  dreamID: number;
  name?: string | null;
  description?: string | null;
  private?: number | null;
  userID?: number | null;
  upvotes?: number | null;
  created?: number | null;
};

export type CreateFriendshipInput = {
  userA: number;
  userB: number;
  created: number;
  status: string;
};

export type UpdateFriendshipInput = {
  userA: number;
  userB: number;
  created?: number | null;
  status?: string | null;
};

export type CreateGoalInput = {
  goalID: number;
  name: string;
  description: string;
  dreamID: number;
  finished: number;
  created: number;
};

export type UpdateGoalInput = {
  goalID: number;
  name?: string | null;
  description?: string | null;
  dreamID?: number | null;
  finished?: number | null;
  created?: number | null;
};

export type CreateUserInput = {
  userID: number;
  name: string;
  description: string;
  jobTitle?: string | null;
  profilePictureURL?: string | null;
  created: number;
};

export type UpdateUserInput = {
  userID: number;
  name?: string | null;
  description?: string | null;
  jobTitle?: string | null;
  profilePictureURL?: string | null;
  created?: number | null;
};

export type CreateUserSettingInput = {
  settingID: number;
  settingName: string;
  settingValue: string;
  userID: number;
};

export type UpdateUserSettingInput = {
  settingID: number;
  settingName?: string | null;
  settingValue?: string | null;
  userID?: number | null;
};

export type CreateBlogInput = {
  id?: string | null;
  name: string;
};

export type ModelBlogConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelBlogConditionInput | null> | null;
  or?: Array<ModelBlogConditionInput | null> | null;
  not?: ModelBlogConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateBlogInput = {
  id: string;
  name?: string | null;
};

export type DeleteBlogInput = {
  id?: string | null;
};

export type CreatePostInput = {
  id?: string | null;
  title: string;
  postBlogId?: string | null;
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null;
  and?: Array<ModelPostConditionInput | null> | null;
  or?: Array<ModelPostConditionInput | null> | null;
  not?: ModelPostConditionInput | null;
};

export type UpdatePostInput = {
  id: string;
  title?: string | null;
  postBlogId?: string | null;
};

export type DeletePostInput = {
  id?: string | null;
};

export type CreateCommentInput = {
  id?: string | null;
  content?: string | null;
  commentPostId?: string | null;
};

export type ModelCommentConditionInput = {
  content?: ModelStringInput | null;
  and?: Array<ModelCommentConditionInput | null> | null;
  or?: Array<ModelCommentConditionInput | null> | null;
  not?: ModelCommentConditionInput | null;
};

export type UpdateCommentInput = {
  id: string;
  content?: string | null;
  commentPostId?: string | null;
};

export type DeleteCommentInput = {
  id?: string | null;
};

export type ModelBlogFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelBlogFilterInput | null> | null;
  or?: Array<ModelBlogFilterInput | null> | null;
  not?: ModelBlogFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  and?: Array<ModelPostFilterInput | null> | null;
  or?: Array<ModelPostFilterInput | null> | null;
  not?: ModelPostFilterInput | null;
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelCommentFilterInput | null> | null;
  or?: Array<ModelCommentFilterInput | null> | null;
  not?: ModelCommentFilterInput | null;
};

export type DeleteDreamMutation = {
  __typename: "Dream";
  dreamID: number;
  name: string;
  description: string;
  private: number;
  userID: number;
  upvotes: number | null;
  created: number;
};

export type CreateDreamMutation = {
  __typename: "Dream";
  dreamID: number;
  name: string;
  description: string;
  private: number;
  userID: number;
  upvotes: number | null;
  created: number;
};

export type UpdateDreamMutation = {
  __typename: "Dream";
  dreamID: number;
  name: string;
  description: string;
  private: number;
  userID: number;
  upvotes: number | null;
  created: number;
};

export type DeleteFriendshipMutation = {
  __typename: "Friendship";
  userA: number;
  userB: number;
  created: number;
  status: string;
};

export type CreateFriendshipMutation = {
  __typename: "Friendship";
  userA: number;
  userB: number;
  created: number;
  status: string;
};

export type UpdateFriendshipMutation = {
  __typename: "Friendship";
  userA: number;
  userB: number;
  created: number;
  status: string;
};

export type DeleteGoalMutation = {
  __typename: "Goal";
  goalID: number;
  name: string;
  description: string;
  dreamID: number;
  finished: number;
  created: number;
};

export type CreateGoalMutation = {
  __typename: "Goal";
  goalID: number;
  name: string;
  description: string;
  dreamID: number;
  finished: number;
  created: number;
};

export type UpdateGoalMutation = {
  __typename: "Goal";
  goalID: number;
  name: string;
  description: string;
  dreamID: number;
  finished: number;
  created: number;
};

export type DeleteUserMutation = {
  __typename: "User";
  userID: number;
  name: string;
  description: string;
  jobTitle: string | null;
  profilePictureURL: string | null;
  created: number;
};

export type CreateUserMutation = {
  __typename: "User";
  userID: number;
  name: string;
  description: string;
  jobTitle: string | null;
  profilePictureURL: string | null;
  created: number;
};

export type UpdateUserMutation = {
  __typename: "User";
  userID: number;
  name: string;
  description: string;
  jobTitle: string | null;
  profilePictureURL: string | null;
  created: number;
};

export type DeleteUserSettingMutation = {
  __typename: "UserSetting";
  settingID: number;
  settingName: string;
  settingValue: string;
  userID: number;
};

export type CreateUserSettingMutation = {
  __typename: "UserSetting";
  settingID: number;
  settingName: string;
  settingValue: string;
  userID: number;
};

export type UpdateUserSettingMutation = {
  __typename: "UserSetting";
  settingID: number;
  settingName: string;
  settingValue: string;
  userID: number;
};

export type CreateBlogMutation = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdateBlogMutation = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeleteBlogMutation = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type UpdatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type DeletePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type CreateCommentMutation = {
  __typename: "Comment";
  id: string;
  content: string | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type UpdateCommentMutation = {
  __typename: "Comment";
  id: string;
  content: string | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type DeleteCommentMutation = {
  __typename: "Comment";
  id: string;
  content: string | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type GetDreamQuery = {
  __typename: "Dream";
  dreamID: number;
  name: string;
  description: string;
  private: number;
  userID: number;
  upvotes: number | null;
  created: number;
};

export type ListDreamsQuery = {
  __typename: "Dream";
  dreamID: number;
  name: string;
  description: string;
  private: number;
  userID: number;
  upvotes: number | null;
  created: number;
};

export type GetFriendshipQuery = {
  __typename: "Friendship";
  userA: number;
  userB: number;
  created: number;
  status: string;
};

export type ListFriendshipsQuery = {
  __typename: "Friendship";
  userA: number;
  userB: number;
  created: number;
  status: string;
};

export type GetGoalQuery = {
  __typename: "Goal";
  goalID: number;
  name: string;
  description: string;
  dreamID: number;
  finished: number;
  created: number;
};

export type ListGoalsQuery = {
  __typename: "Goal";
  goalID: number;
  name: string;
  description: string;
  dreamID: number;
  finished: number;
  created: number;
};

export type GetUserQuery = {
  __typename: "User";
  userID: number;
  name: string;
  description: string;
  jobTitle: string | null;
  profilePictureURL: string | null;
  created: number;
};

export type ListUsersQuery = {
  __typename: "User";
  userID: number;
  name: string;
  description: string;
  jobTitle: string | null;
  profilePictureURL: string | null;
  created: number;
};

export type GetUserSettingQuery = {
  __typename: "UserSetting";
  settingID: number;
  settingName: string;
  settingValue: string;
  userID: number;
};

export type ListUserSettingsQuery = {
  __typename: "UserSetting";
  settingID: number;
  settingName: string;
  settingValue: string;
  userID: number;
};

export type GetBlogQuery = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListBlogsQuery = {
  __typename: "ModelBlogConnection";
  items: Array<{
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetPostQuery = {
  __typename: "Post";
  id: string;
  title: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type ListPostsQuery = {
  __typename: "ModelPostConnection";
  items: Array<{
    __typename: "Post";
    id: string;
    title: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetCommentQuery = {
  __typename: "Comment";
  id: string;
  content: string | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type ListCommentsQuery = {
  __typename: "ModelCommentConnection";
  items: Array<{
    __typename: "Comment";
    id: string;
    content: string | null;
    post: {
      __typename: "Post";
      id: string;
      title: string;
    } | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateDreamSubscription = {
  __typename: "Dream";
  dreamID: number;
  name: string;
  description: string;
  private: number;
  userID: number;
  upvotes: number | null;
  created: number;
};

export type OnCreateFriendshipSubscription = {
  __typename: "Friendship";
  userA: number;
  userB: number;
  created: number;
  status: string;
};

export type OnCreateGoalSubscription = {
  __typename: "Goal";
  goalID: number;
  name: string;
  description: string;
  dreamID: number;
  finished: number;
  created: number;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  userID: number;
  name: string;
  description: string;
  jobTitle: string | null;
  profilePictureURL: string | null;
  created: number;
};

export type OnCreateUserSettingSubscription = {
  __typename: "UserSetting";
  settingID: number;
  settingName: string;
  settingValue: string;
  userID: number;
};

export type OnCreateBlogSubscription = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdateBlogSubscription = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeleteBlogSubscription = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnUpdatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnDeletePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      nextToken: string | null;
    } | null;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      content: string | null;
    } | null> | null;
    nextToken: string | null;
  } | null;
};

export type OnCreateCommentSubscription = {
  __typename: "Comment";
  id: string;
  content: string | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnUpdateCommentSubscription = {
  __typename: "Comment";
  id: string;
  content: string | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
  } | null;
};

export type OnDeleteCommentSubscription = {
  __typename: "Comment";
  id: string;
  content: string | null;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      nextToken: string | null;
    } | null;
  } | null;
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
  async DeleteFriendship(userB: number): Promise<DeleteFriendshipMutation> {
    const statement = `mutation DeleteFriendship($userB: Int!) {
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
  async DeleteUser(userID: number): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($userID: Int!) {
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
  async CreateBlog(
    input: CreateBlogInput,
    condition?: ModelBlogConditionInput
  ): Promise<CreateBlogMutation> {
    const statement = `mutation CreateBlog($input: CreateBlogInput!, $condition: ModelBlogConditionInput) {
        createBlog(input: $input, condition: $condition) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBlogMutation>response.data.createBlog;
  }
  async UpdateBlog(
    input: UpdateBlogInput,
    condition?: ModelBlogConditionInput
  ): Promise<UpdateBlogMutation> {
    const statement = `mutation UpdateBlog($input: UpdateBlogInput!, $condition: ModelBlogConditionInput) {
        updateBlog(input: $input, condition: $condition) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBlogMutation>response.data.updateBlog;
  }
  async DeleteBlog(
    input: DeleteBlogInput,
    condition?: ModelBlogConditionInput
  ): Promise<DeleteBlogMutation> {
    const statement = `mutation DeleteBlog($input: DeleteBlogInput!, $condition: ModelBlogConditionInput) {
        deleteBlog(input: $input, condition: $condition) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBlogMutation>response.data.deleteBlog;
  }
  async CreatePost(
    input: CreatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<CreatePostMutation> {
    const statement = `mutation CreatePost($input: CreatePostInput!, $condition: ModelPostConditionInput) {
        createPost(input: $input, condition: $condition) {
          __typename
          id
          title
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              content
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePostMutation>response.data.createPost;
  }
  async UpdatePost(
    input: UpdatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<UpdatePostMutation> {
    const statement = `mutation UpdatePost($input: UpdatePostInput!, $condition: ModelPostConditionInput) {
        updatePost(input: $input, condition: $condition) {
          __typename
          id
          title
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              content
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePostMutation>response.data.updatePost;
  }
  async DeletePost(
    input: DeletePostInput,
    condition?: ModelPostConditionInput
  ): Promise<DeletePostMutation> {
    const statement = `mutation DeletePost($input: DeletePostInput!, $condition: ModelPostConditionInput) {
        deletePost(input: $input, condition: $condition) {
          __typename
          id
          title
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              content
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePostMutation>response.data.deletePost;
  }
  async CreateComment(
    input: CreateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<CreateCommentMutation> {
    const statement = `mutation CreateComment($input: CreateCommentInput!, $condition: ModelCommentConditionInput) {
        createComment(input: $input, condition: $condition) {
          __typename
          id
          content
          post {
            __typename
            id
            title
            blog {
              __typename
              id
              name
            }
            comments {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommentMutation>response.data.createComment;
  }
  async UpdateComment(
    input: UpdateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<UpdateCommentMutation> {
    const statement = `mutation UpdateComment($input: UpdateCommentInput!, $condition: ModelCommentConditionInput) {
        updateComment(input: $input, condition: $condition) {
          __typename
          id
          content
          post {
            __typename
            id
            title
            blog {
              __typename
              id
              name
            }
            comments {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommentMutation>response.data.updateComment;
  }
  async DeleteComment(
    input: DeleteCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<DeleteCommentMutation> {
    const statement = `mutation DeleteComment($input: DeleteCommentInput!, $condition: ModelCommentConditionInput) {
        deleteComment(input: $input, condition: $condition) {
          __typename
          id
          content
          post {
            __typename
            id
            title
            blog {
              __typename
              id
              name
            }
            comments {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommentMutation>response.data.deleteComment;
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
  async ListDreams(): Promise<Array<ListDreamsQuery>> {
    const statement = `query ListDreams {
        listDreams {
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
    const response = (await API.graphql(graphqlOperation(statement))) as any;
    return <Array<ListDreamsQuery>>response.data.listDreams;
  }
  async GetFriendship(userB: number): Promise<GetFriendshipQuery> {
    const statement = `query GetFriendship($userB: Int!) {
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
  async GetUser(userID: number): Promise<GetUserQuery> {
    const statement = `query GetUser($userID: Int!) {
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
  async GetBlog(id: string): Promise<GetBlogQuery> {
    const statement = `query GetBlog($id: ID!) {
        getBlog(id: $id) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBlogQuery>response.data.getBlog;
  }
  async ListBlogs(
    filter?: ModelBlogFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBlogsQuery> {
    const statement = `query ListBlogs($filter: ModelBlogFilterInput, $limit: Int, $nextToken: String) {
        listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBlogsQuery>response.data.listBlogs;
  }
  async GetPost(id: string): Promise<GetPostQuery> {
    const statement = `query GetPost($id: ID!) {
        getPost(id: $id) {
          __typename
          id
          title
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              content
            }
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPostQuery>response.data.getPost;
  }
  async ListPosts(
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostsQuery> {
    const statement = `query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            blog {
              __typename
              id
              name
            }
            comments {
              __typename
              nextToken
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPostsQuery>response.data.listPosts;
  }
  async GetComment(id: string): Promise<GetCommentQuery> {
    const statement = `query GetComment($id: ID!) {
        getComment(id: $id) {
          __typename
          id
          content
          post {
            __typename
            id
            title
            blog {
              __typename
              id
              name
            }
            comments {
              __typename
              nextToken
            }
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommentQuery>response.data.getComment;
  }
  async ListComments(
    filter?: ModelCommentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommentsQuery> {
    const statement = `query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
        listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            content
            post {
              __typename
              id
              title
            }
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommentsQuery>response.data.listComments;
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

  OnCreateBlogListener: Observable<OnCreateBlogSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateBlog {
        onCreateBlog {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreateBlogSubscription>;

  OnUpdateBlogListener: Observable<OnUpdateBlogSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBlog {
        onUpdateBlog {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdateBlogSubscription>;

  OnDeleteBlogListener: Observable<OnDeleteBlogSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBlog {
        onDeleteBlog {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeleteBlogSubscription>;

  OnCreatePostListener: Observable<OnCreatePostSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreatePost {
        onCreatePost {
          __typename
          id
          title
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              content
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnCreatePostSubscription>;

  OnUpdatePostListener: Observable<OnUpdatePostSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePost {
        onUpdatePost {
          __typename
          id
          title
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              content
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnUpdatePostSubscription>;

  OnDeletePostListener: Observable<OnDeletePostSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeletePost {
        onDeletePost {
          __typename
          id
          title
          blog {
            __typename
            id
            name
            posts {
              __typename
              nextToken
            }
          }
          comments {
            __typename
            items {
              __typename
              id
              content
            }
            nextToken
          }
        }
      }`
    )
  ) as Observable<OnDeletePostSubscription>;

  OnCreateCommentListener: Observable<
    OnCreateCommentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateComment {
        onCreateComment {
          __typename
          id
          content
          post {
            __typename
            id
            title
            blog {
              __typename
              id
              name
            }
            comments {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnCreateCommentSubscription>;

  OnUpdateCommentListener: Observable<
    OnUpdateCommentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateComment {
        onUpdateComment {
          __typename
          id
          content
          post {
            __typename
            id
            title
            blog {
              __typename
              id
              name
            }
            comments {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnUpdateCommentSubscription>;

  OnDeleteCommentListener: Observable<
    OnDeleteCommentSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteComment {
        onDeleteComment {
          __typename
          id
          content
          post {
            __typename
            id
            title
            blog {
              __typename
              id
              name
            }
            comments {
              __typename
              nextToken
            }
          }
        }
      }`
    )
  ) as Observable<OnDeleteCommentSubscription>;
}
