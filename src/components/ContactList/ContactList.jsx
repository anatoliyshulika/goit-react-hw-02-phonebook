import PropTypes from 'prop-types';
import { Component } from 'react';
import { List, ListItem, Button } from './ContactList.styled';
import Box from 'components/Box/Box';

export default class ContactList extends Component {
  render() {
    const { contacts, onDelete } = this.props;
    return (
      <List>
        {contacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            <div>{name}:</div>
            <Box
              width={2}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              {number}
              <Button type="button" onClick={() => onDelete(id)}>
                Delete
              </Button>
            </Box>
          </ListItem>
        ))}
      </List>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
