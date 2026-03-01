import styles from "../styles/Projects.module.css";
import Reveal from "../components/Reveal";
import OutlinedCard from "../components/ProjectCards";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

// have a page that says "join now to get started on your next big hit" and if the user is logged in, then they will be able to see their projects
// projects will be displayed in sort of a listGroup tiles format

const Projects = () => {
  interface Project {
    id: number;
    name: string;
    artist?: string;
    description?: string;
  }

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  const { user } = useAuth();

  return (
    <>
      {user && (<span className={styles.userInfo}>Welcome back, {user.email}</span>)}
      <Reveal>
        <>
          <h1 className={styles.title}>HarmonyHub Projects</h1>
          <div id="projectsScreen" className={styles.gridContainer}>
            {loading ? (
              <p>Loading projects...</p>
            ) : (
              <>
                {projects.map((p) => (
                  <>
                    <div key={p.id} className={`${styles.gridItem} ${styles.id}`}>
                      <OutlinedCard
                        songTitle={p.name}
                        description={p.description}
                        artist={p.artist}
                      />
                    </div>
                  </>
                ))}
              </>
            )}
          </div>
        </>
      </Reveal>
    </>
  );
};

export default Projects;
