import React from "react";
import "./CreateTaskPage.scss";
import Context from "../../Context";

class CreateTaskPage extends React.Component {
  static contextType = Context;

  handleCreateTask = (ev) => {
    ev.preventDefault();
    const { taskName, start, duration, categories } = ev.target;
    this.context.addTask(
      {
        name: taskName.value,
        start_time: start.value,
        duration: duration.value,
        category: categories.value,
      },
      () => {
        this.props.history.push("/taskList");
      }
    );
  };

  render() {
    return (
      <section className="createTaskPage">
        <h1>Create a goal</h1>

        <form className="createTaskForm" onSubmit={this.handleCreateTask}>
          <div className="formGroup">
            <input
              type="text"
              className="taskName"
              name="taskName"
              id="taskName"
              placeholder="Describe your task in a few short words"
            />
          </div>

          <div className="startDurationGroup">
            <div className="formGroup">
              <div className="startContainer">
                <label htmlFor="start">Start time: </label>
                <input
                  placeholder="(optional)"
                  type="text"
                  className="start"
                  name="start"
                  id="start"
                />
              </div>
            </div>

            <div className="formGroup">
              <div className="durationContainer">
                <label htmlFor="duration">Duration: </label>
                <input
                  placeholder="(optional)"
                  type="text"
                  className="duration"
                  name="duration"
                  id="duration"
                />
              </div>
            </div>
          </div>

          <div className="categoryDropdown">
            <select id="categories">
              <option defaultValue="Pick a category" disabled></option>
              <option value="waking-up">Waking up</option>
              <option value="exercise">Exercise</option>
              <option value="food">Food</option>
              <option value="hydration">Hydration</option>
              <option value="mindfulness">Mindfulness</option>
              <option value="sleep">Sleep</option>
              <option value="organization">Organization</option>
              <option value="education">Education</option>
              <option value="no-tech">No tech</option>
              <option value="no-booze">No booze</option>
              <option value="no-smoking">No smoking</option>
            </select>
          </div>

          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </section>
    );
  }
}

export default CreateTaskPage;
