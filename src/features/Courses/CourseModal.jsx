import Stars from "../../ui/Stars";
import CourseModalSidebar from "../../ui/CourseModalSidebar";
import CourseLessonsAndStudents from "../../ui/CourseLessonsAndStudents";
import CourseModalPill from "../../ui/CourseModalPill";
import { useState } from "react";

function CourseModal({ course }) {
  const [activePill, setActivePill] = useState("Overview");

  return (
    <div className="fixed inset-0 z-[500000] h-full w-full bg-stone-50 p-10 shadow-2xl lg:left-1/2 lg:top-1/2 lg:h-[85%] lg:w-3/4 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:transform lg:overflow-y-auto lg:rounded-lg">
      <div className="flex w-[70%] items-center gap-x-10   ">
        <img
          src={course.cover}
          className="w-[45%] rounded-lg border-[14px] border-white shadow-md"
        />
        <div className="flex flex-col gap-y-5">
          <h2
            className={`text-4xl font-bold capitalize hover:cursor-pointer hover:text-blue-600`}
          >
            {course.name}
          </h2>
          <div>
            <Stars ratings={course.ratings} reviews={course.reviews} />
          </div>
          <CourseLessonsAndStudents
            lessons={course.lessons}
            students={course.students}
          />
          <div className="flex h-14 items-center rounded-lg py-1">
            <img
              src="../../../public/teacher.jpg"
              className=" h-11 w-11 rounded-full "
            />
            <p className="ms-5 text-nowrap text-lg font-medium">
              <span className="font-normal">By</span> Ridvan Aliu
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex w-fit items-center gap-x-1 rounded-full bg-white p-[0.35rem] shadow-md">
        <CourseModalPill
          text="Overview"
          activePill={activePill}
          setActivePill={setActivePill}
        />
        <CourseModalPill
          text="Course Content"
          activePill={activePill}
          setActivePill={setActivePill}
        />
        <CourseModalPill
          text="Details"
          activePill={activePill}
          setActivePill={setActivePill}
        />
        <CourseModalPill
          text="Instructor"
          activePill={activePill}
          setActivePill={setActivePill}
        />
        <CourseModalPill
          text="Reviews"
          activePill={activePill}
          setActivePill={setActivePill}
        />
      </div>
      <CourseModalSidebar course={course} />
    </div>
  );
}

export default CourseModal;
