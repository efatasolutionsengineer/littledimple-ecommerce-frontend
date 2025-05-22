import { useMutation, useQuery } from "@tanstack/react-query"
import { getPaymentDetail, postPayment } from "./api"

export const usePostPayment = () => {
    return useMutation({
        mutationFn: postPayment,
    })
}

export const useGetPaymentDetail = () => {
    return useQuery({
        queryKey: ['paymentDetail'],
        queryFn: getPaymentDetail,
    })
}