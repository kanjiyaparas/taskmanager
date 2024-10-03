import { Dialog } from "@headlessui/react";
import React from "react";
import { useForm } from "react-hook-form";
// import Button from "./Button";
// import ModalWrapper from "./ModalWrapper";
// import Textbox from "./Textbox";
import { toast } from "sonner";
import ModalWrapper from "../ModalWrapper";
import Textbox from "../Textbox";
import Loading from "../Loader";
import Button from "../Button";
import { useChangepasswordMutation } from "../../redux/slices/api/userApiSlice";

const ChangePassword = ({ open, setOpen }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [changeUserPassword, { isLoading }] = useChangepasswordMutation();

  const handleOnSubmit = async (data) => {
    if (data.password !== data.cpass) {
      toast.warning("Passwords don't match");
      return;
    }

    try {
      const result = await changeUserPassword(data).unwrap();
      toast.success("Password changed successfully");
      setOpen(false); // Close the modal on success
    } catch (error) {
      toast.error("Failed to change password");
    }
  };
  return (
    <>
      <ModalWrapper open={open} setOpen={setOpen}>
        <form onSubmit={handleSubmit(handleOnSubmit)} className="">
          <Dialog.Title 
            as='h2' 
            className='text-base font-bold leading-6 text-gray-900 mb-4'>
            Change Password
          </Dialog.Title>
          <div className='mt-2 flex flex-col gap-6'>
            <Textbox
              placeholder='New Password'
              type='password'
              name='password'
              label='New Password'
              className='w-full rounded'
              register={register("password", {
                required: "New Password is required!",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters"
                }
              })}
            />
            <Textbox
  placeholder='Confirm New Password'
  type='password'
  name='cpass'
  label='Confirm New Password'
  className='w-full rounded'
  register={register("cpass", {
    required: "Confirm New Password is required!",
  })}
  error={errors.cpass ? errors.cpass.message : ""}
/>

{isLoading ? (
  <div className='py-5'>
    <Loading />
  </div>
) : (
  <div className='py-3 mt-4 sm:flex sm:flex-row-reverse'>
    <Button
      type='submit'
      className='bg-blue-600 px-8 text-sm font-semibold text-white hover:bg-blue-700'
      label='Save'
    />
    <button type="button" className="bg-white px-5 text-sm font-semibold text-gray-900 sm:w-auto" onClick={setOpen(false)}>close</button>
  </div>
)}

          </div>
        </form>
      </ModalWrapper>
    </>
  )};

  export default ChangePassword

  