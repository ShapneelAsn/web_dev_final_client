/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";

const StudentView = (props) => {
  const { student } = props;

  const fallbackImage = "https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-profile-picture-business-profile-woman-suitable-social-media-profiles-icons-screensavers-as-templatex9_719432-1339.jpg?semt=ais_hybrid&w=740";

  return (
    <div>
      <h1>{student.firstname} {student.lastname}</h1>

      {/* Profile Image */}
      <img
        src={student.imageUrl || fallbackImage}
        alt={`${student.firstname} ${student.lastname}`}
        width="200"
        height="200"
        style={{ marginBottom: "20px" }}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = fallbackImage;
        }}
      />

      {/* Student Info */}
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>GPA:</strong> {
        student.gpa !== null && student.gpa !== undefined && student.gpa !== ""
          ? student.gpa
          : "Not provided"
      }</p>

      {/* Campus Info */}
      <h3><strong>Enrolled in:</strong> {student.campus ? (
        <Link to={`/campus/${student.campus.id}`}>{student.campus.name}</Link>
      ) : (
        "This student is not enrolled in any campus."
      )}</h3>
    </div>
  );
};

export default StudentView;
