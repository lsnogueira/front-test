export interface UserSession {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expires_in: number;
  errors: string[];
}
