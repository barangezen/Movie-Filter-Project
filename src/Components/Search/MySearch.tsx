import { Form, FormControl, Button } from "react-bootstrap";

export interface IMySearchProps {
  buttonText: string;
}

export const MySearch: React.FC<IMySearchProps> = ({ buttonText }) => {
  return (
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-success">{buttonText}</Button>
    </Form>
  );
};
