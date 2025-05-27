import { useMutation, useQuery } from "@tanstack/react-query";
import { checkWarranty, getWarrantySubmissions, submitWarranty } from "./api";
import { CheckWarrantyType, WarrantySubmission } from "./types";

export const useGetWarranty = () => {
    return useMutation({
        mutationFn: (data: CheckWarrantyType) => checkWarranty(data),
    })
}

export const useSubmitWarranty = () => {
    return useMutation({
        mutationFn: (data: WarrantySubmission) => submitWarranty(data),
    })
}

export const useGetWarrantySubmissions = () => {
    return useQuery({
        queryKey: ['warranty-submissions'],
        queryFn: getWarrantySubmissions,
    })
}