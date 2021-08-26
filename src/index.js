import { useEffect, useState } from 'react';

const useDetectKeyboardOpen = (minKeyboardHeight = 300,defaultValue) => {
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(defaultValue);

    useEffect(() => {
        const listener = () => {
            const newState = window.screen.height - minKeyboardHeight > window.visualViewport.height
            if (isKeyboardOpen != newState) {
                setIsKeyboardOpen(newState);
            }
        };
        window.visualViewport.addEventListener('resize', listener);
        return () => {
            window.visualViewport.addEventListener('resize', listener);
        };
    }, []);

    return isKeyboardOpen;
};

export default useDetectKeyboardOpen;