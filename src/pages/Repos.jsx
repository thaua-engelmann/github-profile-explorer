import React, { useContext } from 'react';

// Context;
import {context} from '../context/context';

// Components;
import ReposContainer from '../components/reposContainer/reposContainer';

const Repos = () => {

    const ctx = useContext(context);

    return (
        <div id="repos" className="repos">
            <ReposContainer userData={ctx.userData} repos={ctx.repos} />
        </div>
    )
}

export default Repos;
