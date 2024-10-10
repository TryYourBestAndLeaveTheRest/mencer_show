import Principal "mo:base/Principal";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Bool "mo:base/Bool";
module Models {

  public type Student = {
    firstname : Text;
    lastname : Text;
    email : Text;
    preferredLanguage : Text;
    enrolledCourses : [CourseId];
    createdAt : Time.Time;
  };
  public type Instructor = {
    firstname : Text;
    lastname : Text;
    email : Text;
    preferredLanguage : Text;
    createdCourses : [CourseId];
    company : Text;
    about : Text;
    createdAt : Time.Time;
    isVerified : Bool;
  };
  public type Mentor = {
    id : Nat;
    category : Text;
    name : Text;
    imageUrl : Text;
    location : Text;
    role : { #SBD : Text; #JBD : Text };
    company : Text;
    experience : Nat;
    sessions : Nat;
    reviews : Nat;
    avgAttendance : Nat;
    topRated : Bool;
  };
  public type CourseId = Text;
  public type Lesson = {
    lessonId : Text;
    title : Text;
    notes : Text;
    materials : [{ title : Text; url : Text }];
    duration : Nat;
  };
  public type Category = {
    name : Text;
    videos : [{ title : Text; url : Text }];
  };
  public type Course = {
    id : CourseId;
    title : Text;
    subtitle : Text;
    categories : [Category];
    description : Text;
    videoUrl : Text;

    instructor : Principal;
    lessons : [Lesson];
    quizzes : [Quiz];
    students : [Principal];
    rating : Float;
    createdAt : Time.Time;
    updatedAt : Time.Time;
  };
  public type Enrollment = {
    id : Text;
    userId : Principal;
    courseId : CourseId;
    enrolledAt : Time.Time;
    progress : Nat;
    isCompleted : Bool;
  };
  public type Notification = {
    id : Text;
    userId : Principal;
    message : Text;
    read : Bool;
    createdAt : Time.Time;
  };
  public type Review = {
    reviewer : Principal;
    rating : Int;
    comment : Text;
    courseId : CourseId;
    id : Text;
    createdAt : Time.Time;
    updatedAt : Time.Time;
  };
  public type Quiz = {
    question : Text;
    option : [Text];
    answer : Nat;
  };

};
