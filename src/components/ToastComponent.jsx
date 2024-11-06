"use client";
import toast from "react-hot-toast";
export default function ToastComonent(props) {
  toast.dismiss();
  toast(props.message);
  return <></>;
}
