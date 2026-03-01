import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import logo from "../assets/harmonyHubLogo.svg";
import { FormEvent, useState } from "react";
import { supabase } from "../supabaseClient";
import { useAuth } from "../context/AuthContext"; // <-- use the context!

const NavBar = () => {
  const { user } = useAuth(); // access logged-in user
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(searchQuery);
  };

  const handleLogOut = async () => {
    setLoading(true);
    try {
      await supabase.auth.signOut();
    } catch (error) {
      setError("Logout failed.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <nav id="navbar" className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Link to="/" className={styles.navBrandLink}>
          <img
            src={logo}
            width="30"
            height="30"
            alt="logo"
            className={styles.logoImage}
          />
          HarmonyHub
        </Link>
      </div>

      <div className={styles.navbarLinks}>
        <Link to="/" className={styles.navLink}>
          Home
        </Link>
        <Link to="/about" className={styles.navLink}>
          About
        </Link>

        {!user && (
          <Link to="/login" className={styles.navLink}>
            Login
          </Link>
        )}

        <Link to="/projects" className={styles.navLink}>
          My Projects
        </Link>

        {user && (
          <button
            className={styles.navLink}
            onClick={handleLogOut}
            disabled={loading}
          >
            Logout
          </button>
        )}

        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type="search"
            placeholder="Search..."
            className={styles.searchFormControl}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className={styles.searchBtn} type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
