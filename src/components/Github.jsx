import {useEffect, useState} from "react";

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
            <section className="container">
                <h1>Github user</h1>
                <h2>{user.name}</h2>
                <img src={user.avatar_url} alt="" />
                <p>{user.bio}</p>
                <p>Abonnés : {user.followers}</p>
                <p>Abonnements : {user.following}</p>
                <p>Créé le : {user.created_at}</p>
                <p>Modifié le : {user.updated_at}</p>
                <p>URL repositories : {user.repos_url}</p>
            </section>
        </>
    );
}

export default Github;