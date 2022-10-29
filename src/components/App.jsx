import React, { useState} from 'react';
import Sections from './Sections/Sections';
import Feedback from './FeedbackOptions/Feedback';
import Statistics from './Statistics/Statistics';
import Notifications from './Notifications/Notifications';

export const App =() => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const handleChange = event => {
    // const { name } = event.target;

    // this.setState(state => {
    //   return { [name]: state[name] + 1 };
    // });
    switch (event.target.name) {
      case 'good':
        setGood(prevGood => prevGood + 1)
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1)
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1)
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return (good + neutral + bad)
  }

  const countPositiveFeedbackPercentage = () => {
    const percent = (good / countTotalFeedback()) * 100;
    return Number.isNaN(percent) ? 0 : Math.round(percent);
  }

    return (
      <div>
        <Sections title={"Please leave feedback"}>
          <Feedback items={['good', 'neutral', 'bad']}
            handleUpdate={handleChange} />
          {countTotalFeedback() > 0 ?
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positiveFeedback={countPositiveFeedbackPercentage()} />
            :
            <Notifications message="There is no feedback" />}
        </Sections>

        </div>
    );
  }
export default App