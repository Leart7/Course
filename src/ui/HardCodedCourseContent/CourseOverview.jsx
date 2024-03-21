import CourseBulletPoints from "./CourseBulletPoints";
import CourseModalBody from "./CourseModalBody";

function CourseOverview() {
  return (
    <>
      <CourseModalBody title="What you'll learn">
        <div className="my-5 flex flex-col gap-y-8">
          <p>
            Are you new to PHP or need a refresher? Then this course will help
            you get all the fundamentals of Procedural PHP, Object Oriented PHP,
            MYSQLi and ending the course by building a CMS system similar to
            WordPress, Joomla or Drupal. Knowing PHP has allowed me to make
            enough money to stay home and make courses like this one for
            students all over the world.
          </p>
          <CourseBulletPoints />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
            aliquam voluptas laudantium incidunt architecto nam excepturi
            provident rem laborum repellendus placeat neque aut doloremque ut
            ullam, veritatis nesciunt iusto officia alias, non est vitae. Eius
            repudiandae optio quam alias aperiam nemo nam tempora, dignissimos
            dicta excepturi ea quo ipsum omnis maiores perferendis commodi
            voluptatum facere vel vero. Praesentium quisquam iure veritatis,
            perferendis adipisci sequi blanditiis quidem porro eligendi fugiat
            facilis inventore amet delectus expedita deserunt ut molestiae modi
            laudantium, quia tenetur animi natus ea. Molestiae molestias ducimus
            pariatur et consectetur. Error vero, eum soluta delectus
            necessitatibus eligendi numquam hic at?
          </p>
        </div>
      </CourseModalBody>
    </>
  );
}

export default CourseOverview;
