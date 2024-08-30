import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CharacterService } from "./character.service";
import { CharacterControllerBase } from "./base/character.controller.base";

@swagger.ApiTags("characters")
@common.Controller("characters")
export class CharacterController extends CharacterControllerBase {
  constructor(protected readonly service: CharacterService) {
    super(service);
  }
}
