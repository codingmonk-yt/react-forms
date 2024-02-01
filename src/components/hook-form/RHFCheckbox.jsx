import PropTypes from 'prop-types';
// form
import { useFormContext, Controller } from 'react-hook-form';
// @mui
import { Checkbox, FormControlLabel } from '@mui/material';

// ** PropTypes is a library for validating the types of props passed to React components.

// ** useFormContext and Controller are hooks provided by react-hook-form for managing forms in React.

// ** Checkbox and FormControlLabel are components from the Material-UI library for building user interfaces.

// ----------------------------------------------------------------------

RHFCheckbox.propTypes = {
  name: PropTypes.string,
};

// ** This part specifies the expected types for the props that this component receives.

// ** name: A string representing the name of the checkbox. This is a required prop.

export function RHFCheckbox({ name, ...other }) {
  const { control } = useFormContext();

  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => <Checkbox {...field} checked={field.value} />}
        />
      }
      {...other}
    />
  );
}

// ** This is the main component. It's a functional component that takes a name prop and other props (...other).

// ** Inside the component, it uses useFormContext to get the form control context, which includes the control object needed for managing form state in react-hook-form.

// ** It then returns a FormControlLabel component, which is a Material-UI component for displaying a label next to a form control.

// ** Inside the FormControlLabel, it uses the Controller component from react-hook-form. This component connects a form field to the react-hook-form state.

// ** It passes the name and control props to the Controller. The render prop is a function that receives a field object. It renders a Material-UI Checkbox using the field object's properties.

// ** The checked prop is set to field.value to ensure that the checkbox reflects the current value from the form state.
