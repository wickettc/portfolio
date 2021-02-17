import React, { useEffect, useRef, useState } from "react";

const FadeInItem = (props) => {
    const [isVisible, setIsVisible] = useState(false);
    const itemRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!isVisible) setIsVisible(entry.isIntersecting);
            });
        });
        observer.observe(itemRef.current);
        const cleanupItem = itemRef.current;
        return () => observer.unobserve(cleanupItem);
    }, [isVisible]);
    return (
        <div
            className={`fade-in-item ${isVisible ? "is-visible" : ""} ${
                props.divClass
            }`}
            ref={itemRef}
        >
            {props.children}
        </div>
    );
};

export default FadeInItem;
