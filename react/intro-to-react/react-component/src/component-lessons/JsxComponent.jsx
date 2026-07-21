import React from 'react';

const JsxComponent = () => {
    const element = <h1>Kim Dokja not now</h1>;
    const anotherElement = <p>HALO SEKAI</p>


    const combinedElement = (
        <>
            {element}
            {anotherElement}
        </>
    );
    return combinedElement
};

export default JsxComponent;

// function JsxComponent(){
//     const element = <h1>This is a JSX Component</h1>
//     return(
//         {element}
//     )
// }
//
// export default JsxComponent