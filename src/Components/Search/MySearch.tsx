import { Form, FormControl } from "react-bootstrap";
import "./MySearch.css";
export interface IMySearchProps {
  placeholder?: string;
}

export const MySearch: React.FC<IMySearchProps> = ({ placeholder }) => {
  return (
    <Form className={"searchStyle"}>
      <FormControl
        type="search"
        placeholder={placeholder}
        className="me-2"
        aria-label="Search"
      />
    </Form>
  );
};
