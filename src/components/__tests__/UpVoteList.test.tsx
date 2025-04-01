import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import UpVoteList from '../UpVoteList';
import { UpVotesContext } from '../../contexts/UpVotesContext';

describe('UpVoteList', () => {
    it('should reflect initial selected state and call onSelect when clicked', () => {
        const mockOnSelect = vi.fn();
        
        render(
            <UpVotesContext.Provider value={{ votes: [], onSelect: mockOnSelect, onIncrement: vi.fn() }}>
                <UpVoteList count={2} selected={true} index={0} />
            </UpVotesContext.Provider>
        );

        const upvoteList = screen.getByRole('list');
        
        expect(upvoteList).toHaveClass('selected');

        fireEvent.click(upvoteList);
        
        expect(mockOnSelect).toHaveBeenCalledWith(0);
        expect(mockOnSelect).toHaveBeenCalledTimes(1);
    });

    it('should render correct number of arrows based on count prop', () => {
        render(
            <UpVotesContext.Provider value={{ votes: [], onSelect: vi.fn(), onIncrement: vi.fn() }}>
                <UpVoteList count={3} selected={false} index={0} />
            </UpVotesContext.Provider>
        );

        const arrows = screen.getAllByRole('listitem');
        expect(arrows).toHaveLength(3);
    });
}); 