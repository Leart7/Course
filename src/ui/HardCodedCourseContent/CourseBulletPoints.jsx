import OverviewBulletPoint from "./OverviewBulletPoint";

function CourseBulletPoints() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex w-[40%] flex-col gap-y-3">
        <OverviewBulletPoint text="Become an advanced, confident, and modern JavaScript developer from scratch." />
        <OverviewBulletPoint text="Have an intermediate skill level of Python programming." />
        <OverviewBulletPoint text="Have a portfolio of various data analysis projects." />
        <OverviewBulletPoint text="Use the numpy library to create and manipulate arrays." />
      </div>
      <div className="flex w-[40%] flex-col gap-y-3">
        <OverviewBulletPoint text="Use the Jupyter Notebook Environment. JavaScript developer from scratch." />
        <OverviewBulletPoint text="Use the pandas module with Python to create and structure data." />
        <OverviewBulletPoint text="Have a portfolio of various data analysis projects." />
        <OverviewBulletPoint text="Create data visualizations using matplotlib and the seaborn." />
      </div>
    </div>
  );
}

export default CourseBulletPoints;
