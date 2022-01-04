import { Dropdown } from "react-bootstrap";
import styles from "./MyDropdownFilter.module.scss";
export interface IOption {
  key: string;
  value: string;
}
export interface IMyDropdownFilterProps {
  options: IOption[];
  dropdownName: string;
  className?: string;
}
export const MyDropdownFilter: React.FC<IMyDropdownFilterProps> = ({
  options,
  dropdownName,
  className,
}) => {
  return (
    <Dropdown className={styles.dropDownStyle}>
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
