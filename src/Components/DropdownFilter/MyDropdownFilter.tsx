import { Dropdown } from "react-bootstrap";
import "./MyDropdownFilter.css";
export interface IOption {
  key: string;
  value: string;
}
export interface MyDropdownFilter {
  options: IOption[];
  dropdownName: string;
  className?: string;
}
export const MyDropdownFilter: React.FC<MyDropdownFilter> = ({
  options,
  dropdownName,
  className,
}) => {
  return (
    <Dropdown className={"dropDownStyle"}>
      <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
        {dropdownName}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {options.map((option) => {
          return <Dropdown.Item key={option.key}>{option.value}</Dropdown.Item>;
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};
