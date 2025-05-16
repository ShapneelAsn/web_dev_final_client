/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  const { allCampuses } = props;
  const fallbackImage = "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?fit=crop&w=800&q=80";

  // If there is at least one campus, render All Campuses view 
  return (
    <div>
      <h1>All Campuses</h1>

      {/* Link to add a new campus */}
      <Link to="/new-campus">
        <button>Add New Campus</button>
      </Link>

      <br /><br />

      {/* If there are no campuses, show fallback message */}
      {(!allCampuses || allCampuses.length === 0) ? (
        <p>There are no campuses.</p>
      ) : (
        allCampuses.map((campus) => (
          <div key={campus.id} style={{ marginBottom: "20px" }}>
            {/* Campus name links to single campus page */}
            <Link to={`/campus/${campus.id}`}>
              <h2>{campus.name}</h2>
            </Link>

            {/* Display campus image or a default placeholder */}
            <img
              src={campus.imageUrl || fallbackImage}
              alt={campus.name}
              width="200"
              height="150"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = fallbackImage;
              }}
            />

            <p>{campus.address}</p>
            <p>{campus.description}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
};

// Validate data type of the props passed to component.
AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;