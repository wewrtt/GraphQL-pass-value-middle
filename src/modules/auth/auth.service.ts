import { Injectable } from '@nestjs/common';
import { google, Auth } from 'googleapis';
@Injectable()
export class AuthService {
  oauthClient: Auth.OAuth2Client;
  constructor() {
    //sau để vào dto nhé
    const clientID =
      '191517729383-84puee90ikm2r2conopma2rd4h2fi2dm.apps.googleusercontent.com';
    const clientSecret = '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';
    this.oauthClient = new google.auth.OAuth2(clientID, clientSecret);
  }
  googleLogin(req: any) {
    if (!req.user) {
      return ' USER DO NOT EXIST ';
    }
    return {
      message: 'User Infor from Google',
      user: req.user,
    };
  }

  async authenticate(token: string) {
    const tokenInfo = await this.oauthClient.getTokenInfo(token);
    return tokenInfo;
  }
}
