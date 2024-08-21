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
      onError: (error: AxiosError | any) => {
        console.log(error);
        let errorMessage = "An error occurred";
        if (
          error.response &&
          error.response.data &&
          typeof error.response.data === "string"
        ) {
          errorMessage = error.response.data;
        } else if (error.message) {
          errorMessage = error.message;
        }
        toast({ description: errorMessage, status: "error" });

        if (onErrorFn) {
          onErrorFn({ message: errorMessage, error }); // Call the provided error handler
        } else {
          console.log("onErrorFn is not defined."); // Log if onErrorFn is not provided
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
