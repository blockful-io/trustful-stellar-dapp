import { camelCaseToUpperCaseWords } from "@/lib/utils/camelCaseToWords";
import cc from "classcat";
import React, { ReactElement, ReactNode, useState } from "react";

export interface CustomTableProps<T extends Record<string, any>>
  extends React.ComponentPropsWithoutRef<"div"> {
  childrenForEmptyTable: ReactNode;
  data: T[];
  headers: string[];
}

export const CustomTable = <T extends Record<string, any>>({
  className,
  childrenForEmptyTable,
  data,
  headers,
}: CustomTableProps<T>): ReactElement => {
  const hasRowsToDisplay = data.length > 0;
  return (
    <table className={cc(["custom-table bg-whiteOpacity008", className])}>
      <thead className="rounded-md">
        <tr>
          {headers.map((header) => {
            return (
              <th className="text-left py-4 px-7">
                <span className="text-whiteOpacity05 text-sm font-light">
                  {camelCaseToUpperCaseWords(header)}
                </span>
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody className="w-full">
        {hasRowsToDisplay ? (
          data.map((row) => {
            return (
              <tr>
                {headers.map((header) => {
                  return (
                    <td className="px-7 py-4">{row[header] as ReactNode}</td>
                  );
                })}
              </tr>
            );
          })
        ) : (
          <tr className={cc([{ hidden: hasRowsToDisplay }])}>
            <td colSpan={headers.length}>{childrenForEmptyTable}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
