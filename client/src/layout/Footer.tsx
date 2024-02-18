import { memo } from "react";

export const Footer = memo(() => {
  return (
    <footer className="w-full bg-white">
      <div className="px-5">
        <div className="border-t-[1px] border-t-slate-900/10 py-5"></div>
        <div className="border-t-[1px] border-t-slate-900/10 py-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h4 className="font-semibold text-slate-900">
                Theo dõi bản tin của chúng tôi
              </h4>
              <p className="mt-2 text-sm text-slate-600">
                Tin tức và tài nguyên mới nhất được gửi tới mail đến của bạn
                hàng tuần
              </p>
            </div>
            <div className="flex h-9 gap-3 text-sm">
              <input
                className="rounded-lg border-[1px] border-slate-900/10 px-3 py-2 focus:outline-none"
                type="text"
                placeholder="Nhập Mail"
              />
              <button className="rounded-lg bg-slate-900 px-3 py-2 font-semibold text-white transition-all duration-300  hover:bg-slate-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t-[1px] border-t-slate-900/10 py-5">
          <div className="flex flex-col text-center text-sm text-slate-600 lg:flex-row lg:justify-between ">
            <p>© 2020 Your Company, Inc. All rights reserved.</p>
            <p>qưertyuiosdfghjkl</p>
          </div>
        </div>
      </div>
    </footer>
  );
});
