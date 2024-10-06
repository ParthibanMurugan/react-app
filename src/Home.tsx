import { Button, Field, Fieldset, Legend, Textarea } from "@headlessui/react";
import { useEffect } from "react";
interface HomeProps {
  page: string;
}

function Home({ page }: HomeProps) {
  useEffect(() => {
    console.log("into use effect", page);
  });
  return (
    <div className="space-y-2 divide-y divide-gray-900/10">
      <div>
        <h2 className="font-semibold ">ADD PRODUCT</h2>
      </div>
      <div>
        <div className="grid grid-cols-2 py-2   h-1/4 ">
          <div className=" box-border h-60 px-2 shadow-md">
            <h2>Upload Product Image</h2>
            <div className="grid place-items-center">
              <div>
                <p>Upload images</p>
              </div>
              <div>
                <Button
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                  onClick={() => {
                    alert(`on click`);
                  }}
                >
                  upload
                </Button>
              </div>
            </div>
          </div>
          <div className=" box-border px-2 mx-3 shadow-md">
            <Fieldset>
              <Legend className="text-base/7 font-medium ">
                Product Details
              </Legend>
            </Fieldset>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
