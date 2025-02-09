import { useState } from "react";

const Friends = () => {

    const [friendsli, setFriends] = useState(["Arun", "Aditya"]);

    const addFriends = () => setFriends([...friendsli, "Souvik"]);

    return (
        <div>
            {friendsli.map((f) => (
                <li key={Math.random()}>{f}</li>
            ))}

            <button onClick={ addFriends }>Add Friends</button>
        </div>
    );
};

export default Friends;

// useState() Using Arrays