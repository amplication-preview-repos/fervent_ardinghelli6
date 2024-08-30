/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CharacterUpdateManyWithoutPlayersInput } from "./CharacterUpdateManyWithoutPlayersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PlayerUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CharacterUpdateManyWithoutPlayersInput,
  })
  @ValidateNested()
  @Type(() => CharacterUpdateManyWithoutPlayersInput)
  @IsOptional()
  @Field(() => CharacterUpdateManyWithoutPlayersInput, {
    nullable: true,
  })
  characters?: CharacterUpdateManyWithoutPlayersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string | null;
}

export { PlayerUpdateInput as PlayerUpdateInput };