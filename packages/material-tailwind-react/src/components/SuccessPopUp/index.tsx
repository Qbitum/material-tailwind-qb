
  import React from "react";
import Card, { CardBody } from "../Card";
import IconButton from "../IconButton";
import Typography from "../Typography";
  
  export function SuccessPopUp() {
    return (
      <section>
        <div className="w-full px-4">
          <div className="grid h-screen place-items-center">
            <Card className=" max-w-xl">
              <CardBody className="w-full">
                <div className="flex w-full justify-center">
                  <i className="fa-solid fa-check text-3xl text-gray-900"></i>
                </div>
                <Typography
                  color="blue-gray"
                  className="mb-6 mt-10 text-center"
                  variant="h4"
                >
                  Upload Complete!
                </Typography>
                <Typography
                  className="text-center text-[20px] font-normal  leading-[30px] text-gray-500"
                >
                  Your file has been successfully uploaded. Thank you for sharing
                  it with us.
                </Typography>
                <Typography
                  className="my-6 text-center text-[20px] font-normal leading-[30px] text-gray-500 "
                >
                  Follow us:
                </Typography>
                <div className="flex justify-center !gap-4">
                  <IconButton className="rounded-full" color="gray" size="sm">
                    <i className="fa-brands fa-facebook text-xl" />
                  </IconButton>
                  <IconButton className="rounded-full" color="gray" size="sm">
                    <i className="fa-brands fa-instagram text-xl" />
                  </IconButton>
                  <IconButton className="rounded-full " color="gray" size="sm">
                    <i className="fa-brands fa-github text-xl" />
                  </IconButton>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </section>
    );
  }
  
  export default SuccessPopUp;