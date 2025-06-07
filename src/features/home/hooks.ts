import { useQuery } from "@tanstack/react-query";
import { getHome } from "./api";

export const useGetHome = () => {
    return useQuery({
        queryKey: ['home'],
        queryFn: getHome,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchInterval: false,
        refetchIntervalInBackground: false,
    })
}