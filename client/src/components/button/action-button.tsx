import {FC} from 'react';
import * as React from "react";

interface ActionButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}

const ActionButton: FC<ActionButtonProps> = ({onClick, children}) => {
    return (
        <button
            onClick={onClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
            {children}
        </button>
    );
}

export {ActionButton}