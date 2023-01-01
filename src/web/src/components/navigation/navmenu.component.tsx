import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { reset } from "../../store/slices/AuthSlice";
import logo_nav from "./../../assets/logo_nav.png";

function NavMenu() {
  const dispatch = useAppDispatch();

  const isLogin = useAppSelector((state) => state.auth.isLogin)
  return (
    <header>
      <nav
        aria-label="main navigation"
        className="navbar"
        role="navigation"
      >
        <div className="navbar-brand">
          <a className="navbar-item has-text-weight-bold" href="/">
            <img src={logo_nav} alt="logo-nav" />
          </a>
        </div>
        <div className="navbar-menu" id="navbar">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {isLogin &&
                  <>
                    <a
                      className="button is-dark has-text-weight-bold"
                      href="/"
                      onClick={() => dispatch(reset())}>
                      Logout
                    </a>
                  </>
                }
                {!isLogin &&
                  <>
                    <a
                      className="button is-dark has-text-weight-bold"
                      href="/login"
                    >
                      Login
                    </a>
                  </>
                }

              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavMenu;
