/*==================================================
EditStudentContainer.js

Container to fetch a student by ID, populate the edit form,
and dispatch updates via Redux.
==================================================*/
import { Component } from "react";
import { connect } from "react-redux";
import { fetchStudentThunk, editStudentThunk } from "../../store/thunks";
import EditStudentView from "../views/EditStudentView";
import { Redirect } from "react-router-dom";

class EditStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  async componentDidMount() {
    await this.props.fetchStudent(this.props.match.params.id);
  }

  editStudent = async (updatedData) => {
    const { id } = this.props.match.params;
    await this.props.editStudent(id, updatedData);
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={`/student/${this.props.match.params.id}`} />;
    }

    return (
      <EditStudentView
        student={this.props.student}
        editStudent={this.editStudent}
      />
    );
  }
}

const mapState = (state) => {
  return {
    student: state.student,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    editStudent: (id, data) => dispatch(editStudentThunk(id, data)),
  };
};

export default connect(mapState, mapDispatch)(EditStudentContainer);
