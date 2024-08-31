"use client";

import { DropdownMenu } from "@/app/components/molecules/dropdown-menu";
import { DataTable } from "@/app/components/organisms/data-table-shad/data-table";
import { MessageType, Supplier } from "@/constants/types";
import useGetEntityHook from "@/hooks/getEntitiesHook";
import useMutateEntityHook from "@/hooks/mutateEntityHook";
import { deleteSupplier, getSuppliers } from "@/services/supplier";
import { ColumnDef } from "@tanstack/react-table";
import { useLocale } from "next-intl";
import { useCallback, useEffect, useMemo, useState } from "react";
import "./styles.css";

const ListSuppler = () => {
  const { data } = useGetEntityHook(getSuppliers, "supplier-list");
  const locale = useLocale();

  const { mutate } = useMutateEntityHook(deleteSupplier);

  const [messages, setMessages] = useState<MessageType>(null);

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

  const columns: ColumnDef<Supplier>[] = useMemo(
    () => [
      {
        accessorKey: "name",
        header: messages && messages.Supplier.name,
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("name")}</div>
        ),
      },

      {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
          const supplier = row.original;

          return (
            <DropdownMenu
              menuLabel={messages && messages.Actions.actions}
              menuItems={
                messages
                  ? [
                      {
                        label: messages.Actions.delete,
                        onClick: () => {
                          deleteSupplierFn(supplier.id);
                        },
                      },
                      {
                        label: messages.Actions.edit,
                        onClick: () => console.log(row.original),
                      },
                    ]
                  : []
              }
            />
          );
        },
      },
    ],
    [deleteSupplierFn, messages]
  );

  const filterComponentProps = useMemo(
    () => ({
      placeholder: messages && messages.Supplier.filterByName,
      filteringColumn: "name",
    }),
    [messages]
  );
  return (
    <>
      <div className="table-container">
        <DataTable
          columns={columns}
          filterComponentProps={filterComponentProps}
          data={(data as Supplier[]) || []}
        />
      </div>
    </>
  );
};

export default ListSuppler;
