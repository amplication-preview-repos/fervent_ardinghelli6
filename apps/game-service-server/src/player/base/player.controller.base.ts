/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { PlayerService } from "../player.service";
import { PlayerCreateInput } from "./PlayerCreateInput";
import { Player } from "./Player";
import { PlayerFindManyArgs } from "./PlayerFindManyArgs";
import { PlayerWhereUniqueInput } from "./PlayerWhereUniqueInput";
import { PlayerUpdateInput } from "./PlayerUpdateInput";
import { CharacterFindManyArgs } from "../../character/base/CharacterFindManyArgs";
import { Character } from "../../character/base/Character";
import { CharacterWhereUniqueInput } from "../../character/base/CharacterWhereUniqueInput";

export class PlayerControllerBase {
  constructor(protected readonly service: PlayerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Player })
  async createPlayer(@common.Body() data: PlayerCreateInput): Promise<Player> {
    return await this.service.createPlayer({
      data: data,
      select: {
        createdAt: true,
        email: true,
        id: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Player] })
  @ApiNestedQuery(PlayerFindManyArgs)
  async players(@common.Req() request: Request): Promise<Player[]> {
    const args = plainToClass(PlayerFindManyArgs, request.query);
    return this.service.players({
      ...args,
      select: {
        createdAt: true,
        email: true,
        id: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Player })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async player(
    @common.Param() params: PlayerWhereUniqueInput
  ): Promise<Player | null> {
    const result = await this.service.player({
      where: params,
      select: {
        createdAt: true,
        email: true,
        id: true,
        updatedAt: true,
        username: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Player })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updatePlayer(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() data: PlayerUpdateInput
  ): Promise<Player | null> {
    try {
      return await this.service.updatePlayer({
        where: params,
        data: data,
        select: {
          createdAt: true,
          email: true,
          id: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Player })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deletePlayer(
    @common.Param() params: PlayerWhereUniqueInput
  ): Promise<Player | null> {
    try {
      return await this.service.deletePlayer({
        where: params,
        select: {
          createdAt: true,
          email: true,
          id: true,
          updatedAt: true,
          username: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/characters")
  @ApiNestedQuery(CharacterFindManyArgs)
  async findCharacters(
    @common.Req() request: Request,
    @common.Param() params: PlayerWhereUniqueInput
  ): Promise<Character[]> {
    const query = plainToClass(CharacterFindManyArgs, request.query);
    const results = await this.service.findCharacters(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,
        name: true,

        player: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/characters")
  async connectCharacters(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: CharacterWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      characters: {
        connect: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/characters")
  async updateCharacters(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: CharacterWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      characters: {
        set: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/characters")
  async disconnectCharacters(
    @common.Param() params: PlayerWhereUniqueInput,
    @common.Body() body: CharacterWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      characters: {
        disconnect: body,
      },
    };
    await this.service.updatePlayer({
      where: params,
      data,
      select: { id: true },
    });
  }
}