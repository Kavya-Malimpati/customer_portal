import { useState, type ChangeEvent, type FormEvent } from 'react';
import loginConfig from '../config/login.json';
import { deepClone } from '../scripts/utils';
import { validateFormFields } from '../scripts/validationsService';
import Card from '../components/Card';
import Typography from '../components/Typography/Typography';
import CardContent from '../components/Card/CardContent';
import TextField from '../components/TextField/TextField';
import Button from '../components/Button/Button';
import Select from '../components/Select';

type FormDataType = typeof loginConfig;

const Login = () => {
  // Deep clone the login config to avoid mutating the original JSON
  const clonedLoginConfig = deepClone(loginConfig);

  // Initialize form data from login.json configuration
  const [formData, setFormData] = useState<FormDataType>(clonedLoginConfig);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id as keyof FormDataType]: {
        ...prevData[id as keyof FormDataType],
        value,
        hasError: false,
        errorMessage: '',
      },
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Refer to the method from common scripts, it will return the full object and flag list
    const { data, status } = validateFormFields(formData);

    console.log('Validation Result:', { data, status });

    if (status) {
      // Form is valid, proceed with submission logic
      alert('Login Successful!');
      // Reset form after successful submission
      setFormData(clonedLoginConfig);
    } else {
      // Form has validation errors, map validation errors to form data structure
      setFormData(prevData =>
        Object.entries(prevData).reduce((acc, [key, field], index) => {
          const validationResult = data[index] as
            | { isValid: boolean; errorMessage?: string }
            | undefined;
          return {
            ...acc,
            [key]: {
              ...field,
              hasError: !validationResult?.isValid,
              errorMessage: validationResult?.errorMessage || '',
            },
          };
        }, {} as FormDataType),
      );
    }
  };

  return (
    <div className='min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4'>
      <div className='w-auto'>
        {/* Login Form Card */}
        <Card
          variant='outlined'
          className='bg-white rounded-xl shadow-2xl overflow-hidden w-[420px]'
        >
          {/* Card Header */}
          <div className='px-6 py-2 bg-gradient-to-r from-blue-50 to-indigo-50'>
            <Typography variant='h1' className='text-center text-gray-900'>
              Login
            </Typography>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate>
            {/* Card Content - Form Inputs */}
            <CardContent className='p-8 gap-4 flex flex-col'>
              <TextField {...formData.email} onChange={handleInputChange} />
              <TextField {...formData.password} onChange={handleInputChange} />
              <Select {...formData.city} onChange={handleInputChange} />
            </CardContent>
            {/* Card Actions - Submit Button */}
            <CardContent className='border-t border-gray-200 px-8 py-6 bg-gray-50'>
              <Button
                variant='contained'
                color='primary'
                size='medium'
                fullWidth
                type='submit'
                id='submit'
              >
                Login
              </Button>
            </CardContent>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
