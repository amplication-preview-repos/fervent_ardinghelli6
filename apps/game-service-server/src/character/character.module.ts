import { Module } from "@nestjs/common";
import { CharacterModuleBase } from "./base/character.module.base";
import { CharacterService } from "./character.service";
import { CharacterController } from "./character.controller";
import { CharacterResolver } from "./character.resolver";

@Module({
  imports: [CharacterModuleBase],
  controllers: [CharacterController],
  providers: [CharacterService, CharacterResolver],
  exports: [CharacterService],
})
export class CharacterModule {}
