import { Label, Input } from './Filter.styled';

const Filter = ({ filter, onChange }) => (
  <>
    <Label htmlFor="filter">Find contacts by name</Label>
    <Input
      id="filter"
      type="text"
      name="filter"
      value={filter}
      onChange={onChange}
      autoComplete="off"
    ></Input>
  </>
);

export default Filter;
