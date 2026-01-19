import httpStatus from 'http-status';

import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';


const createStudent = async (req: Request, res: Response, next: NextFunction, ) => {
  try {
    // ✅ Zod দিয়ে validate করা
    

    // ✅ password বাদ দিয়ে বাকি সব studentData হিসেবে পাঠানো
    const { password, ...studentData } = req.body;

    // ✅ service call
    const result = await UserServices.createStudentIntoDB(password, studentData);

    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    }); 
  }
};

export const UserControllers = {
  createStudent,
};
