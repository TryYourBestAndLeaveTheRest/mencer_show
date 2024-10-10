import Models "Types";
import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Text "mo:base/Text";
import Result "mo:base/Result";
import Iter "mo:base/Iter";
import Nat "mo:base/Nat";
import Nat32 "mo:base/Nat32";
import Time "mo:base/Time";
import Int "mo:base/Int";
import Array "mo:base/Array";
import Nat8 "mo:base/Nat8";
import Float "mo:base/Float";

actor {

  type Student = Models.Student;
  type Instructor = Models.Instructor;
  type CourseId = Models.CourseId;
  // type MediaReference = Models.MediaReference;
  // type Role = Models.Role;
  type Lesson = Models.Lesson;
  type Course = Models.Course;
  type Review = Models.Review;
  type Quiz = Models.Quiz;
  type Enrollment = Models.Enrollment;
  type Notification = Models.Notification;

  let courses : HashMap.HashMap<CourseId, Course> = HashMap.HashMap<CourseId, Course>(0, Text.equal, Text.hash);

  let students : HashMap.HashMap<Principal, Student> = HashMap.HashMap<Principal, Student>(0, Principal.equal, Principal.hash);
  let instructors : HashMap.HashMap<Principal, Instructor> = HashMap.HashMap<Principal, Instructor>(0, Principal.equal, Principal.hash);
  let enrollments : HashMap.HashMap<Text, Enrollment> = HashMap.HashMap<Text, Enrollment>(0, Text.equal, Text.hash);
  let reviews : HashMap.HashMap<Text, Review> = HashMap.HashMap<Text, Review>(0, Text.equal, Text.hash);
  let notifications : HashMap.HashMap<Principal, [Notification]> = HashMap.HashMap<Principal, [Notification]>(0, Principal.equal, Principal.hash);

  public shared ({ caller }) func createNewStudent({
    firstname : Text;
    lastname : Text;
    email : Text;
    preferredLanguage : Text;
  }) : async Result.Result<(), Text> {
    switch (students.get(caller)) {
      case (null) {
        let newStudent = {
          firstname;
          lastname;
          email;
          isActive = true;
          preferredLanguage;
          createdAt = Time.now();
          enrolledCourses = [];
        };
        students.put(caller, newStudent);
        return #ok();
      };
      case (_) {
        return #err("This user already exits please login");
      };
    };
  };
  public shared ({ caller }) func createNewInstructor({
    firstname : Text;
    lastname : Text;
    email : Text;
    company : Text;
    about : Text;
    preferredLanguage : Text;
  }) : async Result.Result<(), Text> {
    switch (instructors.get(caller)) {
      case (null) {
        let newInstructor : Instructor = {
          firstname;
          lastname;
          email;
          about = about;
          company = company;
          preferredLanguage;
          createdCourses = [];
          isVerified = false;
          createdAt = Time.now();
        };
        instructors.put(caller, newInstructor);
        return #ok();
      };
      case (_) {
        return #err("This user already exits");
      };
    };
  };
  public query func getAllStudents() : async [Student] {
    return Iter.toArray(students.vals());
  };
  public query func getAllInstructors() : async [Instructor] {
    return Iter.toArray(instructors.vals());
  };
  public query func getCourse(courseId : CourseId) : async ?Course {
    return courses.get(courseId);
  };

  public shared ({ caller }) func updateStudentInfo(student : Student) : async Result.Result<(), Text> {
    switch (students.get(caller)) {
      case (null) { return #err("This user does not exist") };
      case (_) {
        students.put(caller, student);
        return #ok();
      };
    };

  };
  public shared ({ caller }) func updateInstructorInfo(instructor : Instructor) : async Result.Result<(), Text> {
    switch (instructors.get(caller)) {
      case (null) { return #err("This user does not exist") };
      case (_) {
        instructors.put(caller, instructor);
        return #ok();
      };
    };

  };

  public shared ({ caller }) func deleteStudent() : async Result.Result<(), Text> {
    students.delete(caller);
    return #ok();
  };
  public shared ({ caller }) func deleteInstructor() : async Result.Result<(), Text> {
    instructors.delete(caller);
    return #ok();
  };
  public shared ({ caller }) func loginAsStudent() : async Result.Result<Student, Text> {
    switch (students.get(caller)) {
      case (null) { return #err("Student not found, please register first.") };
      case (?student) { return #ok(student) };
    };
  };
  public shared ({ caller }) func loginAsInstructor() : async Result.Result<Instructor, Text> {
    switch (instructors.get(caller)) {
      case (null) {
        return #err("Instructor not found, please register first.");
      };
      case (?instructor) { return #ok(instructor) };
    };
  };

  public shared ({ caller }) func initCourse({
    title : Text;
    subtitle : Text;
    description : Text;
    videoUrl : Text;
  }) : async Result.Result<(), Text> {
    let courseId : CourseId = generateId("Course_", title);
    switch (courses.get(courseId)) {
      case (null) {
        let newCourse : Course = {
          id = courseId;
          title;
          subtitle;
          description;
          categories = [];
          videoUrl;
          instructor = caller;
          lessons = [];
          quizzes = [];
          students = []; // remember to update this field anytime a user enroll for a course
          rating : Float = 0;
          createdAt = Time.now();
          updatedAt = Time.now();
        };
        courses.put(courseId, newCourse);
        return #ok();
      };
      case (_) {
        return #err("try again");
      };
    };

  };
  public shared ({ caller }) func addLesson(
    {
      title : Text;
      notes : Text;
      materials : [{ title : Text; url : Text }];
      duration : Nat;
    },
    courseId : CourseId,
  ) : async Result.Result<(), Text> {
    let lessonId = generateId("Lesson_", title);
    switch (courses.get(courseId)) {
      case (null) {
        return #err("The selected course is not avalable for update currently");
      };
      case (?course) {
        if (course.instructor != caller) {
          return #err "Sorry you don't have access to add lesson to this course";
        };
        let newLesson = {
          lessonId;
          title;
          notes;
          materials;
          duration;
        };
        let lessons = Array.append(course.lessons, [newLesson]);
        let updatedCourse = { course with lessons = lessons };
        let updatedCourseWithTime = {
          updatedCourse with updatedAt = Time.now()
        };
        courses.put(courseId, updatedCourseWithTime);
        return #ok();
      };
    };

  };
  public shared ({ caller }) func addQuiz(
    courseId : CourseId,
    quiz : [Quiz],
  ) : async Result.Result<(), Text> {
    switch (courses.get(courseId)) {
      case (null) { return #err("This course does not exist here right") };
      case (?course) {
        if (course.instructor != caller) {
          return #err "Sorry you don't have access to add lesson to this course";
        };
        let quizess = Array.append(course.quizzes, quiz);
        let updatedCourse = { course with quizzes = quizess };
        courses.put(courseId, updatedCourse);
        return #ok();
      };
    };
  };
  public query func getCourseId() : async [CourseId] {
    return Iter.toArray(courses.keys());
  };

  public shared ({ caller }) func enroll(courseId : CourseId) : async Result.Result<(), Text> {
    switch (students.get(caller)) {
      case (null) { return #err("You are not currently a signed in user") };
      case (?student) {
        let enrollmentId = generateId("Enroll_", Principal.toText(caller));
        let enrollment = {
          id = enrollmentId;
          userId = caller;
          courseId;
          enrolledAt = Time.now();
          progress = 0;
          isCompleted = false;
        };
        enrollments.put(enrollmentId, enrollment);
        let studentCourses = Array.append(student.enrolledCourses, [courseId]);
        let updatedStudent = { student with enrolledCourses = studentCourses };
        students.put(caller, updatedStudent);
        return #ok();
      };
    };

  };
  func generateId(prefix : Text, vals : Text) : Text {
    return prefix # Int.toText(Time.now() + Nat32.toNat(Text.hash(vals)));
  };

  public shared ({ caller }) func addReview(
    courseId : CourseId,
    rating : Int,
    comment : Text,
  ) : async Result.Result<(), Text> {
    switch (students.get(caller)) {
      case (null) { return #err("Only students can add reviews.") };
      case (?student) {
        switch (courses.get(courseId)) {
          case (null) { return #err("Course not found.") };
          case (?course) {
            let reviewId = generateId("Review_", courseId);
            let newReview = {
              reviewer = caller;
              rating;
              comment;
              courseId;
              id = reviewId;
              createdAt = Time.now();
              updatedAt = Time.now();
            };
            reviews.put(reviewId, newReview);
            let newRating : Float = calculateAverageRating(Iter.toArray(reviews.vals()));
            let updatedCourse = { course with reviews; rating = newRating };
            courses.put(courseId, updatedCourse);
            return #ok();
          };
        };
      };
    };
  };
  // public shared ({ caller }) func completeCourse(courseId : CourseId) : async Result.Result<(), Text> {
  //   switch (enrollments.get(caller)) {
  //     case (null) { return #err("You are not enrolled in this course.") };
  //     case (?enrollment) {
  //       let updatedEnrollment = {
  //         enrollment with isCompleted = true;
  //         progress = 100;
  //       };
  //       enrollments.put(caller, updatedEnrollment);
  //       return #ok();
  //     };
  //   };
  // };
  // Helper function to calculate the average rating
  func calculateAverageRating(reviews : [Review]) : Float {
    let totalRating = Array.foldLeft<Review, Int>(reviews, 0, func(acc, review) { acc + review.rating });
    let count = Array.size(reviews);
    if (count > 0) {
      return Float.fromInt(totalRating) / Float.fromInt(count);
    } else {
      return 0;
    };
  };

  public func sendNotification(userId : Principal, message : Text) : async Result.Result<(), Text> {
    let notification = {
      id = generateId("Notif_", Principal.toText(userId));
      userId;
      message;
      read = false;
      createdAt = Time.now();
    };
    switch (notifications.get(userId)) {
      case (null) {
        notifications.put(userId, [notification]);
      };
      case (?existingNotifications) {
        let updatedNotifications = Array.append(existingNotifications, [notification]);
        notifications.put(userId, updatedNotifications);
      };
    };
    return #ok();
  };

  public query func getNotifications(userId : Principal) : async [Notification] {
    switch (notifications.get(userId)) {
      case (null) { return [] };
      case (?userNotifications) { return userNotifications };
    };
  };

};
