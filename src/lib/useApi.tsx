/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useAppToast } from "./useAppToast";

interface ApiMutationOptions<TData, TVariables> {
  mutationFunction?: (variables: TVariables) => Promise<TData>;
  onSuccessFn?: (data: TData) => void;
  onErrorFn?: (error: any) => void; // Changed type to string
}

export function useAPI() {
  const queryClient = useQueryClient();
  const toast = useAppToast();

  function useAPIMutation<TData, TVariables>({
    mutationFunction,
    onSuccessFn,
    onErrorFn, // Added
  }: ApiMutationOptions<TData, TVariables>): UseMutationResult<
    TData,
    string, // Changed type to string
    TVariables
  > {
    return useMutation<TData, string, TVariables>({
      mutationFn: mutationFunction,
      onSuccess: onSuccessFn,
      //@ts-ignore
      onError: (error: AxiosError) => {
        let errorMessage = "An error occurred";

        if (error.response) {
          const status = error.response.status;
          errorMessage =
            //@ts-ignore
            error.response.data?.message || error.message || errorMessage;

          if (status === 400) {
            toast({
              description: errorMessage || "Please check your credentials",
              status: "error",
            });
          } else if (status === 401) {
            toast({
              description: errorMessage || "Invalid credentials",
              status: "error",
            });
          } else {
            toast({
              description: "An error occurred: " + errorMessage,
              status: "error",
            });
          }
        } else {
          toast({ description: errorMessage, status: "error" });
        }

        if (onErrorFn) {
          onErrorFn(errorMessage); // Call the custom error handler with the error message
        }
      },
    });
  }

  function useAPIQuery<TData, TError>({
    queryFn,
    queryKey,
  }: any): UseQueryResult<TData, TError> {
    return useQuery<TData, TError>({ queryKey, queryFn });
  }

  return { useAPIQuery, useAPIMutation, useQuery, useMutation, queryClient };
}
