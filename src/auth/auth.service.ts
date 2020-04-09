import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './../main/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    return await bcrypt.compare(pass, user.password).then(function (isMatch) {
      if (isMatch) {
        const { password, ...result } = user;
        return result;
      } else {
        return null;
      }
    });
  }

  async login(user: any) {
    return this.validateUser(user.email, user.password).then(result => {
      if (result === undefined || result === null) {
        throw new UnauthorizedException();
      }
      const payload = { _id: user._id, email: user.email, date: new Date() };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }).catch(() => {
      throw new UnauthorizedException();
    });
  }
}