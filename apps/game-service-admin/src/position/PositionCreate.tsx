import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { CharacterTitle } from "../character/CharacterTitle";

export const PositionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="character.id"
          reference="Character"
          label="Character"
        >
          <SelectInput optionText={CharacterTitle} />
        </ReferenceInput>
        <NumberInput label="xCoordinate" source="xCoordinate" />
        <NumberInput label="yCoordinate" source="yCoordinate" />
      </SimpleForm>
    </Create>
  );
};
