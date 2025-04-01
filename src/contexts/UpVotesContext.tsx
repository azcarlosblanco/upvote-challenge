import { createContext, ReactNode, useState, useEffect } from "react";
import { UpVotesContextType, Votes } from "../types";
import { getStoredVotes, storeVotes } from "../utils/storage";

export const UpVotesContext = createContext<UpVotesContextType | undefined>(undefined)

export const UpVotesProvider = ({ children }: { children: ReactNode }) => {
    const [votes, setVotes] = useState<Votes>(getStoredVotes());

    useEffect(() => {
        storeVotes(votes);
    }, [votes]);

    const onIncrement = (index: number) => setVotes((prev: Votes) => prev.map((vote, i) => {
        if (i === index) {
            return {...vote, count: vote.count + 1}
        }
        return vote;
    }));

    const onSelect = (index: number) => setVotes((prev: Votes) => prev.map((vote, i) => {
        if (i === index) {
            return {...vote, selected: !vote.selected}
        }
        return vote;
    }));

    return (
        <UpVotesContext.Provider value={{ votes, onIncrement, onSelect }} >
            {children}
        </UpVotesContext.Provider>
    );
};