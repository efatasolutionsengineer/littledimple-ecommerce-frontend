import { useQuery } from "@tanstack/react-query";
import { getOrderHistory } from "./api";

export const useGetOrderHistory = () => {
    return useQuery({
        queryKey: ['order-history'],
        queryFn: getOrderHistory,
    });
};