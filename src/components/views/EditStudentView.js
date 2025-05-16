/*==================================================
EditStudentView.js

Displays form to edit a student’s information
==================================================*/
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';

const useStyles = makeStyles(() => ({
  formContainer: {
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
    padding: '20px'
  },
  formTitle: {
    backgroundColor: '#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
}));

const EditStudentView = ({ student, editStudent }) => {
  const classes = useStyles();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gpa: "",
    imageUrl: "",
    campusId: ""
  });

  useEffect(() => {
    if (student) {
      setFormData({
        firstname: student.firstname || "",
        lastname: student.lastname || "",
        email: student.email || "",
        gpa: student.gpa || "",
        imageUrl: student.imageUrl || "",
        campusId: student.campusId || ""
      });
    }
  }, [student]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editStudent(formData);
  };

  return (
    <div>
      <h1>Edit Student</h1>
      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography style={{
            fontWeight: 'bold',
            fontFamily: 'Courier, sans-serif',
            fontSize: '20px',
            color: '#11153e'
          }}>
            Update Student Information
          </Typography>
        </div>

        <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
          <label>First Name:</label><br />
          <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} required /><br /><br />

          <label>Last Name:</label><br />
          <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} required /><br /><br />

          <label>Email:</label><br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} required /><br /><br />

          <label>GPA (optional):</label><br />
          <input type="number" step="0.1" name="gpa" value={formData.gpa} onChange={handleChange} /><br /><br />

          <label>Image URL (optional):</label><br />
          <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} /><br /><br />

          <label>Campus ID:</label><br />
          <input type="number" name="campusId" value={formData.campusId} onChange={handleChange} /><br /><br />

          <Button variant="contained" color="primary" type="submit">
            Save Changes
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditStudentView;
