import { Box } from '../../common/Box';
import { Label, Input } from '../ContactForm/ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);
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
