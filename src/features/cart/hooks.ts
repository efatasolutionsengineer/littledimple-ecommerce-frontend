import { useMutation, useQuery } from "@tanstack/react-query";
import { addToCart, getCart, submitCheckout } from "./api";
import { CartItem, CheckoutData } from "./types";

export const useAddToCart = ({onSuccess = () => {}, onError = () => {}}: {onSuccess?: (data: unknown) => void, onError?: (error: Error) => void}) => {
    return useMutation({
        mutationFn: (data: CartItem) => addToCart(data),
        onSuccess: (data) => {
            onSuccess(data);
        },
        onError: (error) => {
            onError(error);
        }
    });
};

export const useGetCart = () => {
    return useQuery({
        queryKey: ['cart'],
        queryFn: getCart,
    });
};

export const useSubmitCheckout = ({onSuccess = () => {}, onError = () => {}}: {onSuccess?: (data: unknown) => void, onError?: (error: Error) => void}) => {
    return useMutation({
        mutationFn: (data: CheckoutData) => submitCheckout(data),
        onSuccess: (data) => {
            onSuccess(data);
        },
        onError: (error) => {
            onError(error);
        }
    });
};