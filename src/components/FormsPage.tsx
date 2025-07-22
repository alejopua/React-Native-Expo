import { useForm } from "react-hook-form";

type FormInputs = {
  email: string;
  password: string;
};

export const FormsPage = () => {
  const { register, handleSubmit, watch } = useForm<FormInputs>({
    defaultValues: {
      email: "alejo@correo.com",
      password: "123456",
    },
  });

  console.log(watch("email"));

  const onSubmit = (myForm: FormInputs) => {
    console.log({ myForm });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="max-w-md mx-auto p-6 w-[500px]">
          <div className="bg-white rounded-xl border shadow-sm">
            {/* Content */}
            <div className="px-6 py-6">
              <h1 className="font-semibold text-2xl text-gray-900 mb-5">
                Login
              </h1>
              {/* Form Fields */}
              <div className="flex flex-col gap-4">
                {/* Email Field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="m@ejemplo.com"
                    className="flex h-9 w-full rounded-md border border-gray-300 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
                    {...register("email", { required: true })}
                  />
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700"
                  >
                    Contraseña
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="flex h-9 w-full rounded-md border border-gray-300 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50"
                    {...register("password", { required: true })}
                  />
                </div>

                {/* Submit Button */}
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white shadow hover:bg-blue-700 h-9 px-4 py-2 w-full">
                  Ingresar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
