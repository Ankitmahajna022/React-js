import { useFormik } from 'formik';
import * as Yup from 'yup';
import './StdentForm.css';

const StudentForm = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      grade: '',
      gender: '',
    },
    
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      grade: Yup.string().required('Grade is required'),
      gender: Yup.string().required('Gender is required'),
    }),
    onSubmit: (values) => {
      console.log('Form Data:', values);
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Student Registration Form</h2>

      <div>
        <label>Full Name:</label><br />
        <input
          type="text"
          name="fullName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.fullName}
        />
        {formik.touched.fullName && formik.errors.fullName && (
          <div style={{ color: 'red' }}>{formik.errors.fullName}</div>
        )}
      </div>

      <div>
        <label>Email:</label><br />
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        )}
      </div>

      <div>
        <label>Password:</label><br />
        <input
          type="password"
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <div style={{ color: 'red' }}>{formik.errors.password}</div>
        )}
      </div>

      <div>
        <label>Grade:</label><br />
        <select
          name="grade"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.grade}
        >
          <option value="" label="Select grade" />
          <option value="Freshman" label="Freshman" />
          <option value="Sophomore" label="Sophomore" />
          <option value="Junior" label="Junior" />
          <option value="Senior" label="Senior" />
        </select>
        {formik.touched.grade && formik.errors.grade && (
          <div style={{ color: 'red' }}>{formik.errors.grade}</div>
        )}
      </div>

      <div>
        <label>Gender:</label><br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={formik.handleChange}
          /> Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={formik.handleChange}
          /> Female
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Other"
            onChange={formik.handleChange}
          /> Other
        </label>
        {formik.touched.gender && formik.errors.gender && (
          <div style={{ color: 'red' }}>{formik.errors.gender}</div>
        )}
      </div>

      <button type="submit" style={{ marginTop: '20px' }}>Submit</button>
    </form>
  );
};

export default StudentForm;
