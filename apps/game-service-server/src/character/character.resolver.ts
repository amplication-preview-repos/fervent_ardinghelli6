import * as graphql from "@nestjs/graphql";
import { CharacterResolverBase } from "./base/character.resolver.base";
import { Character } from "./base/Character";
import { CharacterService } from "./character.service";

@graphql.Resolver(() => Character)
export class CharacterResolver extends CharacterResolverBase {
  constructor(protected readonly service: CharacterService) {
    super(service);
  }
}
