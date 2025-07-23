// ✅ useToggle.js
// js
// Copy
// Edit
// import { useState, useCallback } from 'react';

// const useToggle = (initialValue = false) => {
//     const [value, setValue] = useState(initialValue);

//     const toggle = useCallback(() => {
//         setValue((prev) => !prev);
//     }, []);

//     const setTrue = useCallback(() => setValue(true), []);
//     const setFalse = useCallback(() => setValue(false), []);

//     return [value, toggle, setTrue, setFalse];
// };

// export default useToggle;
// 🔧 How to Use
// js
// Copy
// Edit
// import React from 'react';
// import useToggle from './hooks/useToggle';

// const ToggleExample = () => {
//     const [isVisible, toggle, show, hide] = useToggle();

//     return (
//         <div>
//             <button onClick={toggle}>
//                 {isVisible ? 'Hide' : 'Show'} Details
//             </button>

//             <button onClick={show}>Force Show</button>
//             <button onClick={hide}>Force Hide</button>

//             {isVisible && <p>This is a toggled element 🎉</p>}
//         </div>
//     );
// };

// export default ToggleExample;