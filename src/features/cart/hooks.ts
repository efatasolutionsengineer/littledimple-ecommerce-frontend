import { useMutation, useQuery } from "@tanstack/react-query";
import { addProductToCart, addToCart, getCart, submitCheckout } from "./api";
import { CartFormType, CartItem, CheckoutData } from "./types";

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

export const useAddProductToCart = ({onSuccess = () => {}, onError = () => {}}: {onSuccess?: (data: unknown) => void, onError?: (error: Error) => void}) => {
    return useMutation({
        mutationFn: (data: CartFormType) => addProductToCart(data.product_id, data.quantity),
        onSuccess: (data) => {
            onSuccess(data);
        },
        onError: (error) => {
            onError(error);
        }
    });
};