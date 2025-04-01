import { Votes } from "../types";

const STORAGE_KEY = 'upvotes-data';

export const getStoredVotes = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [
    { count: 0, selected: false},
    { count: 0, selected: false},
    { count: 0, selected: false},
  ];
};

export const storeVotes = (votes: Votes) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(votes));
}; 