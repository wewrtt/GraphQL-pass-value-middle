import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth2';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    //lập tài khoản và lấy thông tin này ở https://console.cloud.google.com/
    super({
      clientID:
        '191517729383-84puee90ikm2r2conopma2rd4h2fi2dm.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:5000/auth/google/callback',
      scope: ['email'],
    });
  }
  async validate(
    acccesToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { name, emails, photos } = profile;
    const user = {
      email: emails[0].value,
      firsName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      acccesToken,
    };
    done(null, user);
  }
}
