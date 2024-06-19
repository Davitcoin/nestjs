import { Injectable } from "@nestjs/common";
import { LoginDto } from "../auth/LoginDto";
import { SignupDto } from "../auth/SignupDto";

@Injectable()
export class AuthService {
  constructor() {}
  async Login(args: LoginDto): Promise<string> {
    throw new Error("Not implemented");
  }
  async Signup(args: SignupDto): Promise<SignupDto> {
    throw new Error("Not implemented");
  }
}
