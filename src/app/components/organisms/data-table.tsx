import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ColDef, ModuleRegistry } from "@ag-grid-community/core";
import {
  AG_GRID_LOCALE_BR,
  AG_GRID_LOCALE_EN,
} from "@ag-grid-community/locale";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgGridReact } from "ag-grid-react";
import { useLocale } from "next-intl";
import { useMemo } from "react";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

type DataTableProps<T> = {
  columns: ColDef[];
  data: T[];
};

const DataTableAG = <T,>({ columns, data }: DataTableProps<T>) => {
  const locale = useLocale();
  const defaultColDef = useMemo(() => {
    return {
      filter: "agTextColumnFilter",
      floatingFilter: true,
    };
  }, []);

  return (
    <div
      style={{
        height: 400,
      }}
      className={"ag-theme-alpine"}
    >
      <AgGridReact
        rowData={data}
        columnDefs={columns as any}
        localeText={locale === "pt-br" ? AG_GRID_LOCALE_BR : AG_GRID_LOCALE_EN}
        defaultColDef={defaultColDef}
        suppressRowClickSelection={true}
        pagination={true}
        paginationPageSize={10}
        paginationPageSizeSelector={[10, 25, 50]}
      />
    </div>
  );
};

export default DataTableAG;
