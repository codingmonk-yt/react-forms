import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  FormProvider,
  RHFCheckbox,
  RHFRadioGroup,
  RHFSelect,
  RHFSwitch,
  RHFTextField,
} from "./components/hook-form";
import { Container, Stack } from "@mui/material";
import { useEffect } from "react";

const GENDER_OPTIONS = [
  {
    label: "MALE",
    value: "male",
  },
  {
    label: "FEMALE",
    value: "female",
  },
  {
    label: "OTHER",
    value: "other",
  },
];

const schema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subscribe: Yup.boolean(),
  notification: Yup.boolean(),
  gender: Yup.string()
    .oneOf(["male", "female", "other"], "Invalid gender")
    .required("Gender is required"),
  status: Yup.string()
    .oneOf(["Active", "Inactive"], "Invalid status")
    .required("Status is required"),
});

const defaultValues = {
  username: "",
  email: "",
  subscribe: false,
  notification: false,
  gender: "",
  status: "",
};

const App = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  useEffect(() => {
    console.log(`Component has rendered.`);
  }, []);

  const onSubmit = async (data) => {
    // Simulate a delay of 3000ms for form submission
    await new Promise((resolve) => setTimeout(resolve, 3000));

    // After the delay, resolve as success
    console.log("Form submitted successfully!", data);

    reset();
  };

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <RHFTextField name="username" label="Username" />
          <RHFTextField name="email" label="Email" />
          <RHFCheckbox name="subscribe" label="Subscribe" />
          <RHFSwitch name="notification" label="Notification" />
          <RHFSelect name="gender" label="Gender">
            <option value="" />
            {GENDER_OPTIONS.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </RHFSelect>
          <RHFRadioGroup
            name="status"
            label="Status"
            options={["Active", "Inactive"]}
          />

          <LoadingButton
            type="submit"
            variant="contained"
            color="primary"
            loading={isSubmitting}
          >
            Submit
          </LoadingButton>
        </Stack>
      </FormProvider>
    </Container>
  );
};

export default App;
