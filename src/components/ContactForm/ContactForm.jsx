import PropTypes from 'prop-types';
import { Component } from 'react';
import { Formik, ErrorMessage } from 'formik';
import Box from 'components/Box/Box';
import * as yup from 'yup';
import 'yup-phone';
import { AddContactForm, Label, Input, Button } from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().phone().required(),
});

export default class ContactForm extends Component {
  initialValues = {
    name: '',
    number: '',
  };

  handleSubmit = (values, actions) => {
    this.props.onSubmit(values);
    actions.resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={this.initialValues}
        onSubmit={this.handleSubmit}
        validationSchema={schema}
      >
        <AddContactForm>
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          ></Input>
          <Box width={2} height={1} mt={2}>
            <ErrorMessage name="name" />
          </Box>

          <Label htmlFor="number">Number</Label>
          <Input
            id="number"
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          ></Input>
          <Box width={2} height={1} mt={2}>
            <ErrorMessage name="number" />
          </Box>

          <Button type="submit">Add contact</Button>
        </AddContactForm>
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
