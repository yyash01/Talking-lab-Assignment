import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <h1 className="header-title">FashionHub</h1>
        <div className="header-title_list">
          <div>Category</div>
          <div>Brand</div>
          <div>Contact</div>
          <div>FAQ's</div>
        </div>
      </nav>
      <div className="profile-logo"></div>
    </header>
  );
};

export default Header;
