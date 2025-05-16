/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const { campus } = props;
  //console.log("Campus:", campus);
  const fallbackImage = "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?fit=crop&w=800&q=80";
  return (
    <div>
      <h1>{campus.name}</h1>
      {campus.imageUrl || (
        <img
          src={campus.imageUrl}
          alt={campus.name}
          width="250"
          height="180"
          style={{ marginBottom: "20px" }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = fallbackImage;
          }}
        />
      )}
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      <Link to={`/edit-campus/${campus.id}`}>
        <button>Edit Campus</button>
      </Link>

      <h2>Students Enrolled:</h2>
      {campus.students && campus.students.length > 0 ? (
        campus.students.map((student) => {
          const name = `${student.firstname} ${student.lastname}`;
          return (
            <div key={student.id}>
              <Link to={`/student/${student.id}`}>
                <h3>{name}</h3>
              </Link>
            </div>
          );
        })
      ) : (
        <p>No students enrolled in this campus.</p>
      )}
    </div>
  );
};

export default CampusView;
