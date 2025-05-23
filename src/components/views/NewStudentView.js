/*==================================================
NewStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new student page.
================================================== */
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  formContainer: {
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
    padding: '20px'
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  },
  customizeAppBar: {
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle: {
    backgroundColor: '#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
}));

const NewStudentView = (props) => {
  const { handleChange, handleSubmit } = props;
  const classes = useStyles();

  return (
    <div>
      <h1>New Student</h1>

      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography
              style={{
                fontWeight: 'bold',
                fontFamily: 'Courier, sans-serif',
                fontSize: '20px',
                color: '#11153e'
              }}
            >
              Add a Student
            </Typography>
          </div>

          <form style={{ textAlign: 'center' }} onSubmit={(e) => handleSubmit(e)}>
            <label style={{ color: '#11153e', fontWeight: 'bold' }}>First Name:</label><br />
            <input type="text" name="firstname" onChange={handleChange} required /><br /><br />

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Last Name:</label><br />
            <input type="text" name="lastname" onChange={handleChange} required /><br /><br />

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Email:</label><br />
            <input type="email" name="email" onChange={handleChange} required /><br /><br />

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>GPA (optional):</label><br />
            <input
              type="number"
              step="0.1"
              min="0.0"
              max="4.0"
              name="gpa"
              onChange={handleChange}
            /><br /><br />

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Image URL (optional):</label><br />
            <input type="text" name="imageUrl" onChange={handleChange} /><br /><br />

            <label style={{ color: '#11153e', fontWeight: 'bold' }}>Campus ID:</label><br />
            <input type="number" name="campusId" onChange={handleChange} required /><br /><br />

            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <br /><br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewStudentView;
