import PropTypes from 'prop-types';
import { Form, FormInput} from './SearchForm.styled';
import { Button } from 'components/Button/Button.styled';

export default function SearchForm ({onSubmit}){
  
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const query = form.elements.query.value;
    onSubmit(query);
    form.reset();
  
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormInput type="text" name="query" placeholder="Please, enter something" />
      <Button type="submit">Search</Button>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};