"use client";

import { IconButton } from "@/app/components/molecules/button-with-icon";
import DataTable from "@/app/components/organisms/data-table";
import { Supplier } from "@/constants/types";
import useGetEntityHook from "@/hooks/getEntitiesHook";
import { deleteSupplier, getSuppliers } from "@/services/supplier";
import { ColDef, ICellRendererParams } from "@ag-grid-community/core";
import { useLocale } from "next-intl";
import { useCallback, useEffect, useMemo, useState } from "react";
import "./styles.css";
import useMutateEntityHook from "@/hooks/mutateEntityHook";

const ListSuppler = () => {
  const { data, error, isLoading } = useGetEntityHook(
    getSuppliers,
    "supplier-list"
  );

  const locale = useLocale();
  const { mutate, isPending, isSuccess, isError } =
    useMutateEntityHook(deleteSupplier);

  const [messages, setMessages] = useState<any>(null);

  const deleteSupplierFn = useCallback(
    (supplierId: string) => {
      mutate(supplierId);
    },
    [mutate]
  );

  useEffect(() => {
    if (!locale) return;
    (async () => {
      const messages = await import(`../../../../../locales/${locale}.json`);
      setMessages(messages);
    })();

    return () => {};
  }, [locale]);

  const columns: ColDef[] = useMemo(
    () => [
      {
        headerName: messages && messages?.Actions?.actions,
        filter: false,
        width: 150,
        cellRenderer: (cell: ICellRendererParams) => (
          <>
            <IconButton
              icon="edit"
              buttonVariant="link"
              iconColor="orange"
              onClick={() => deleteSupplierFn(cell.data.id)}
            />
            <IconButton
              icon="trash"
              buttonVariant="link"
              iconColor="red"
              onClick={() => console.log(cell.data)}
            />
          </>
        ),
      },
      {
        headerName: messages && messages.Supplier.name,
        field: "name",
        checkboxSelection: false,
        editable: true,
        flex: 1,
        sortable: true,
        unSortIcon: true,
      },
    ],
    [deleteSupplierFn, messages]
  );

  return (
    <>
      {!isLoading && (
        <div className="table-container">
          <DataTable columns={columns} data={(data as Supplier[]) || []} />
        </div>
      )}
    </>
  );
};

export default ListSuppler;
