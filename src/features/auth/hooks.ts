import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { forgotPassword, getProfile, postLogin, postLogout, postRegister } from "./api";
import { useRouter } from "next/navigation";
import type { LoginFormType, RegisterFormType, UserResponse } from "./types";
import { toast } from "sonner";

interface LoginResponse {
    message: string;
}

export const useLoginUser = () => {
    const router = useRouter();
    const queryClient = useQueryClient();
    
    return useMutation<LoginResponse, Error, LoginFormType>({
        mutationFn: async (credentials) => {
            const response = await postLogin(credentials);
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.message || 'Login failed');
            }
            
            return data as LoginResponse;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['auth'] });
            router.push('/');
        },
    });
}

export const useGetProfile = () => {
    return useQuery<UserResponse, Error>({
        queryKey: ['profile'],
        queryFn: getProfile,
    });
}

export const useRegisterUser = () => {
    const router = useRouter();
    
    return useMutation<unknown, Error, RegisterFormType>({
        mutationFn: async (data) => {
            const response = await postRegister(data);
            const responseData = await response.json();
            
            if (!response.ok) {
                throw new Error(responseData.message || 'Registration failed');
            }
            
            return responseData;
        },
        onSuccess: () => {
            router.push('/login');
        },
    });
}

export const useForgotPassword = () => {
    return useMutation({
        mutationFn: async (email: string) => {
            const response = await forgotPassword(email);
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.message || 'Failed to process forgot password request');
            }
            
            return data;
        }
    });
}

export const useLogout = () => {
    const router = useRouter();
    const queryClient = useQueryClient();
    const { mutate: logout } = useMutation({
        mutationFn: postLogout,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['auth'] });
            toast.success('Logout successful, see you next time!');
            router.push('/login');
        },
        onError: () => {
            toast.error('Failed to logout');
        }
    });
    
    return logout;
}