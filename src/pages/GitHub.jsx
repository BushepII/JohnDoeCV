import {useEffect, useState} from "react";

import "../style/pages_style/GitHub.scss"

const Github = () => {

    const [user, setUser] = useState([]);

    const getUsers = async () => {
        const res = await fetch("https://api.github.com/users/github-john-doe");
        const json = await res.json();
        setUser(json);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <section className="container-fluid d-flex flex-column justify-content-center align-items-center my-5" id="github">
                <h1 className="pt-5">Github user</h1>
                <h2>{user.name}</h2>
                <img src={user.avatar_url} alt="" />
                <p>{user.bio}</p>
                <p>Abonnés : {user.followers}</p>
                <p>Abonnements : {user.following}</p>
                <p>Créé le : {user.created_at}</p>
                <p>Modifié le : {user.updated_at}</p>
                <p>URL repositories : <a href={user.repos_url} target="_blank">{user.repos_url}</a></p>
            </section>
        </>
    );
}

export default Github;