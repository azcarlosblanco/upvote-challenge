import { useContext } from "react";
import { UpVotesContext } from "../contexts/UpVotesContext";
import { UpVotesContextType } from "../types";

export const useUpVotes = (): UpVotesContextType => {
    const context = useContext(UpVotesContext);
    
    if (!context) {
        throw new Error("useUpVotes must be used within an UpVotesProvider");
    }
    
    return context;
}; 