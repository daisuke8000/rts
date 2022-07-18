import { ChildAsFC } from './Child';

const Parent = () => {
    return (
        <ChildAsFC color="blue" onClick={()=> console.log("Clicked!")}>
            abc
    </ChildAsFC>
    );
};

export default Parent;