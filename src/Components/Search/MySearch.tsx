import { Form, FormControl, Button } from "react-bootstrap";
import "./MySearch.css";
export interface IMySearchProps {
  buttonText: string;
  placeholder?: string;
  btnVariant: string;
}

export const MySearch: React.FC<IMySearchProps> = ({
  buttonText,
  placeholder,
  btnVariant,
}) => {
  return (
    <Form className={"searchStyle"}>
      <FormControl
        type="search"
        placeholder={placeholder}
        className="me-2"
        aria-label="Search"
      />
      <Button variant={btnVariant}>{buttonText}</Button>
    </Form>
  );
};
