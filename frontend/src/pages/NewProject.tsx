import { Link } from "react-router-dom";
import styles from "../styles/NewProject.module.css";
import Reveal from "../components/Reveal";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { FormEvent } from "react";

const NewProject = () => {
    const [ artistName, setArtistName ] = useState("");
    const [ songName, setSongName ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ files, setFiles ] = useState<File[]>([]);

    return (
        <>
            <Reveal width="100%">
                <>
                    <div className={styles.newProjectPage}>
                        <div className={styles.header}>
                            <h1>New Project</h1>
                        </div>
                        <Link to="/projects" className={styles.backBtn}>Back</Link>

                        <div className={styles.uploadForm}>
                            <form className={styles.uploadInfoForm}>
                                <p>Artist:</p>
                                <input
                                    type="text"
                                    name="artistName"
                                    placeholder="Artist Name"
                                    className={styles.addFormControl}
                                    value = {artistName}
                                    onChange={(e) => setArtistName(e.target.value)}
                                ></input>
                                <p>Song name:</p>
                                <input
                                    type="text"
                                    name="songName"
                                    placeholder="Song Name"
                                    className={styles.addFormControl}
                                    value = {songName}
                                    onChange={(e) => setSongName(e.target.value)}
                                ></input>
                                <p>Description:</p>
                                <textarea
                                    name="description"
                                    placeholder="Description"
                                    className={styles.addFormControlTextArea}
                                    value = {description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                                {/* <p>Collaborators:</p> */}
                                <p>Email:</p>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    className={styles.addFormControl}
                                    value = {email}
                                    onChange={(e) => setEmail(e.target.value)}
                                ></input>
                                <input
                                    type="file"
                                    accept="audio/*"
                                    multiple
                                    onChange={(e) => setFiles(Array.from(e.target.files))}
                                    className={styles.addFormControlFiles}
                                ></input>
                                <button type="submit" className={styles.newProjectBtn}>Upload Project</button>
                            </form>
                        </div>
                    </div>
                </>
            </Reveal>
        </>
    );
};

export default NewProject;