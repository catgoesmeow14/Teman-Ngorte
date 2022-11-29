import { UserType } from "./user-type";

export interface LoginGuestResponseType {
  data: LoginGuestDetailResponseType
  message: string;
}

export interface LoginGuestDetailResponseType {
  access_token: string
  username: string
  refresh_token: string
}