export function ChevronRight({ className, width = 9, height = 14 }: { className?: string, width?: number, height?: number }) {
    return <svg className={className} width={width} height={height} viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.76872 1.66675L7.10205 7.00008L1.76872 12.3334" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
}

export function ChevronDown({ className, width = 10, height = 6 }: { className?: string, width?: number, height?: number }) {
    return <svg className={className} width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.99989 12.5625C8.85059 12.5632 8.7073 12.5037 8.60239 12.3975L2.60239 6.39751C2.39587 6.17588 2.40196 5.8305 2.61617 5.61629C2.83038 5.40208 3.17575 5.39599 3.39739 5.60251L8.99989 11.205L14.6024 5.60251C14.824 5.39599 15.1694 5.40208 15.3836 5.61629C15.5978 5.8305 15.6039 6.17588 15.3974 6.39751L9.39739 12.3975C9.29247 12.5037 9.14919 12.5632 8.99989 12.5625Z" fill="inherit" />
    </svg>
}