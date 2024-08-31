import { axiosInstance } from "@/axios/axios.instance";
import { Supplier } from "@/constants/types";

const path = process.env.NEXT_PUBLIC_API_URL + "supplier/";

export const createSupplier = async (supplier: Supplier, locale: string) => {
  await axiosInstance.post(path + "create-supplier", supplier, {
    headers: { locale },
  });
};

export const getSuppliers = async (): Promise<Supplier[]> => {
  return (await axiosInstance.get(path + "get-suppliers")).data;
};

export const deleteSupplier = async (id: string, locale: string) => {
  await axiosInstance.delete(path + `delete-supplier/${id}`, {
    headers: { locale },
  });
};
