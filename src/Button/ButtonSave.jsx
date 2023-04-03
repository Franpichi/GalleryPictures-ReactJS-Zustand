import React from 'react';

export const Save = (onAdd) => {
    const addPhoto = () => {
        onAdd()
    }
    
    return (
        <>
            <button className="btn btn-dark" onClick={() => addPhoto()}>Add Photo</button>
        </>
    );
}

export default Save;
