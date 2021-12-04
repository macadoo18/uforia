import React from "react";
import "./TaskItem.scss";
import Context from "../../Context";
import Basket from "../../images/basket.png";

class TaskItem extends React.Component {
  static contextType = Context;

  render() {
    return (
      <section className="taskItem">
        <div className="task">
          <h3>{this.props.name}</h3>
          <div className="startDuration">
            <p className="startTime">
              Start time:{" "}
              <span className="dynamicInput">{this.props.start_time}</span>
            </p>
            <p className="duration">
              Duration:{" "}
              <span className="dynamicInput">{this.props.duration}</span>
            </p>
          </div>
        </div>

        <div
          className="delete"
          onClick={() => {
            this.context.deleteTask(this.props.id);
          }}
        >
          <img src={Basket} height="30" alt="delete"></img>
        </div>

        {this.props.start_date === null && (
          <button
            className="start"
            onClick={() => this.context.startTask(this.props.id)}
          >
            Start
          </button>
        )}

        {this.props.start_date !== null && this.props.end_date === null && (
          <button
            className="stop"
            onClick={() => this.context.endTask(this.props.id)}
          >
            Stop
          </button>
        )}
      </section>
    );
  }
}

export default TaskItem;
