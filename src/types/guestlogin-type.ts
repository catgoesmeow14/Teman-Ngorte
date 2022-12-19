export interface LoginGuestResponseType {
  data: LoginGuestDetailResponseType;
  message: string;
}

export interface LoginGuestDetailResponseType {
  access_token: string;
  refresh_token: string;
  username_alias: string;
}
