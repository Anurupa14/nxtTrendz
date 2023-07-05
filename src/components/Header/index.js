// Write your JS code here
import './index.css'

const Header = () => (
  <>
    <div className="banner">
      <div className="logoContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="logo"
        />
      </div>
      <ul className="routesContainer">
        <li>Home</li>
        <li>Products</li>
        <li>Cart</li>
        <li>
          <button type="button" className="logoutBtn">
            Logout
          </button>
        </li>
      </ul>
    </div>
  </>
)

export default Header
