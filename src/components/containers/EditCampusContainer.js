import { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk, editCampusThunk } from "../../store/thunks";
import EditCampusView from "../views/EditCampusView";
import { Redirect } from "react-router-dom";

class EditCampusContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  async componentDidMount() {
    await this.props.fetchCampus(this.props.match.params.id);
  }

  editCampus = async (updatedData) => {
    const { id } = this.props.match.params;
    await this.props.editCampus(id, updatedData);
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/campus/${this.props.match.params.id}`} />;
    }

    return (
      <EditCampusView
        campus={this.props.campus}
        editCampus={this.editCampus}
      />
    );
  }
}

const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    editCampus: (id, data) => dispatch(editCampusThunk(id, data)),
  };
};

export default connect(mapState, mapDispatch)(EditCampusContainer);
