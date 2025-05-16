import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import NewCampusView from "../views/NewCampusView";
import { addCampusThunk } from "../../store/thunks";

const NewCampusContainer = (props) => {
  const handleAddCampus = async (campusData) => {
    await props.addCampus(campusData);
    props.history.push("/campuses");
  };

  return <NewCampusView addCampus={handleAddCampus} />;
};

const mapDispatch = (dispatch) => ({
  addCampus: (campus) => dispatch(addCampusThunk(campus)),
});

export default withRouter(connect(null, mapDispatch)(NewCampusContainer));
