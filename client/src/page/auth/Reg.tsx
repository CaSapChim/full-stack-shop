import { Link } from "react-router-dom";

export const Reg = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center rounded-sm bg-white px-6 py-10 sm:bg-transparent lg:px-8">
      <div className="rounded-lg bg-white py-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-900">
            Đăng Ký Tài Khoản
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-3" action="#" method="POST">
            <div>
              <label
                htmlFor="userName"
                className="block text-sm font-medium leading-6 text-slate-900"
              >
                Tên Đăng Nhập
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="block  w-full rounded-md border-0 px-2 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:outline-0 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-slate-900"
              >
                Địa Chỉ Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block  w-full rounded-md border-0 px-2 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:outline-0 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-slate-900"
                >
                  Mật Khẩu
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:outline-0 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-slate-900"
                >
                  Nhập Lại Mật Khẩu
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:outline-0 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-slate-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
              >
                Đăng Ký
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-slate-500">
            Đã có tài khoản?{" "}
            <Link
              to="/auth/login"
              className="font-semibold leading-6 text-cyan-600 hover:text-cyan-500"
            >
              Đăng nhập.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
