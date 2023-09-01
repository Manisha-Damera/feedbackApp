// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedBackApp: false,
  }

  onClickFeedback = () => {
    this.setState({isFeedBackApp: true})
  }

  renderFeedbackQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="question-container">
        <h1 className="feedback-question">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                className="button"
                type="button"
                onClick={this.onClickFeedback}
              >
                <img
                  src={emoji.imageUrl}
                  alt={emoji.name}
                  className="image-alt"
                />
                <br />
                <span className="name">{emoji.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderFeedbackAnswer = () => {
    const {resources} = this.props

    const {loveEmojiUrl} = resources

    return (
      <div className="thankyou-container">
        <img src={loveEmojiUrl} alt="love emoji" className="imageLove" />
        <h1 className="heading-thankyou">Thank You!</h1>
        <p className="para">
          We will use your feedback to import our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedBackApp} = this.state

    return (
      <div className="feedback-container">
        <div className="feedback-card">
          {isFeedBackApp
            ? this.renderFeedbackQuestion()
            : this.renderFeedbackAnswer()}
        </div>
      </div>
    )
  }
}

export default Feedback
