import { Form, FormControl } from "react-bootstrap";
import styles from "./MySearch.module.scss";
export interface IMySearchProps {
  placeholder?: string;
}

export const MySearch: React.FC<IMySearchProps> = ({ placeholder }) => {
  return (
    <Form className={styles.container}>
      <FormControl
        type="search"
        placeholder={placeholder}
        className="me-2"
        aria-label="Search"
      />
    </Form>
  );
};
