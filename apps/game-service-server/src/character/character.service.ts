import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CharacterServiceBase } from "./base/character.service.base";

@Injectable()
export class CharacterService extends CharacterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
