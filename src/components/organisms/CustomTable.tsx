import { camelCaseToUpperCaseWords } from "@/lib/utils/camelCaseToWords";
import cc from "classcat";
import React, { ReactElement, ReactNode, useState } from "react";

export interface CustomTableProps<T extends Record<string, any>>
  extends React.ComponentPropsWithoutRef<"div"> {
  childrenForEmptyTable: ReactNode;
  data: T[];
  headers: (keyof T)[];
}

export const CustomTable = <T extends Record<string, any>>({
  className,
  childrenForEmptyTable,
  data,
  headers,
}: CustomTableProps<T>): ReactElement => {
  return (
    <table className="custom-table bg-whiteOpacity008">
      <thead className="rounded-md">
        <tr>
          {headers.map((header) => {
            return (
              <th className="text-left py-4 px-7">
                <span className="text-whiteOpacity05 text-sm font-light">
                  {camelCaseToUpperCaseWords(header as string) as ReactNode}
                </span>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => {
          return (
            <tr>
              {headers.map((header) => {
                return (
                  <td className="flex-1 py-4 px-7">
                    {row[header] as ReactNode}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
