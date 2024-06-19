import * as graphql from "@nestjs/graphql";
import { LoginDto } from "../auth/LoginDto";
import { SignupDto } from "../auth/SignupDto";
import { AuthService } from "./auth.service";

export class AuthResolver {
  constructor(protected readonly service: AuthService) {}

  @graphql.Mutation(() => String)
  async Login(
    @graphql.Args()
    args: LoginDto
  ): Promise<string> {
    return this.service.Login(args);
  }

  @graphql.Mutation(() => SignupDto)
  async Signup(
    @graphql.Args()
    args: SignupDto
  ): Promise<SignupDto> {
    return this.service.Signup(args);
  }
}
