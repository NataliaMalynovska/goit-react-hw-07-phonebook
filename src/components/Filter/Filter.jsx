import { Box } from '../Box';
import { Label, Input } from '../ContactForm/ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilterContacts = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <Box p="8px 16px">
      <Label>
        Find contact by name
        <Input
          type="text"
          value={filter}
          onChange={handleFilterContacts}
          placeholder="Search..."
        />
      </Label>
    </Box>
  );
};

export default Filter;
