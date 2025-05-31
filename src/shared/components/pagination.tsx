import React from 'react';
import { ChevronRight } from '@/assets/icons/chevron';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push('...');
      }
      
      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }
      
      // Always show last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="flex items-center justify-end space-x-2 py-4 text-sm">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center w-8 h-8 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-3 h-3 stroke-gray-500 rotate-180" />
      </button>

      {getPageNumbers().map((page, index) => (
        page === '...' ? (
          <span key={`ellipsis-${index}`} className="px-2 text-gray-500">
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page as number)}
            className={`flex items-center justify-center w-8 h-8 rounded-md border ${
              currentPage === page
                ? 'border-primary text-primary'
                : 'border-gray-300 text-gray-500 hover:bg-gray-50'
            }`}
          >
            {page}
          </button>
        )
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center w-8 h-8 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-3 h-3 stroke-gray-500" />
      </button>
    </div>
  );
};
