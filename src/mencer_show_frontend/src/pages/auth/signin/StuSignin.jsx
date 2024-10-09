import { TypographyH3 } from "../../../components/Typography";
import { Button } from "../../../components/ui/button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SiHiveBlockchain } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const StuSignin = () => {
  // Form handling with formik and yup
  const initialValues = {
    email: "",
    password: ""
  }
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Please enter email")
      .email("Not a valid email"),
    password: Yup.string()
      .required("Please enter password")
      .min(6, "Password must be at least 6 characters")
  })

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: values => {
      console.log(values)
    }
  })

  return (
    <div className="p-5 md:p-10 flex flex-row gap-16 justify-center m-auto">
      <div className="max-w-[500px] w-full px-3">
        {/* logo */}
        <div className="">
          <img
            src="/images/logo.svg"
            alt="logo"
            width={196}
            height={66}
            className=""
            quality={100}
          />
        </div>

        <div>
          <TypographyH3 className={"my-10"}>Welcome back learner!</TypographyH3>
        </div>
        <div className="flex flex-col gap-4">
          <Button className="bg-inherit text-black border border-black h-12 flex flex-row items-center gap-3">
            <SiHiveBlockchain className="text-xl" /> Continue with Internet
            Identity{" "}
          </Button>
          <Button className="bg-inherit text-black border border-black h-12 flex flex-row items-center gap-3">
            <FcGoogle className="text-xl" /> Continue with Google
          </Button>
        </div>

        <div className="flex flex-row gap-4 w-full items-center py-5 pb-7">
          <div className="h-0.5 w-full bg-gray-200"></div>
          or
          <div className="h-0.5 w-full bg-gray-200"></div>
        </div>

        <form action="" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold" htmlFor="email">
                Email*
              </label>
              <input
                type="email"
                placeholder="johnDoe@email.com"
                className="border border-gray-200 p-2 rounded-md"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-black text-xs">{formik.errors.email}</div>
              ) : null}
            </div>{" "}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold" htmlFor="password">
                Password*
              </label>
              <input
                type="password"
                placeholder="*******"
                className="border border-gray-200 p-2 rounded-md"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-black text-xs">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>
          </div>
          <Button
            type="submit"
            className="bg-primary hover:bg-primaryHover duration-300 h-12 w-full text-black mt-10"
            onClick={formik.handleSubmit}
          >
            Login
          </Button>
        </form>

        {/* Route to signup */}
        <div>
          <p className="text-sm text-gray-500 py-3 text-right">
            Don't have an account? Click {" "}
            <Link
              to={"/auth/signup/student"}
              className="underline font-semibold"
            >
              here
            </Link>
          </p>
        </div>
      </div>

      <div className="lg:block hidden">
        <img
          src="/images/auth/signup-img-2.png"
          alt="logo"
          className="h-screen aspect-auto w-fit"
        />
      </div>
    </div>
  )
}

export default StuSignin
