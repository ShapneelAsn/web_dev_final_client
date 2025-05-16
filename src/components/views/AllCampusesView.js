import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  const { allCampuses } = props;
  const fallbackImage = "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?fit=crop&w=800&q=80";

  const sortedCampuses = [...allCampuses].sort((a, b) => a.id - b.id);

  return (
    <div>
      <h1>All Campuses</h1>

      {/* Link to add a new campus */}
      <Link to="/new-campus">
        <button>Add New Campus</button>
      </Link>

      <br /><br />

      {(!sortedCampuses || sortedCampuses.length === 0) ? (
        <p>There are no campuses.</p>
      ) : (
        sortedCampuses.map((campus) => (
          <div key={campus.id} style={{ marginBottom: "20px" }}>
            <Link to={`/campus/${campus.id}`}>
              <h2>{campus.name}</h2>
            </Link>

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

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
