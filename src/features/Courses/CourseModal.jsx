import CourseModalSidebar from "../../ui/CourseModalSidebar";
import CourseModalPill from "../../ui/CourseModalPill";
import { useState } from "react";
import CourseListView from "../../ui/CourseListView";
import CourseOverview from "../../ui/HardCodedCourseContent/CourseOverview";
import CourseDetails from "../../ui/HardCodedCourseContent/CourseDetails";
import Instructor from "../../ui/HardCodedCourseContent/Instructor";
import Reviews from "../../ui/HardCodedCourseContent/Reviews";
import CourseContent from "../../ui/HardCodedCourseContent/CourseContent";

function CourseModal({ course }) {
  const [activePill, setActivePill] = useState("Overview");

  return (
    <div className="fixed inset-0 z-[500000] h-full w-full bg-stone-50 p-10 shadow-2xl lg:left-1/2 lg:top-1/2 lg:h-[85%] lg:w-3/4 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:transform lg:overflow-y-auto lg:rounded-lg">
      <CourseListView course={course} />
      <div className="mt-6 flex w-[70%] items-center gap-x-1 rounded-full bg-white p-[0.35rem] shadow-md">
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
      {activePill === "Overview" && <CourseOverview />}
      {activePill === "Course Content" && <CourseContent />}
      {activePill === "Details" && <CourseDetails />}
      {activePill === "Instructor" && <Instructor />}
      {activePill === "Reviews" && <Reviews />}

      <CourseModalSidebar course={course} />
    </div>
  );
}

export default CourseModal;
