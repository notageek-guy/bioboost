import React, { Fragment } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy } from "react-icons/fa";
import { notifier } from "@/helper/notify";
interface ResultI {
  result: string;
  loading: boolean;
}
export default function Result({ result }: ResultI) {
  return (
    <div className="mt-4">
      {result ? (
        <Fragment>
          <div className="flex items-center flex-col  gap-2">
            <textarea
              value={result}
              className="w-full scrollbar-hide h-40 p-4 rounded-md bg-gray-700 text-white "
              readOnly
            />

            <CopyToClipboard
              onCopy={() => {
                notifier.success("Copied to clipboard!");
              }}
              text={result}
            >
              <button
                className="bg-blue-500
                hover:bg-blue-600 text-white font-bold px-4 py-2 rounded-md shadow-md flex items-center gap-2 "
              >
                <FaCopy size={20} />
                <span>Copy</span>
              </button>
            </CopyToClipboard>
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <p className="text-white text-center text-2xl font-bold leading-relaxed">
            Your bio will appear here
          </p>
        </Fragment>
      )}
    </div>
  );
}
