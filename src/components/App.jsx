import React, { Component } from 'react';
import Sections from './Sections/Sections';
import Feedback from './FeedbackOptions/Feedback';
import Statistics from './Statistics/Statistics';
import Notifications from './Notifications/Notifications';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChange = event => {
    const { name } = event.target;

    this.setState(state => {
      return { [name]: state[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    return (this.state.good + this.state.neutral + this.state.bad)
  }

  countPositiveFeedbackPercentage = () => {
    const percent = (this.state.good / this.countTotalFeedback()) * 100;
    return Number.isNaN(percent) ? 0 : Math.round(percent);

  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Sections title={"Please leave feedback"}>
          <Feedback items={Object.keys(this.state)} handleUpdate={this.handleChange} />
          {this.countTotalFeedback() > 0 ?
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()} />
            :
            <Notifications message="There is no feedback" />}
        </Sections>

        </div>
    );
  }
}
export default App