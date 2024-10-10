import { Progress } from "../../../../components/ui/progress"
import { motion } from "framer-motion"
import { TypographyH4 } from "../../../../components/Typography"
import { Button } from "../../../../components/ui/button"
import { SiHiveBlockchain } from "react-icons/si"
// import { FcGoogle } from "react-icons/fc"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Link, useNavigate } from "react-router-dom"
import AuthButton from "../../../../lib/internet_id"

const StuCreateAcc = () => {
  const router = useNavigate()
  const navigate = () => {
    router("/auth/signup/student/select-language")
  }

  // form schema for validation
  const initialValues = {
    name: "",
    email: "",
    password: ""
  }
  const validationSchema = Yup.object({
    name: Yup.string().required().required("Please enter full name"),
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
      navigate()
    }
  })

  return (
    <motion.main
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="p-5 md:p-10 flex flex-row gap-16 justify-center m-auto"
    >
      <div className="max-w-[500px] w-full px-3">
        {/* logo */}
        <div className="">
          <img
            src="/images/logo.svg"
            alt="logo"
            width={196}
            height={66}
            className=""
          />
        </div>

        {/* progress bar */}
        <div className="py-10">
          <p>2/3</p>
          <Progress
            value={66}
            className=" bg-amber-100 active:bg-white md:w-96 w-64 h-1"
          />
        </div>

        <TypographyH4 className={"pb-3"}>Create An Account</TypographyH4>
        <p className="text-sm pb-6 text-gray-500">
          Describe yourself clearly to avoid any mistakes
        </p>

        <div className="flex flex-col gap-4">
          <Button className="bg-inherit text-black border border-black h-12 flex flex-row items-center gap-3">
            <SiHiveBlockchain className="text-xl" /> <AuthButton
            label="Sign in with Internet Identity" isStudent={true}
						/>
          </Button>
          <Button className="bg-inherit text-black border border-black h-12 flex flex-row items-center gap-3">
             <AuthButton
              label="Sign in with NFID"
              isNFID={true}
              isStudent={true}
            />
          </Button>
        </div>

        <div className="flex flex-row gap-4 w-full items-center py-5 pb-7">
          <div className="h-0.5 w-full bg-gray-200"></div>
          or
          <div className="h-0.5 w-full bg-gray-200"></div>
        </div>

        {/* Submit form */}
        <form action="" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold" htmlFor="name">
                Full Name*
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="border border-gray-200 p-2 rounded-md"
                {...formik.getFieldProps("name")}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-black text-xs">{formik.errors.name}</div>
              ) : null}
            </div>
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
            Create Account
          </Button>
          <div>
            <p className="text-sm text-gray-500 py-3 text-right">
              Already have an account?{" "}
              <Link
                to={"/auth/signin/student/"}
                className="underline font-semibold"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>

      {/*StuCreateAcc image */}
      <div className="lg:block hidden">
        <img
          src="/images/auth/signup-img-5.png"
          alt="Img5"
          className="h-screen aspect-auto w-fit"
        />
      </div>
    </motion.main>
  )
}

export default StuCreateAcc
