// Write your JS code here
import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  state = {}

  render() {
    return (
      <>
        <Header />

        <div className="homeContent">
          <div>
            <h3>Clothes That Get YOU Noticed</h3>
            <p>
              Fashion is a part of daily air and it does not quite help that it
              changes all the time.
            </p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="clothes"
          />
        </div>
      </>
    )
  }
}

export default Home
