import { UserType } from "./user-type";

export interface LoginResponseType {
  data: LoginDetailResponseType
  message: string;
}

export interface LoginDetailResponseType {
  access_token: string
  data: UserType
  refresh_token: string
}