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
