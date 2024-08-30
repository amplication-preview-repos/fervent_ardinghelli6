import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { CharacterTitle } from "../character/CharacterTitle";

export const PositionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
