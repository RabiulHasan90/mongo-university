import { Request, RequestHandler, Response } from 'express';
import { studentService } from './student.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import AppError from '../../errors/AppError';


// const createStudent= async( req:Request,res:Response)=>{
// try{
//         const studentData = req.body;
//         const zodparseData = studentValidationSchema.parse(studentData)
// const result = await studentService.createStudentIntoDB(zodparseData);
//  res.status(200).json({
//       success: true,
//       message: 'Student is created succesfully',
//       data: result,
// });
// }  catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message || 'something went wrong',
//       error: err,
//     });
//   }

   

// }
const getAllStudents : RequestHandler =  catchAsync(async(req:Request, res:Response)=>{
  const result = await studentService.getAllStudentsFromDB(req.query);
 

    //const result = await studentService.getAllStudentsFromDB()
 res.status(200).json({
      success: true,
      message: 'get all student  succesfully',
      data: result,
});

})



// const getSingleStudent = catchAsync(async(req:Request, res:Response)=>{
  
//     const {studentId} =req.params;
//     const result = await studentService.getSingleStudentsFromDB(studentId)
//  sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Student is retrieved succesfully',
//     data: result,
//   });
// });
const getSingleStudent = catchAsync(async (req: Request, res: Response) => {
  const { studentId } = req.params;
  const result = await studentService.getSingleStudentsFromDB(studentId);

  if (!result) {
    // যদি student না পাওয়া যায়, তাহলে error throw করো
    throw new AppError(httpStatus.NOT_FOUND, "Student not found!");
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student is retrieved successfully",
    data: result,
  });
});
  
// const updateStudent = catchAsync(async (req, res) => {
//   const { studentId } = req.params;
//   const { student } = req.body;
//   const result = await studentService.updateStudentIntoDB(studentId, student);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Student is updated succesfully',
//     data: result,
//   });
// });
const updateStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const { student } = req.body; // frontend থেকে "student" হিসেবে ডেটা আসবে

  const result = await studentService.updateStudentIntoDB(studentId, student);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Student is updated successfully",
    data: result,
  });
});


  const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params; 

    const result = await studentService.deleteStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student is deleted succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};
export const StudentControllers = {

  getAllStudents,
  getSingleStudent,
  deleteStudent,
  updateStudent,
  
}; 