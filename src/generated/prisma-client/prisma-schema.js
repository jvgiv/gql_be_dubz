module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.5). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateReview {
  count: Int!
}

type AggregateSkills {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createReview(data: ReviewCreateInput!): Review!
  updateReview(data: ReviewUpdateInput!, where: ReviewWhereUniqueInput!): Review
  updateManyReviews(data: ReviewUpdateManyMutationInput!, where: ReviewWhereInput): BatchPayload!
  upsertReview(where: ReviewWhereUniqueInput!, create: ReviewCreateInput!, update: ReviewUpdateInput!): Review!
  deleteReview(where: ReviewWhereUniqueInput!): Review
  deleteManyReviews(where: ReviewWhereInput): BatchPayload!
  createSkills(data: SkillsCreateInput!): Skills!
  updateSkills(data: SkillsUpdateInput!, where: SkillsWhereUniqueInput!): Skills
  updateManySkillses(data: SkillsUpdateManyMutationInput!, where: SkillsWhereInput): BatchPayload!
  upsertSkills(where: SkillsWhereUniqueInput!, create: SkillsCreateInput!, update: SkillsUpdateInput!): Skills!
  deleteSkills(where: SkillsWhereUniqueInput!): Skills
  deleteManySkillses(where: SkillsWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  review(where: ReviewWhereUniqueInput!): Review
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review]!
  reviewsConnection(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ReviewConnection!
  skills(where: SkillsWhereUniqueInput!): Skills
  skillses(where: SkillsWhereInput, orderBy: SkillsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Skills]!
  skillsesConnection(where: SkillsWhereInput, orderBy: SkillsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SkillsConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Review {
  id: ID!
  skills_id: Skills!
  reviewer_name: String!
  reviewer_id: Float!
  rating: Float!
  createdAt: DateTime!
}

type ReviewConnection {
  pageInfo: PageInfo!
  edges: [ReviewEdge]!
  aggregate: AggregateReview!
}

input ReviewCreateInput {
  id: ID
  skills_id: SkillsCreateOneWithoutReviewsInput!
  reviewer_name: String!
  reviewer_id: Float!
  rating: Float!
}

input ReviewCreateManyWithoutSkills_idInput {
  create: [ReviewCreateWithoutSkills_idInput!]
  connect: [ReviewWhereUniqueInput!]
}

input ReviewCreateWithoutSkills_idInput {
  id: ID
  reviewer_name: String!
  reviewer_id: Float!
  rating: Float!
}

type ReviewEdge {
  node: Review!
  cursor: String!
}

enum ReviewOrderByInput {
  id_ASC
  id_DESC
  reviewer_name_ASC
  reviewer_name_DESC
  reviewer_id_ASC
  reviewer_id_DESC
  rating_ASC
  rating_DESC
  createdAt_ASC
  createdAt_DESC
}

type ReviewPreviousValues {
  id: ID!
  reviewer_name: String!
  reviewer_id: Float!
  rating: Float!
  createdAt: DateTime!
}

input ReviewScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  reviewer_name: String
  reviewer_name_not: String
  reviewer_name_in: [String!]
  reviewer_name_not_in: [String!]
  reviewer_name_lt: String
  reviewer_name_lte: String
  reviewer_name_gt: String
  reviewer_name_gte: String
  reviewer_name_contains: String
  reviewer_name_not_contains: String
  reviewer_name_starts_with: String
  reviewer_name_not_starts_with: String
  reviewer_name_ends_with: String
  reviewer_name_not_ends_with: String
  reviewer_id: Float
  reviewer_id_not: Float
  reviewer_id_in: [Float!]
  reviewer_id_not_in: [Float!]
  reviewer_id_lt: Float
  reviewer_id_lte: Float
  reviewer_id_gt: Float
  reviewer_id_gte: Float
  rating: Float
  rating_not: Float
  rating_in: [Float!]
  rating_not_in: [Float!]
  rating_lt: Float
  rating_lte: Float
  rating_gt: Float
  rating_gte: Float
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [ReviewScalarWhereInput!]
  OR: [ReviewScalarWhereInput!]
  NOT: [ReviewScalarWhereInput!]
}

type ReviewSubscriptionPayload {
  mutation: MutationType!
  node: Review
  updatedFields: [String!]
  previousValues: ReviewPreviousValues
}

input ReviewSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ReviewWhereInput
  AND: [ReviewSubscriptionWhereInput!]
  OR: [ReviewSubscriptionWhereInput!]
  NOT: [ReviewSubscriptionWhereInput!]
}

input ReviewUpdateInput {
  skills_id: SkillsUpdateOneRequiredWithoutReviewsInput
  reviewer_name: String
  reviewer_id: Float
  rating: Float
}

input ReviewUpdateManyDataInput {
  reviewer_name: String
  reviewer_id: Float
  rating: Float
}

input ReviewUpdateManyMutationInput {
  reviewer_name: String
  reviewer_id: Float
  rating: Float
}

input ReviewUpdateManyWithoutSkills_idInput {
  create: [ReviewCreateWithoutSkills_idInput!]
  delete: [ReviewWhereUniqueInput!]
  connect: [ReviewWhereUniqueInput!]
  set: [ReviewWhereUniqueInput!]
  disconnect: [ReviewWhereUniqueInput!]
  update: [ReviewUpdateWithWhereUniqueWithoutSkills_idInput!]
  upsert: [ReviewUpsertWithWhereUniqueWithoutSkills_idInput!]
  deleteMany: [ReviewScalarWhereInput!]
  updateMany: [ReviewUpdateManyWithWhereNestedInput!]
}

input ReviewUpdateManyWithWhereNestedInput {
  where: ReviewScalarWhereInput!
  data: ReviewUpdateManyDataInput!
}

input ReviewUpdateWithoutSkills_idDataInput {
  reviewer_name: String
  reviewer_id: Float
  rating: Float
}

input ReviewUpdateWithWhereUniqueWithoutSkills_idInput {
  where: ReviewWhereUniqueInput!
  data: ReviewUpdateWithoutSkills_idDataInput!
}

input ReviewUpsertWithWhereUniqueWithoutSkills_idInput {
  where: ReviewWhereUniqueInput!
  update: ReviewUpdateWithoutSkills_idDataInput!
  create: ReviewCreateWithoutSkills_idInput!
}

input ReviewWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  skills_id: SkillsWhereInput
  reviewer_name: String
  reviewer_name_not: String
  reviewer_name_in: [String!]
  reviewer_name_not_in: [String!]
  reviewer_name_lt: String
  reviewer_name_lte: String
  reviewer_name_gt: String
  reviewer_name_gte: String
  reviewer_name_contains: String
  reviewer_name_not_contains: String
  reviewer_name_starts_with: String
  reviewer_name_not_starts_with: String
  reviewer_name_ends_with: String
  reviewer_name_not_ends_with: String
  reviewer_id: Float
  reviewer_id_not: Float
  reviewer_id_in: [Float!]
  reviewer_id_not_in: [Float!]
  reviewer_id_lt: Float
  reviewer_id_lte: Float
  reviewer_id_gt: Float
  reviewer_id_gte: Float
  rating: Float
  rating_not: Float
  rating_in: [Float!]
  rating_not_in: [Float!]
  rating_lt: Float
  rating_lte: Float
  rating_gt: Float
  rating_gte: Float
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [ReviewWhereInput!]
  OR: [ReviewWhereInput!]
  NOT: [ReviewWhereInput!]
}

input ReviewWhereUniqueInput {
  id: ID
}

type Skills {
  id: ID!
  user: User!
  skill: String!
  description: String!
  years_experience: Float!
  hourly_rate: Float!
  reviews(where: ReviewWhereInput, orderBy: ReviewOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Review!]
}

type SkillsConnection {
  pageInfo: PageInfo!
  edges: [SkillsEdge]!
  aggregate: AggregateSkills!
}

input SkillsCreateInput {
  id: ID
  user: UserCreateOneWithoutSkillsInput!
  skill: String!
  description: String!
  years_experience: Float!
  hourly_rate: Float!
  reviews: ReviewCreateManyWithoutSkills_idInput
}

input SkillsCreateManyWithoutUserInput {
  create: [SkillsCreateWithoutUserInput!]
  connect: [SkillsWhereUniqueInput!]
}

input SkillsCreateOneWithoutReviewsInput {
  create: SkillsCreateWithoutReviewsInput
  connect: SkillsWhereUniqueInput
}

input SkillsCreateWithoutReviewsInput {
  id: ID
  user: UserCreateOneWithoutSkillsInput!
  skill: String!
  description: String!
  years_experience: Float!
  hourly_rate: Float!
}

input SkillsCreateWithoutUserInput {
  id: ID
  skill: String!
  description: String!
  years_experience: Float!
  hourly_rate: Float!
  reviews: ReviewCreateManyWithoutSkills_idInput
}

type SkillsEdge {
  node: Skills!
  cursor: String!
}

enum SkillsOrderByInput {
  id_ASC
  id_DESC
  skill_ASC
  skill_DESC
  description_ASC
  description_DESC
  years_experience_ASC
  years_experience_DESC
  hourly_rate_ASC
  hourly_rate_DESC
}

type SkillsPreviousValues {
  id: ID!
  skill: String!
  description: String!
  years_experience: Float!
  hourly_rate: Float!
}

input SkillsScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  skill: String
  skill_not: String
  skill_in: [String!]
  skill_not_in: [String!]
  skill_lt: String
  skill_lte: String
  skill_gt: String
  skill_gte: String
  skill_contains: String
  skill_not_contains: String
  skill_starts_with: String
  skill_not_starts_with: String
  skill_ends_with: String
  skill_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  years_experience: Float
  years_experience_not: Float
  years_experience_in: [Float!]
  years_experience_not_in: [Float!]
  years_experience_lt: Float
  years_experience_lte: Float
  years_experience_gt: Float
  years_experience_gte: Float
  hourly_rate: Float
  hourly_rate_not: Float
  hourly_rate_in: [Float!]
  hourly_rate_not_in: [Float!]
  hourly_rate_lt: Float
  hourly_rate_lte: Float
  hourly_rate_gt: Float
  hourly_rate_gte: Float
  AND: [SkillsScalarWhereInput!]
  OR: [SkillsScalarWhereInput!]
  NOT: [SkillsScalarWhereInput!]
}

type SkillsSubscriptionPayload {
  mutation: MutationType!
  node: Skills
  updatedFields: [String!]
  previousValues: SkillsPreviousValues
}

input SkillsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SkillsWhereInput
  AND: [SkillsSubscriptionWhereInput!]
  OR: [SkillsSubscriptionWhereInput!]
  NOT: [SkillsSubscriptionWhereInput!]
}

input SkillsUpdateInput {
  user: UserUpdateOneRequiredWithoutSkillsInput
  skill: String
  description: String
  years_experience: Float
  hourly_rate: Float
  reviews: ReviewUpdateManyWithoutSkills_idInput
}

input SkillsUpdateManyDataInput {
  skill: String
  description: String
  years_experience: Float
  hourly_rate: Float
}

input SkillsUpdateManyMutationInput {
  skill: String
  description: String
  years_experience: Float
  hourly_rate: Float
}

input SkillsUpdateManyWithoutUserInput {
  create: [SkillsCreateWithoutUserInput!]
  delete: [SkillsWhereUniqueInput!]
  connect: [SkillsWhereUniqueInput!]
  set: [SkillsWhereUniqueInput!]
  disconnect: [SkillsWhereUniqueInput!]
  update: [SkillsUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [SkillsUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [SkillsScalarWhereInput!]
  updateMany: [SkillsUpdateManyWithWhereNestedInput!]
}

input SkillsUpdateManyWithWhereNestedInput {
  where: SkillsScalarWhereInput!
  data: SkillsUpdateManyDataInput!
}

input SkillsUpdateOneRequiredWithoutReviewsInput {
  create: SkillsCreateWithoutReviewsInput
  update: SkillsUpdateWithoutReviewsDataInput
  upsert: SkillsUpsertWithoutReviewsInput
  connect: SkillsWhereUniqueInput
}

input SkillsUpdateWithoutReviewsDataInput {
  user: UserUpdateOneRequiredWithoutSkillsInput
  skill: String
  description: String
  years_experience: Float
  hourly_rate: Float
}

input SkillsUpdateWithoutUserDataInput {
  skill: String
  description: String
  years_experience: Float
  hourly_rate: Float
  reviews: ReviewUpdateManyWithoutSkills_idInput
}

input SkillsUpdateWithWhereUniqueWithoutUserInput {
  where: SkillsWhereUniqueInput!
  data: SkillsUpdateWithoutUserDataInput!
}

input SkillsUpsertWithoutReviewsInput {
  update: SkillsUpdateWithoutReviewsDataInput!
  create: SkillsCreateWithoutReviewsInput!
}

input SkillsUpsertWithWhereUniqueWithoutUserInput {
  where: SkillsWhereUniqueInput!
  update: SkillsUpdateWithoutUserDataInput!
  create: SkillsCreateWithoutUserInput!
}

input SkillsWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  skill: String
  skill_not: String
  skill_in: [String!]
  skill_not_in: [String!]
  skill_lt: String
  skill_lte: String
  skill_gt: String
  skill_gte: String
  skill_contains: String
  skill_not_contains: String
  skill_starts_with: String
  skill_not_starts_with: String
  skill_ends_with: String
  skill_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  years_experience: Float
  years_experience_not: Float
  years_experience_in: [Float!]
  years_experience_not_in: [Float!]
  years_experience_lt: Float
  years_experience_lte: Float
  years_experience_gt: Float
  years_experience_gte: Float
  hourly_rate: Float
  hourly_rate_not: Float
  hourly_rate_in: [Float!]
  hourly_rate_not_in: [Float!]
  hourly_rate_lt: Float
  hourly_rate_lte: Float
  hourly_rate_gt: Float
  hourly_rate_gte: Float
  reviews_every: ReviewWhereInput
  reviews_some: ReviewWhereInput
  reviews_none: ReviewWhereInput
  AND: [SkillsWhereInput!]
  OR: [SkillsWhereInput!]
  NOT: [SkillsWhereInput!]
}

input SkillsWhereUniqueInput {
  id: ID
}

type Subscription {
  review(where: ReviewSubscriptionWhereInput): ReviewSubscriptionPayload
  skills(where: SkillsSubscriptionWhereInput): SkillsSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  createdAt: DateTime!
  email: String!
  first_name: String!
  last_name: String!
  user_type: String!
  latitude: Float!
  longitude: Float!
  facebook_id: Float!
  google_id: Float!
  earnings: Float!
  skills(where: SkillsWhereInput, orderBy: SkillsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Skills!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  first_name: String!
  last_name: String!
  user_type: String!
  latitude: Float!
  longitude: Float!
  facebook_id: Float!
  google_id: Float!
  earnings: Float!
  skills: SkillsCreateManyWithoutUserInput
}

input UserCreateOneWithoutSkillsInput {
  create: UserCreateWithoutSkillsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutSkillsInput {
  id: ID
  email: String!
  first_name: String!
  last_name: String!
  user_type: String!
  latitude: Float!
  longitude: Float!
  facebook_id: Float!
  google_id: Float!
  earnings: Float!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  email_ASC
  email_DESC
  first_name_ASC
  first_name_DESC
  last_name_ASC
  last_name_DESC
  user_type_ASC
  user_type_DESC
  latitude_ASC
  latitude_DESC
  longitude_ASC
  longitude_DESC
  facebook_id_ASC
  facebook_id_DESC
  google_id_ASC
  google_id_DESC
  earnings_ASC
  earnings_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  email: String!
  first_name: String!
  last_name: String!
  user_type: String!
  latitude: Float!
  longitude: Float!
  facebook_id: Float!
  google_id: Float!
  earnings: Float!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  first_name: String
  last_name: String
  user_type: String
  latitude: Float
  longitude: Float
  facebook_id: Float
  google_id: Float
  earnings: Float
  skills: SkillsUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  email: String
  first_name: String
  last_name: String
  user_type: String
  latitude: Float
  longitude: Float
  facebook_id: Float
  google_id: Float
  earnings: Float
}

input UserUpdateOneRequiredWithoutSkillsInput {
  create: UserCreateWithoutSkillsInput
  update: UserUpdateWithoutSkillsDataInput
  upsert: UserUpsertWithoutSkillsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutSkillsDataInput {
  email: String
  first_name: String
  last_name: String
  user_type: String
  latitude: Float
  longitude: Float
  facebook_id: Float
  google_id: Float
  earnings: Float
}

input UserUpsertWithoutSkillsInput {
  update: UserUpdateWithoutSkillsDataInput!
  create: UserCreateWithoutSkillsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  first_name: String
  first_name_not: String
  first_name_in: [String!]
  first_name_not_in: [String!]
  first_name_lt: String
  first_name_lte: String
  first_name_gt: String
  first_name_gte: String
  first_name_contains: String
  first_name_not_contains: String
  first_name_starts_with: String
  first_name_not_starts_with: String
  first_name_ends_with: String
  first_name_not_ends_with: String
  last_name: String
  last_name_not: String
  last_name_in: [String!]
  last_name_not_in: [String!]
  last_name_lt: String
  last_name_lte: String
  last_name_gt: String
  last_name_gte: String
  last_name_contains: String
  last_name_not_contains: String
  last_name_starts_with: String
  last_name_not_starts_with: String
  last_name_ends_with: String
  last_name_not_ends_with: String
  user_type: String
  user_type_not: String
  user_type_in: [String!]
  user_type_not_in: [String!]
  user_type_lt: String
  user_type_lte: String
  user_type_gt: String
  user_type_gte: String
  user_type_contains: String
  user_type_not_contains: String
  user_type_starts_with: String
  user_type_not_starts_with: String
  user_type_ends_with: String
  user_type_not_ends_with: String
  latitude: Float
  latitude_not: Float
  latitude_in: [Float!]
  latitude_not_in: [Float!]
  latitude_lt: Float
  latitude_lte: Float
  latitude_gt: Float
  latitude_gte: Float
  longitude: Float
  longitude_not: Float
  longitude_in: [Float!]
  longitude_not_in: [Float!]
  longitude_lt: Float
  longitude_lte: Float
  longitude_gt: Float
  longitude_gte: Float
  facebook_id: Float
  facebook_id_not: Float
  facebook_id_in: [Float!]
  facebook_id_not_in: [Float!]
  facebook_id_lt: Float
  facebook_id_lte: Float
  facebook_id_gt: Float
  facebook_id_gte: Float
  google_id: Float
  google_id_not: Float
  google_id_in: [Float!]
  google_id_not_in: [Float!]
  google_id_lt: Float
  google_id_lte: Float
  google_id_gt: Float
  google_id_gte: Float
  earnings: Float
  earnings_not: Float
  earnings_in: [Float!]
  earnings_not_in: [Float!]
  earnings_lt: Float
  earnings_lte: Float
  earnings_gt: Float
  earnings_gte: Float
  skills_every: SkillsWhereInput
  skills_some: SkillsWhereInput
  skills_none: SkillsWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    