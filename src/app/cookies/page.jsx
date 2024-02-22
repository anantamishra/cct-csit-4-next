"use client";
import {
  setCookie,
  getCookie,
  getCookies,
  deleteCookie,
  hasCookie,
} from "cookies-next";
import { useRouter } from "next/navigation";

const CookiesPage = () => {
  const router = useRouter();

  const collegeName = getCookie("name");
  // getCookies({ cookies });
  // hasCookie("test1", { cookies });

  const handleSetCookies = () => {
    setCookie("name", "Chitwan College of Technology");
    router.refresh();
  };

  const handleDelete = () => {
    deleteCookie("name");
    router.refresh();
  };

  return (
    <main className="w-full min-h-screen justify-center items-center flex flex-col gap-5">
      <button
        onClick={handleSetCookies}
        className="bg-red-500 px-4 py-2  text-white"
      >
        set cookie
      </button>
      <button
        onClick={handleDelete}
        className="bg-red-500 px-4 py-2  text-white outline outline-2 rounded outline-blue-600/20 hover:outline-blue-600/60"
      >
        Delete cookie
      </button>
      <p className="w-96 truncate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
        totam? Deleniti ipsa excepturi dolorem nemo, molestiae voluptatum,
        aliquid enim tempora placeat itaque facilis sapiente voluptatibus sequi
        fugiat possimus consectetur assumenda?
      </p>
      <span class="relative flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
      </span>

      <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
        <div class="animate-pulse flex space-x-4">
          <div class="rounded-full bg-slate-700 h-10 w-10"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 bg-slate-700 rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-2 bg-slate-700 rounded col-span-2"></div>
                <div class="h-2 bg-slate-700 rounded col-span-1"></div>
              </div>
              <div class="h-2 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CookiesPage;
