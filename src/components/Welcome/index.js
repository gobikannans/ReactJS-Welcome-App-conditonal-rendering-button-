import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribe: 'Subscribe'}

  onSubscribe = () => {
    const {isSubscribe} = this.state

    if (isSubscribe === 'Subscribe') {
      this.setState({isSubscribe: 'Subscribed'})
    } else {
      this.setState({isSubscribe: 'Subscribe'})
    }
  }

  render() {
    const {isSubscribe} = this.state

    return (
      <div className="bg-container">
        <div className="card-list">
          <h1 className="heading">Welcome</h1>
          <p className="paragraph">Thank you! Happy Learning</p>
          <button
            className="btn-style"
            type="button"
            onClick={this.onSubscribe}
          >
            {isSubscribe}
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome
