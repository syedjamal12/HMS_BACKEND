import { Message } from "../models/messageSchema.js";
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";

//catchAynchError ek middleware
export const sendMessage = catchAsyncError(async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !message) {
   return next(new ErrorHandler("Please Fill Full Form!", 400));
   //ErrorHandler ek middleware jo error handle krta h
  }
  await Message.create({ firstName, lastName, email, phone, message });
  res.status(200).json({
    success: true,
    message: "Message Sent!",
  });
});


export const getAllMessages = catchAsyncError(async (req, res, next) => {
  const messages = await Message.find();
  res.status(200).json({
    success: true,
    messages,
  });
});
