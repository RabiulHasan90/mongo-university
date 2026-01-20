import { z } from 'zod';
import { Course } from './course.model';

const PreRequisiteCourseValidationSchema = z.object({
  course: z.string(),
  isDeleted: z.boolean().optional(),
});

const createCourseValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    prefix: z.string(),
    code: z.number(),
    credits: z.number(),
    preRequisiteCourses: z.array(PreRequisiteCourseValidationSchema).optional(),
    isDeleted: z.boolean().optional(),
  }),
});

const updatePreRequisiteCourseValidationSchema = z.object({
  course: z.string(),
  isDeleted: z.boolean().optional(),
});

const updateCourseValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    prefix: z.string().optional(),
    code: z.number().optional(),
    credits: z.number().optional(),
    preRequisiteCourses: z
      .array(updatePreRequisiteCourseValidationSchema)
      .optional(),
    isDeleted: z.boolean().optional(),
  }),
});

const facultiesWithCourseValidationSchema = z.object({
  body: z.object({
    faculties: z.array(z.string()),
  }),
});

export const CourseValidations = {
  createCourseValidationSchema,
  updateCourseValidationSchema,
  facultiesWithCourseValidationSchema,
};





//  here is validation raw Data
//  for Cours
// {
//     "title": "Hyper text markup language",
//     "prefix": "HTML",
//     "code":101,
//     "credits": 3
// }

//FOR PREREQUESTCOURSE
// {
//     "title": "Hyper text markup language2",
//     "prefix": "HTML",
//     "code":101,
//     "credits": 3,
//     "preRequisiteCourses": [{
//         "course": "696fde939d0801ef2b41b3d3"
//     }]
// }

