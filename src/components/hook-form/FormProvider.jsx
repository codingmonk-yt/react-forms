// ** Import Statements:

// ** PropTypes is a library used for validating the types of props passed to React components.
// ** FormProvider renames the FormProvider from react-hook-form as Form for easier usage.

import PropTypes from 'prop-types';
// form
import { FormProvider as Form } from 'react-hook-form';

// ----------------------------------------------------------------------

// ** This part specifies the expected types for the props that this component receives.

FormProvider.propTypes = {
  children: PropTypes.node.isRequired,
  methods: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
};

// ** children: Any content that can be rendered (React nodes).
// ** methods: An object that is required, typically provided by react-hook-form. It likely contains methods and state needed for form management.
// ** onSubmit: A function that is not required. It's a callback function that gets executed when the form is submitted.

export default function FormProvider({ children, onSubmit, methods }) {
  return (
    <Form {...methods}>
      <form onSubmit={onSubmit}>{children}</form>
    </Form>
  );
}

// ** This is the main component. It's a functional component that takes three props: children, onSubmit, and methods.
// ** It uses the Form component from react-hook-form, spreading the methods prop onto it. This effectively provides the form methods and state to the wrapped content.
// ** Inside, it renders a standard HTML form element with the onSubmit callback and the children (form inputs, buttons, etc.) inside it.
